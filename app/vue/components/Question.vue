<template>
    <div>
      <h2>{{ question.title }}</h2>
      <h3>{{ question.subtitle }}</h3>
    </div>
</template>

<script>
import Questions from 'questions/Questions';

export default {
    props: [ 'question' ],
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="css">
body {
  text-align: center;
}
h1 {
  font-size: 28px;
  font-weight: bold;
}
h2 {
  font-size: 20px;
}
</style>
