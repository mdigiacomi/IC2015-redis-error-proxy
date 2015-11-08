var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient('6379','elk.digitaladrenalin.net','');

var model = {
    "Execution": "test",
    "AppName": "IC Test Application",
    "AppVersion": "v1.0.1",
    "MessageType": "Info",
    "isBusinessEvent": "true",
    "Message": "This is a test Message",
    "MessageDetails": "StackTrace Coming Soon...",
    "AdditionalProperties": {
        "Error Number": "1234"
    }
};


    /* GET home page. */
router.get('/', function(req, res, next) {

    var multi;

    multi = client.multi();
    multi.rpush('logstash', model);
    multi.exec();

    res.send(200);
});

module.exports = router;
