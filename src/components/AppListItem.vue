<template>
  <div class="item">
    <label class="item__checkbox"
      ><input type="checkbox" v-model="isActive" /> {{ item.title }}</label
    >
    <div class="item__actions" :class="{ _error: errors.quantity }">
      <small v-if="errors.quantity">{{ errors.quantity }}</small>
      <input
        class="item__quantity"
        type="number"
        min="0"
        v-model="itemQuantity"
      />
      <input class="item__color" type="color" v-model="itemColor" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    listIdx: Number,
    item: Object,
  },
  data() {
    return {
      // newQuantity: this.item.quantity,
      // newColor: this.item.color,
      // newActive: this.item.active,
      errors: {
        quantity: null,
      },
    }
  },
  computed: {
    isActive: {
      get() {
        return this.item.active
      },
      set(value) {
        this.item.active = value
        this.onChange()
      },
    },
    itemQuantity: {
      get() {
        return this.item.quantity
      },
      set(value) {
        this.item.quantity = value
        this.onChange()
      },
    },
    itemColor: {
      get() {
        return this.item.color
      },
      set(value) {
        this.item.color = value
        this.onChange()
      },
    },
    itemIdx() {
      return this.items.findIndex((item) => item.id === this.item.id)
    },
  },
  methods: {
    quantityIsValid() {
      const isValid = !(this.newQuantity < 0)
      this.errors.quantity = isValid
        ? null
        : 'Количество должно быть не меньше 0'
      return isValid
    },
    onChange() {
      if (this.quantityIsValid()) {
        this.$store.commit('changeParams', {
          listIdx: this.listIdx,
          itemIdx: this.itemIdx,
          quantity: this.item.quantity,
          color: this.item.color,
          active: this.item.active,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;

  &__checkbox {
    margin-right: 100px;
    display: flex;
    align-items: center;
    line-height: 20px;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  &__quantity {
    width: 60px;
    border: none;
    padding: 5px;
    text-align: end;
    font-size: 16px;
    border-radius: 2px;
  }

  &__color {
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5px;

    &._error {
      small {
        position: absolute;
        right: 10px;
        bottom: 0;
        font-weight: 700;
        color: rgb(255, 35, 35);
      }

      .item__quantity {
        border: 4px solid rgb(255, 35, 35);
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
