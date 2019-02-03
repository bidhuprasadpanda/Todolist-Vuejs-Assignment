<template>
    <div>
        <div class="modal-content WL_commonmodal_content">
            <div class="panel panel-default">
                <div class="panel-heading WL_commonmodal_header">
                  <h3 class="panel-title WL_commonmodal_label" v-if="status === 1">UPDATE TASK</h3>
                  <h3 class="panel-title WL_commonmodal_label" v-else>NEW TASK</h3>
                  <button type="button" id="inAppNotificationModalClose" class="close WL_commonmodal_close" @click="closeDialog()"><span>×</span></button>
                </div>
            </div>
            <div class="panel-body WL_commonmodal_body">
                <div class="form-area">
                    <form>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" id="name" v-model="taskTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="textarea" class="input-label">Description</label>
                            <textarea required="required" class="form-control" rows="2" v-model="taskDescription"></textarea>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="taskStatus">
                            <label class="form-check-label" for="exampleCheck1">?&nbsp;Done</label>
                        </div>
                    </form>
                </div>
            </div>
            <div class="panel-footer text-right">
                <button type="button" class="btn btn-primary WL_btn_modalsend" @click="closeDialog()">CANCEL</button>
                <button type="button" class="btn btn-primary WL_btn_modalsend" @click="createNewTask()" v-if="status === 1">UPDATE</button>
                <button type="button" class="btn btn-primary WL_btn_modalsend" @click="createNewTask()" v-else>CREATE</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            taskTitle: this.getTaskTitle(),
            taskDescription: this.getTaskDescription(),
            taskStatus: this.getTaskStatus()
        }
    },
    props: ['createTaskCallback', 'selectedtask', 'status', 'editTaskCallBack'],
    methods: {
        closeDialog:function () {
          this.$parent.visible = false;
        },
        createNewTask: function () {
            var self = this;
            var flag = true;
            var newTaskObject = {};
            newTaskObject.tasktitle = self.taskTitle;
            newTaskObject.taskdescription = self.taskDescription;
            newTaskObject.status = self.taskStatus;
            if (this.status !== 1) {
                if (flag) {
                    if (self.createNewProgramCallBack !== null) {
                        var taskCreated = self.createTaskCallback(newTaskObject);
                        if (taskCreated) {
                            self.$parent.visible = false;
                        }
                    }
                }
            } else {
              if (self.editTaskCallBack !== null) {
                var taskEdited = self.editTaskCallBack(newTaskObject);
                if (taskEdited) {
                    self.$parent.visible = false;
                }
              }
            }
        },
        getTaskTitle: function () {
            var title;
            if (this.status === 1) {
                title = this.selectedtask.tasktitle
            } else {
                title = ''
            }
            return title
        },
        getTaskDescription: function () {
            var description;
            if (this.status === 1) {
                description = this.selectedtask.taskdescription
            } else {
                description = ''
            }
            return description
        },
        getTaskStatus: function () {
            var flag;
            if (this.status === 1) {
                flag = this.selectedtask.status
            } else {
                flag = false
            }
            return flag
        }
    }
}
</script>

<style>

</style>
