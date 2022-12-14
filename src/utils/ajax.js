/**
 * ajax 封装
 */

const HOST = "https://erp.deepberry.cn";
const ajax = {};

// ajax处理
const callback = (xhr, reslove, reject) => {
    // 状态监听
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.response);
            // if (data.code == 200) {
            //     if (!data.data.message) {
            //         reslove(data);
            //     } else {
            //         reject(data);
            //     }
            // } else {
            //     reject(data);
            // }
            reslove(data);
        }
    };

    // 错误处理
    xhr.onerror = () => {};
};

// get请求
ajax.get = (url) => {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `${HOST}${url}`, true);
        xhr.setRequestHeader(
            "token",
            localStorage.getItem("erp_token") ||
                localStorage.getItem("TOKEN_TITAN") ||
                sessionStorage.getItem("TOKEN_TITAN") ||
                "1"
        );
        xhr.send();
        callback(xhr, reslove, reject);
    });
};

ajax.getUrl = (url) => {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader(
            "token",
            localStorage.getItem("erp_token") ||
                localStorage.getItem("TOKEN_TITAN") ||
                sessionStorage.getItem("TOKEN_TITAN") ||
                "1"
        );
        xhr.send();
        callback(xhr, reslove, reject);
    });
};

ajax.getUrlBearer = (url) => {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader(
            "Authorization",
            "Bearer " +
                (localStorage.getItem("erp_token") ||
                    localStorage.getItem("TOKEN_TITAN") ||
                    sessionStorage.getItem("TOKEN_TITAN") ||
                    "1")
        );
        xhr.send();
        callback(xhr, reslove, reject);
    });
};

// post请求
ajax.post = (url, data) => {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();

        // 处理参数
        let form = JSON.stringify(data);

        xhr.open("POST", `${HOST}${url}`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader(
            "token",
            localStorage.getItem("erp_token") ||
                localStorage.getItem("TOKEN_TITAN") ||
                sessionStorage.getItem("TOKEN_TITAN") ||
                "1"
        );
        xhr.send(form);
        callback(xhr, reslove, reject);
    });
};

// 上传文件
ajax.upload = (url, data, progress) => {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();

        // 处理参数
        let form = new FormData();
        Object.keys(data).map((item) => {
            form.append(item, data[item]);
        });

        // 上传进度
        xhr.upload.onprogress = (e) => {
            progress(parseFloat((e.loaded / e.total) * 100).toFixed(2));
        };

        xhr.open("POST", `${HOST}${url}`, true);
        xhr.send(form);
        callback(xhr, reslove, reject);
    });
};

export default {
    ajax,
    install: (app) => {
        app.config.globalProperties.ajax = ajax;
    },
};
