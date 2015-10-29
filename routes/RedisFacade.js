var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient('6379','elk.basenode.xyz','');

/* GET home page. */
router.get('/', function(req, res, next) {

    var multi;

    multi = client.multi();
    multi.rpush('logstash', arr[i]);
    multi.exec();

    res.send(200);
});

module.exports = router;
