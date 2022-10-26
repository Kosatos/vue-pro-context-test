import { createStore } from 'vuex'
import shortid from 'shortid'

export default createStore({
  state: {
    lists: [
      {
        id: shortid.generate(),
        title: 'List 1',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 10,
            color: '#ff0000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 14,
            color: '#008000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 20,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 5,
            color: '#ffa500',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 2',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 10,
            color: '#808080',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 14,
            color: '#008000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 20,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 15,
            color: '#99ff99',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 3,
            color: '#ff7f50',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 6',
            quantity: 8,
            color: '#ffa500',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 7',
            quantity: 11,
            color: '#0000ff',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 3',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 13,
            color: '#32eaf1',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 10,
            color: '#5dc16a',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 5,
            color: '#c7d352',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 8,
            color: '#22b7da',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 8,
            color: '#dbcde7',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 6',
            quantity: 8,
            color: '#ffa500',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 7',
            quantity: 8,
            color: '#a9465e',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 8',
            quantity: 8,
            color: '#969fcc',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 9',
            quantity: 8,
            color: '#1bc996',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 10',
            quantity: 8,
            color: '#bde3e6',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 4',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 10,
            color: '#3494cb',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 14,
            color: '#06cb4c',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 20,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 5,
            color: '#dc4121',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 10,
            color: '#ff0000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 6',
            quantity: 14,
            color: '#3494cb',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 7',
            quantity: 20,
            color: '#22e69f',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 8',
            quantity: 5,
            color: '#fa6ff4',
            active: false
          }
        ]
      },
      {
        id: shortid.generate(),
        title: 'List 5',
        active: false,
        items: [
          {
            id: shortid.generate(),
            title: 'Item 1',
            quantity: 10,
            color: '#ff0000',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 2',
            quantity: 14,
            color: '#e93221',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 3',
            quantity: 20,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 4',
            quantity: 5,
            color: '#b363d5',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 5',
            quantity: 20,
            color: '#ffff00',
            active: false
          },
          {
            id: shortid.generate(),
            title: 'Item 6',
            quantity: 5,
            color: '#0e1338',
            active: false
          }
        ]
      }
    ]
  },
  getters: {
    allLists (state) {
      return state.lists
    }
  },
  mutations: {
    changeParams (state, { listIdx, itemIdx, quantity, color, active }) {
      const item = state.lists[listIdx].items[itemIdx]
      const list = state.lists[listIdx]
      item.quantity = quantity
      item.color = color
      item.active = active

      list.active = list.items.every(({ active }) => active)
    },

    toggleListActive (state, { active, list }) {
      const listIdx = state.lists.indexOf(list)
      state.lists[listIdx].active = active

      state.lists[listIdx].items.forEach((item) => (item.active = active))
    },

    reduceQuantity (state, { listIdx, itemIdx }) {
      const item = state.lists[listIdx].items[itemIdx]
      item.quantity--
    }
  },
  actions: {},
  modules: {}
})
