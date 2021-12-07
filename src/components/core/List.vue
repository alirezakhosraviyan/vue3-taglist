<template>
    <ol class="list-container">
      <li class="list-element-container" v-for="(cur, index) in dataSource" :key="index" @mousedown="$emit('select', index)">
        <div @mouseover="$emit('update:selectedItem', index)" class="list-element" :class="{'list-item-hover': selectedItem === index }">{{ renderRowComponent(cur) }}</div>
      </li>
    </ol>
</template>

<script>

export default {
  props: {
    dataSource: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    renderRowComponent: {
      type: Function,
      default: row => row
    },
    selectedItem: {
      type: Number
    }
  },
  name: "List"
}
</script>

<style scoped lang="scss">
.list-container {
  background: #FFFFFF;
  max-height: 144px;
  overflow-y: scroll;
  box-shadow: 0 8px 24px -4px rgba(27, 46, 94, 0.12);
  border-radius: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  .list-element-container {
    list-style: none;
    background-color: white;
    border-radius: 8px;
    padding: 8px;

    .list-element {
      background-color: white;
      padding: 8px;
    }
    .list-item-hover {
      background-color: #F8F8F8;
      border-radius: 4px;
    }
  }

}

</style>
