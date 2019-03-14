<template>
    <div>
          <div v-if="type == 'phone'">
            <input type="text">
          </div>

          <div v-if="type == 'char'">
            <input type="text">
          </div>

          <div v-if="type == 'text'">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div v-if="type == 'multiple'">
            <ul>
              <li v-for="choice in choices">
                <input type="radio" name="group1" id="r1" value="1" />
                <label for="r1">{{ choice }}</label>
              </li>
            </ul>
          </div>


    </div>
</template>

<script>
export default {
    props: [ "type", "choices" ],
    data: () => ({

    }),
    methods: {

    }
}
</script>

<style lang="css">
</style>
