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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 304px;
  height: 593px;
  left: 460px;
  top: 133px;
  padding: 32px;
  border: 1px dashed #7B61FF;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>