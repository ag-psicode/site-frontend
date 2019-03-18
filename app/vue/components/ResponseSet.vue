<template>
    <div>
          <div v-if="type == 'phone'">
            <input type="text" v-model="phone">
          </div>

          <div v-if="type == 'char'">
            <input type="text" v-model="char">
          </div>

          <div v-if="type == 'text'">
            <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
          </div>

          <div v-if="type == 'multiple'">
            <ul>
              <li v-for="(choice, index) in choices" v-bind:key="choice">
                <input v-model="multiple[index]" type="checkbox" name="group" :value="choice" :ref="`chb${index}`" :id="`chb${index}`" @change="change()"/>
                <label :for="`chb${index}`">{{ choice }}</label>
              </li>
            </ul>
          </div>
          {{ multiple }}
    </div>
</template>

<script>
export default {
    props: [ "type", "choices" ],
    data: () => ({
      phone: '',
      char: '',
      text: '',
      multiple: []
    }),
    methods: {
      change() {
      },
      getResponse() {
        return this[this.type]
      }
    }
}
</script>

<style lang="css">
</style>
