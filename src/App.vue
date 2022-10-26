<template>
  <div class="container">
    <ul class="app-list">
      <li v-for="list in allLists" :key="list.id">
        <app-list :list="list"></app-list>
      </li>
    </ul>
    <ul class="app-list">
      <li v-for="list in allLists" :key="list.id">
        <app-view-list :list="list"> </app-view-list>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppList from './components/AppList.vue'
import AppViewList from './components/AppViewList.vue'

export default {
  computed: mapGetters(['allLists']),
  components: {
    AppList,
    AppViewList
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 15px;
  display: flex;
  justify-content: space-between;
}
.app-list {
  width: 40%;
  padding: 20px;
  border: solid 2px #000;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
