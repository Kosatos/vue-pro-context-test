<template>
  <div class="list">
    <div class="list__actions">
      <div
        class="list__open"
        :class="{ _active: visible }"
        @click="openList"
      ></div>
      <label class="list__checkbox">
        <span v-if="someActive"></span>
        <input type="checkbox" v-model="isActive" />
        {{ list.title }}
      </label>
    </div>

    <ul class="item-list" :class="{ _hidden: !visible }">
      <li v-for="item in list.items" :key="item.id">
        <app-list-item
          :items="list.items"
          :listIdx="listIdx"
          :item="item"
        ></app-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppListItem from './AppListItem.vue'
export default {
  props: {
    list: Object
  },
  data () {
    return {
      visible: false,
      newActive: this.list.active
    }
  },
  computed: {
    ...mapGetters(['allLists']),
    isActive: {
      get () {
        return this.list.active
      },
      set (value) {
        this.newActive = value
        this.onActive()
      }
    },
    someActive () {
      return (
        this.list.items.some(({ active }) => active) &&
        !this.list.items.every(({ active }) => active)
      )
    },
    listIdx () {
      return this.allLists.findIndex((list) => list.id === this.list.id)
    }
  },
  methods: {
    openList () {
      this.visible = !this.visible
    },
    onActive () {
      this.$store.commit('toggleListActive', {
        active: this.newActive,
        list: this.list
      })
    }
  },
  components: {
    AppListItem
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  &__actions {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  &__open {
    margin-right: 5px;
    width: 25px;
    height: 25px;
    background-image: url(../assets/icons/chevron.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(0);
    transition: transform 0.3s ease;

    &._active {
      transform: rotate(0.25turn);
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    span {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: #000;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ul {
    padding: 10px 10px 20px;
  }
}

.item-list {
  &._hidden {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
