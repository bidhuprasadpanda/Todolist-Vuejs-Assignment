import axios from 'axios'
import Vue from 'vue';
import firebase from './firebase';

Vue.use(firebase)
var authkey = 'zTdzQOpWT7jTFB1e8NRCKzWmtc9gPpwxbuUB9g0x'
function getTasksList (successCb, errorCb) {
  axios.get('https://todo-vuejs-c3b00.firebaseio.com/tasks'+'.json?auth='+authkey)
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
      url: 'https://todo-vuejs-c3b00.firebaseio.com/tasks'+'.json?auth='+authkey,
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
      url: 'https://todo-vuejs-c3b00.firebaseio.com/tasks/'+key+'.json?auth='+authkey
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
      url: 'https://todo-vuejs-c3b00.firebaseio.com/tasks/'+updateddata.key+'.json?auth='+authkey,
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
