const Redis = require('ioredis');

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

/*
redis[s]://[[username][:password]@][host][:port][/db-number]
createClient({
    url: 'redis://alice:foobared@awesome.redis.server:6380'

    dn7XM@AmzTGeg#R
}); */

module.exports = redis;