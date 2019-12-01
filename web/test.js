var express = require('express');   // express framework 사용
var fs = require('fs');     // 파일 로드시 사용
var http = require('http'); // node 내장 모듈 불러옴

var app = express();
var hostname = '172.30.120.240'; // localhost
var port = 3000;


console.log('Server running at http://'+hostname+':'+port);
 
app.get('/', function (req, res) {
    fs.readFile('index.html', function(error, data){
        if(error){
            console.log('아쿵 에러가 나부렀넹');
        }else{
            console.log('웹페이지 실행!');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

 
var server = app.listen(3000, function () {
  console.log('앱 로드 성공입니까 11');
});