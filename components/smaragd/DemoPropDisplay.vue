<template>
  <div class="smaragd-demo-prop-display">
    <div v-for="prop,i of props" :key="i" class="prop">
      <span class="name" v-text="prop.name" />
      <span class="req" v-text="prop.required" />
      <span v-if="typeof prop.type === 'string'" class="type" v-text="prop.type" />
      <div v-else>
        <span v-for="opt,j of prop.type" :key="j" class="opt" v-text="opt" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { props } = defineProps({
  props: {
    type: Array,
    default: []
  }
})
</script>

<style scoped lang="scss">
.smaragd-demo-prop-display {

}
</style>
