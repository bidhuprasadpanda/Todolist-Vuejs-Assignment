import Vue from 'vue'
import Vuex from 'vuex'
import tasklistpage from '../src/components/taskList/task-list-index.vue'
import store from './store/todo-list-store'
import VModal from 'vue-js-modal'
import VueFire from 'vuefire'

Vue.use(Vuex);
Vue.use(VModal, { dynamic: true });
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store: store, // Inject store in the main view, so it can be accessed from all sub-components as this.$store
  created () {
    //On page load fetch request to get product list from API
    store.dispatch(store.state.actionConsts.ACTION_FETCH_TASK_LIST);
  },
  components: {
    tasklistpage
  }
})
