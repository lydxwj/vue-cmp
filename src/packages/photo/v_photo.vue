<template>
  <div>
    <img class="photo" v-if="src" className="photo" :src="src" :style="{ width, height }"/>
  </div>
</template>

<script>
export default {
  name: 'VPhoto',
  data() {
    return {}
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 50,
    },
    height: {
      type: [String, Number],
      default: 50,
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.photo {
  border-radius 50%
  border 1px solid #ccc
}
</style>


