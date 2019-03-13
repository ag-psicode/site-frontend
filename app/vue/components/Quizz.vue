<template>
    <div>

        <Titulo v-show="step === 1">Pergunta 1</Titulo>
        <Titulo v-show="step === 2">Pergunta 2</Titulo>
        <Titulo v-show="step === 3">Pergunta 3</Titulo>
        <Titulo v-show="step === 4">Pergunta 4</Titulo>
        <Titulo v-show="step === 5">Pergunta 5</Titulo>

        <button v-on:click="navigation(step-1)" class="prev" type="button">Prev</button>
        <button v-on:click="navigation(step+1)" class="next" type="button">Next</button>

    </div>
</template>

<script>
import Titulo from 'components/Titulo.vue';

export default {
    components: { Titulo },
    data: () => ({
        step: 1
    }),
    methods: {
        navigation: function(stepPosition) {
            if(stepPosition <= 0) {
                console.log("acabou pra menos");
            }
            else if(stepPosition > 5) {
                console.log("acabou pra mais");
            }
            else {
                this.step = stepPosition;
            }
        }
    }
}
</script>

<style lang="css">
</style>
