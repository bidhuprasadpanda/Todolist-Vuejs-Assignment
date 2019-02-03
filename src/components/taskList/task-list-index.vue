<template>
  <div id="wrapper">
    <top-nav-bar></top-nav-bar>
    <div class="container-fluid">
      <!-- Breadcrumb Section Starts--> 
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="active">Tasks</li>
      </ol>
      <!-- Breadcrumb Section Ends-->
      <div class="row content">
         <div class="col-sm-12">
           <div class="panel panel-default">
             <div class="panel-body">
               <div class="col-sm-12">
                 <button class="btn btn-success" @click="createNewTask(0)">Add New Task</button>
               </div>
               <!-- Todo List Section Starts -->
               <div class="col-sm-12 m-t-30">
                 <table class="table table-bordered table-stripped attributesTable">
                   <thead>
                     <tr>
                       <th class="text-center">Title</th>
                       <th class="text-center">Description</th>
                       <th class="text-center">Done</th>
                       <th class="text-center">Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr v-for="(task,index) in tasks" :key="index">
                       <td>{{task.tasktitle}}</td>
                       <td>{{task.taskdescription}}</td>
                       <td class="text-center">{{task.status}}</td>
                       <td class="text-center"><span><i class="fa fa-pencil-square-o editIcon" aria-hidden="true" title="Edit" @click="editTask(task,index,1)"></i></span>&nbsp;&nbsp;<span><i class="fa fa-trash-o deleteIcon" aria-hidden="true" title="Delete" @click="deleteTask(task,index)"></i></span></td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <!-- Todo List Section Ends -->
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TopNavBar from '../partials/top-navbar.vue'
import CreateTaskModal from '../commonComponents/create-task-modal.vue'
import TodoDataService from '../../services/todo-data-service'
import VModal from 'vue-js-modal';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
export default {
  data: function () {
    return {
    }
  },
  components: {
    TopNavBar
  },
  computed: {
    tasks () {
      return this.$store.state.todoList
    }
  },
  methods: {
    createNewTask: function () {
      let self = this;
      self.$modal.show(CreateTaskModal,{
        createTaskCallback: function (newTaskData) {
          TodoDataService.createNewTask(newTaskData,
            function (response) {
              self.$store.dispatch(self.$store.state.actionConsts.ACTION_FETCH_TASK_LIST);
            },
            function (error) {
              console.log("Error Fetching Jobs List", error);
            });
          return true;
        }
      },{clickToClose: false,width: 600})
    },
    deleteTask: function (task, key) {
      var self = this;
      console.log(task, key);
      TodoDataService.deleteTask(key,
        function (response) {
          self.$store.dispatch(self.$store.state.actionConsts.ACTION_FETCH_TASK_LIST);
        },
        function (error) {
          console.log("Error Fetching Jobs List", error);
        });
    },
    editTask: function (task, key, status) {
      var self = this;
      console.log(task, key, status);
      self.$modal.show(CreateTaskModal,{
        selectedtask: task,
        status: status,
        editTaskCallBack: function (updateddata) {
          updateddata.key = key
          TodoDataService.editTask(updateddata,
            function (response) {
              self.$store.dispatch(self.$store.state.actionConsts.ACTION_FETCH_TASK_LIST);
            },
            function (error) {
              console.log("Error Fetching Jobs List", error);
            });
          return true;
        }
      },{clickToClose: false,width: 600,adaptive: true})
    }
  }
}
</script>