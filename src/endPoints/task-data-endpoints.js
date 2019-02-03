const authkey = 'zTdzQOpWT7jTFB1e8NRCKzWmtc9gPpwxbuUB9g0x'
const baseUrl = 'https://todo-vuejs-c3b00.firebaseio.com/tasks'
const taskListUrls = {
    taskLists: baseUrl+'.json?auth='+authkey,
    createTask: baseUrl+'.json?auth='+authkey,
    deleteTask: baseUrl+ '/',
    updateTask: baseUrl+'/'
}
export { taskListUrls }
