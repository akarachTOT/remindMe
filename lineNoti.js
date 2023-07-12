const {parentPort, workerData} = require("worker_threads");

const axios = require('axios');

parentPort.postMessage(lineNoti(workerData))
function lineNoti(msg) {
    axios
        .post("https://notify-api.line.me/api/notify", "message=" + msg, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer wokji8MOZyXcyRrLBENFSrlyLCsOZh2W8A3UAUqQh9M"
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
