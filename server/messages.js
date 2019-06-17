const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient()
const lrange = promisify(client.lrange).bind(client)
const rpush = promisify(client.rpush).bind(client)

const createMessage = (body, userId) => rpush('messages', JSON.stringify({ body, userId }))
const getNMessages = n => lrange('messages', 0, n).then(messages => messages.map(m => JSON.parse(m)))

module.exports = {
  createMessage,
  getNMessages
}
