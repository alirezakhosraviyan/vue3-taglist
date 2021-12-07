<template>
  <span class="chips-container">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "Chips"
}
</script>

<style scoped lang="scss">
.chips-container {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  background-color: #DDE1EE;
  padding: 2px 8px;
  border-radius: 100px;
  color: #3E5BC4;

  &:hover {
    background-color: #F2E1E1;
    color: #CA3B57;
    cursor: pointer;
  }
}

.chips-hovered {}

</style>
