<template>

  <app-container>
<!--  you need to provide a function to add new tags to server    -->
<!--    also a data list of tags -->
<!--    you need to provide a variable to get selected tags-->
<!--    And to support all object schemas you need to provide a function to get label-->
      <tag-input :add-new-tag="addNewHotel" :data-source="hotels" v-model:selectedTags="state.selectedTags" :render-row-component="row => row.name"></tag-input>
  </app-container>
</template>

<script>

import AppContainer from "./components/layouts/AppContainer";
import TagInput from "@/components/base/TagInput";
import {reactive, onMounted, computed} from "vue";
import {useStore} from 'vuex';

export default {
  name: 'App',
  components: {
    TagInput,
    AppContainer
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch("fetchAllHotels");
    });

    const addNewHotel = hotelName => store.dispatch('addNewHotel', hotelName)

    const hotels  = computed(()=> (store.state.Hotel.hotels))
    const state = reactive({
          selectedTags: []
    })
    return {
      state,
      hotels,
      addNewHotel
    }
  }
}
</script>
<style>
</style>
