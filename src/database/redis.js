const redis = require('redis');

const client = redis.createClient({
    url: 'redis://arge:dn7XM@AmzTGeg#R@redis-17196.c257.us-east-1-3.ec2.cloud.redislabs.com:17196/10985899'
});

/*
redis[s]://[[username][:password]@][host][:port][/db-number]
createClient({
    url: 'redis://alice:foobared@awesome.redis.server:6380'

    dn7XM@AmzTGeg#R
}); */

module.exports = client;