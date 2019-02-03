import axios from 'axios'
import Vue from 'vue';
import firebase from './firebase';
import {taskListUrls} from '../endPoints/task-data-endpoints'

Vue.use(firebase)
const authkey = 'zTdzQOpWT7jTFB1e8NRCKzWmtc9gPpwxbuUB9g0x'
function getTasksList (successCb, errorCb) {
  axios.get(taskListUrls.taskLists)
  .then(function (response) {
    successCb(response)
  })
  .catch(function (error) {
    errorCb(error)
  })
}

function createNewTask (taskobject, successCb, errorCb) {
  axios(
    {
      method: "post",
      url: taskListUrls.createTask,
      data: taskobject
    })
    .then(function (response) {
      successCb(response)
    })
    .catch(function (error) {
      errorCb(error)
    })
}

function deleteTask (key, successCb, errorCb) {
  axios(
    {
      method: "delete",
      url: taskListUrls.deleteTask+key+'.json?auth='+authkey
    })
    .then(function (response) {
      successCb(response)
    })
    .catch(function (error) {
      errorCb(error)
    })
}

function editTask (updateddata, successCb, errorCb) {
  console.log(updateddata);
  var newObject = {};
  newObject.status = updateddata.status;
  newObject.taskdescription = updateddata.taskdescription;
  newObject.tasktitle = updateddata.tasktitle
  axios(
    {
      method: "put",
      url: taskListUrls.updateTask+updateddata.key+'.json?auth='+authkey,
      data: newObject
    })
    .then(function (response) {
      successCb(response)
    })
    .catch(function (error) {
      errorCb(error)
    })
}

export default { getTasksList, createNewTask, deleteTask, editTask }
