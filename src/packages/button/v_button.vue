<template>
  <button :style="sty"><slot></slot></button>
</template>

<script>
export default {
  name: 'VButton',
  data() {
    return {}
  },
  props: {
    sty: {
      type: Object,
      default: function() {
        return { 
          color: '#fff',
          background: 'green',
          padding: '4px',
        };
      },
    },
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>


