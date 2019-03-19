<template>
    <div>
          <div v-if="type == 'phone'">
            <input type="text" v-model="phone" @keyup="change()">
          </div>

          <div v-if="type == 'char'">
            <input type="text" v-model="char" @keyup="change()">
          </div>

          <div v-if="type == 'text'">
            <textarea name="" id="" cols="30" rows="10" v-model="text" @keyup="change()"></textarea>
          </div>

          <div v-if="type == 'multiple'">
            <ul>
              <li v-for="(choice, index) in choices" v-bind:key="choice">
                <input v-model="multiple[index]" type="checkbox" name="group" :value="choice" :ref="`chb${index}`" :id="`chb${index}`" @change="change()"/>
                <label :for="`chb${index}`">{{ choice }}</label>
              </li>
            </ul>
          </div>
    </div>
</template>

<script>
export default {
    props: [ "type", "choices" ],
    data: () => {
      return {
        phone: '',
        char: '',
        text: '',
        multiple: []
      }
    },
    methods: {
      reset() {
        Object.assign(this.$data, this.$options.data.call(this));
      },
      change() {
        this.$parent.$emit('change', this.getResponse())
      },
      getResponse() {
        return this[this.type]
      },
      setData(value, key) {
        this[key] = value
      }
    }
}
</script>

<style lang="css">
</style>
