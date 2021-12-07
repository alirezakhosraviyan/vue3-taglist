<template>
  <div class="app-container">
        <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
}
</style>
