<template>
    <div>
        <section v-if="this.step < questions.length">
          <Question :question="questions[step]"></Question>
          <ResponseSet :type="questions[step].type" :choices="questions[step].choices"></ResponseSet>

          <button v-on:click="prev()" :disabled="!step" class="prev" type="button">Prev</button>
          <button @click="next()" class="next" type="button">Next</button>
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
        previous: null
    }),
    methods: {
      prev: function(){
        --this.step;
      },
      next: function() {
        ++this.step;
      }
    }
}
</script>

<style lang="css">
</style>
