<template>
  <div class="tag-input-container" @keydown.down.up="arrowKeyPressed($event)"  @keydown.esc="state.showOptionList = false">
    <base-text-input  @keydown.enter="enterClicked()" v-model:value="state.searchText" @open-option-list="state.showOptionList = true"  @close-option-list="state.showOptionList = false"></base-text-input>
    <div class="tag-info-container">
      <div class="input-options" v-if="state.showOptionList">
<!--   known issue: can be more simplified by removing addToSelectedTags-->
        <list v-on:select="addToSelectedTags(cleanDataSource[$event])" v-model:selectedItem="state.selectedItem" :data-source="cleanDataSource" :render-row-component="renderRowComponent"></list>
      </div>

      <div class="tags-list">
        <chips @click="$emit('update:selectedTags', selectedTags.filter(x => (renderRowComponent(cur) !== renderRowComponent(x))))" v-for="(cur, index) in selectedTags" :key="index">{{ renderRowComponent(cur) }}</chips>
      </div>

    </div>
  </div>
</template>

<script>
import BaseTextInput from "@/components/core/BaseTextInput";
import Chips from "@/components/core/Chips";
import List from "@/components/core/List";
import {reactive, computed} from "vue";
import _ from 'lodash'


export default {
  name: "TagInput",
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    renderRowComponent: {
      type: Function,
      default: inp => inp
    },
    selectedTags: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    addNewTag: {
      type: Function
    }
  },
  components: {List, Chips, BaseTextInput},
  setup(props, {emit}) {

    const state = reactive({
      filteredDataSource : props.dataSource,
      showOptionList: false,
      searchText: '',
      selectedItem: 0
    });

    // cleanDataSource = dataSource - selectedTags -->  prevent duplicate selecting
    const cleanDataSource = computed(() => _.difference(props.dataSource.filter(x => !state.searchText? x : x.name.toLowerCase().match(state.searchText.toString().toLowerCase())), props.selectedTags))

    const enterClicked = () => {

      // handle firs item selection when text input focused
      if (state.searchText === '') {
        addToSelectedTags(cleanDataSource.value[state.selectedItem])
      }else {
        const {addNewTag, renderRowComponent} = props
        // if you write some characters which matches two words , for example
        // hotel espinas and esteghlal are starting with 'es'
        // if in list espinas came sooner than esteghlal
        // code selects espinas and will add it to tag list
        let selectedTag = cleanDataSource.value.filter(x => renderRowComponent(x).toLowerCase() === state.searchText).shift()
        if (!selectedTag && addNewTag) {
          selectedTag = {id: Math.random(), name: state.searchText}
          // server simulation in store
          addNewTag(selectedTag);
        }
        addToSelectedTags(selectedTag)
        state.searchText = ''
      }
    };

    //
    const addToSelectedTags = selectedItem => {
      emit('update:selectedTags', [...props.selectedTags, selectedItem])
    }

    const arrowKeyPressed = event => {
      if (event.code === 'ArrowDown') {
        state.selectedItem = state.selectedItem <= cleanDataSource.value.length ? state.selectedItem + 1 : 0
      } else if (event.code === 'ArrowUp') {
        state.selectedItem = state.selectedItem >= 0 ? state.selectedItem - 1 : cleanDataSource.value.length
      }
    }

    return {
      state,
      addToSelectedTags,
      cleanDataSource,
      enterClicked,
      arrowKeyPressed
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/colors";
@import "../../styles/sizes";

.tag-input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .tag-info-container {
    position: relative;

    .input-options {
      position: absolute;
      width: 100%;
      z-index: 2;
    }

    .tags-list {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      flex-direction: row;
    }
  }
}
</style>
