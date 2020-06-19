let key, token, userId;

$.ajax({
    type: 'get',
    url: 'http://localhost:3000/apiKey',
    success: function (data) {
        key = data;
        
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/getToken',
            data: {
                key: key
            },
            success: function (data) {
                token = data.token;
                userId = data.userId;
                
                $.ajax({
                    type: 'get',
                    url: 'http://localhost:3000/getData',
                    data: {
                        token: token,
                        userId: userId
                    },
                    success: function (data) {
                        console.log('业务数据：', data);
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    error: function (err) {
        console.log(err);
    }
});