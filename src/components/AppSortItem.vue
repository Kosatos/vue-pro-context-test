<template>
  <ul class="sort-list" v-if="item.active">
    <li
      class="sort-list__item"
      v-for="n in item.quantity"
      :key="n"
      :style="`background-color: ${item.color}`"
      @click="onRemove"
    ></li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array,
    item: Object,
    listIdx: Number
  },
  computed: {
    itemIdx () {
      return this.items.findIndex((item) => item.id === this.item.id)
    }
  },
  methods: {
    onRemove () {
      this.$store.commit('reduceQuantity', {
        listIdx: this.listIdx,
        itemIdx: this.itemIdx
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &__item {
    width: 20px;
    height: 20px;
  }
}
</style>
