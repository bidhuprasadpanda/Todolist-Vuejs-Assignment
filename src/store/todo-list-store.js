import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import todoDataService from '../services/todo-data-service'

const ACTION_FETCH_TASK_LIST = "getTasks"

const ACTIONS = {
    ACTION_FETCH_TASK_LIST
}

export default new Vuex.Store({
    state: { // data
        actionConsts: ACTIONS, // Avoid using string for Dispatch Actions, and commit mutations
        todoList: []
    },
    getters: { // computed properties
        getTasksCount: state => {
            return state.todoList.length;
        }
    },
    // Actions are used from UI, which will fetch the data from the service
    // and then invoke the appropriate commits to the state.
    actions: { // Methods
        getTasks (context) {
            todoDataService.getTasksList(
                function (response) {
                  console.log(response, "Tasks");
                  context.commit('setTaskList', response.data);
                }, function (error) {
                  console.log(error);
                });
        }
    },
    mutations: { // Changing the state/data
        setTaskList (state, data) {
          state.todoList = data;
        }
    }
})
