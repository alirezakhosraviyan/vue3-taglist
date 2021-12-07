<template>
  <input class="text-input" v-bind="{...$attrs, ...$props}" :placeholder="placeholderText" :value="value" @input="$emit('update:value', $event.target.value)" @focusin="$emit('openOptionList')" @focusout="$emit('closeOptionList')" />
</template>

<script>

export default {
  props: {
    placeholderText: {
      type: String,
      default: 'Add tags...',
      required: false
    },
    value: {
      type: String
    }
  },
  name: "BaseTextInput",
}
</script>

<style scoped lang="scss">
@import "../../styles/sizes";
@import "../../styles/colors";

.text-input {
  outline: 0;
  background-color: white;
  height: 36px;
  padding: 8px;
  border-radius: 8px;
  font-size: $normal;
  box-shadow: 0 4px 8px -2px rgba(27, 46, 94, 0.04);

  &::placeholder {
    color: $light_gray;
  }
}
</style>
