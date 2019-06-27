API = 'http://45.40.196.130:16327/admin'
clientHttp = function (url, data, method, callback) {
    var data_1 = data
    if (method == 'POST' || method == 'PUT') {
        data_1 = JSON.stringify(data);
    }
    $.ajax({
        url: API + url,
        type: method,
        data: data_1,
        headers: {
            'Content-Type': "application/json;charset=utf-8"
        },
        xhrFields: {
            withCredentials: true // 这里设置了withCredentials
        },
        success: function (res) {
            if (res.code == 1001) {
                top.location.href = '../../index.html';
            }
            callback.call(this, res)
        },
        error: function () {
            layer.msg('系统错误');
        }
    })
}