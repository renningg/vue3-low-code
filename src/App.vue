<template>
  <div class="app">
    <editor v-model="state"></editor>
  </div>
</template>

<script>
import data from './data.json'
import editor from "./packages/editor"
import { onMounted, provide, ref} from "vue";
import {registerConfig as config} from "./utils/editor-config"
export default {
  name: 'App',
  components: {
    editor
  },
  
  setup() {
    const state = ref(data)
    provide("config",config)
    return {
      state 
    }
  }
}
</script>

<style lang="scss">
.app {
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
}
</style>
