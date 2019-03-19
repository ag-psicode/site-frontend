<template>
    <div class="quizz__wrapper">
        <section v-if="this.step < questions.length">
          <Question :question="questions[step]"></Question>
          <ResponseSet :type="questions[step].type" :choices="questions[step].choices" ref="rs"></ResponseSet>

          <button v-show="step > 0" v-on:click="changeStep(-1)" class="prev" type="button">Prev</button>
          <button @click="changeStep(+1)" class="next" type="button" :disabled="!tmpData">Próximo</button>
        </section>
        <section v-else>
          Obrigado, entraremos em contato :)
        </section>
    </div>
</template>

<script>
import QuestionComponent from 'components/Question.vue';
import ResponseSet from 'components/ResponseSet.vue';
import Questions from '../questions/Questions.js';

export default {
    components: { Question: QuestionComponent, ResponseSet },
    data: () => ({
        step: 0,
        questions: Questions,
        tmpData: null,
    }),
    methods: {
      changeStep: function(delta) {
        this.$store.dispatch('setField', {fieldName: this.questions[this.step].name, value: this.tmpData})
        this.tmpData = null;
        this.$refs.rs.reset();
        
        // Change step
        this.step = this.step + delta;

        this.$refs.rs.setData(this.$store.state.estimateForm[this.questions[this.step].name], this.questions[this.step]['type']);
      },
      updateTmpData: function(tmpData) {
        if (Array.isArray(tmpData)) {
          var empty = true;
          tmpData.forEach((v, i) => {
            if (v) {
              empty = false;
            }
          })

          if (empty) {
            this.tmpData = null;
          } else {
            this.tmpData = tmpData;
          }
        } else {
          this.tmpData = tmpData;
        }
      }
    },
    mounted() {
      this.$on('change', (response) => {
        this.updateTmpData(response);
      })
    }
}
</script>

<style lang="css">
.quizz__wrapper {
  text-align: left;
}
</style>
