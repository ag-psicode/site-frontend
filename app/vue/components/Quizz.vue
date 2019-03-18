<template>
    <div class="quizz__wrapper">
        <section v-if="this.step < questions.length">
          <Question :question="questions[step]"></Question>
          <ResponseSet :type="questions[step].type" :choices="questions[step].choices" ref="rs"></ResponseSet>

          <button v-show="step > 0" v-on:click="prev()" class="prev" type="button">Prev</button>
          <button @click="next()" class="next" type="button" :disabled="!allowNext">Próximo</button>
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
        formData: {
        }
    }),
    computed: {
      allowNext: function() {
        if (this.questions[this.step].type == "multiple") {
          if (this.formData[this.step]) {
            for (item in this.formData[step]) {
              if (item) {
                return true;
              }

            }
          }
          return false;
        } else {
          return true;
        }
      } 
    },
    methods: {
      prev: function(){
        --this.step;
      },
      next: function() {
        this.formData[this.step] = this.$refs.rs.getResponse();
        ++this.step;
      }
    }
}
</script>

<style lang="css">
.quizz__wrapper {
  text-align: left;
}
</style>
