import { createStore } from 'vuex'
import * as type from './mutation-types'
import { defaultDocuments, defaultCategories } from '../helpers/defaultData'

export default createStore({
  state: {
    categories: defaultCategories,
    documents: defaultDocuments
  },
  mutations: {
    [type.SET_CATEGORY] (state, payload) {
    },
    [type.REMOVE_CATEGORY] (state, payload) {
    },
    [type.SET_DOCUMENT] (state, payload) {
    },
    [type.REMOVE_DOCUMENT] (state, payload) {
    }
  },
  actions: {
  },
  modules: {
  }
})
