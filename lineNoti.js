const {parentPort, workerData} = require("worker_threads");

const axios = require('axios');

parentPort.postMessage(lineNoti(workerData))
function lineNoti(msg) {
    axios
        .post("https://notify-api.line.me/api/notify", "message=" + msg, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer "+process.env.HELLO
            }
        })
        .then(response => {
            if (response.data.status == 200){
                parentPort.postMessage('success')
            } else {
                return 'can not send'
            }
        });
    return 'send'
}
