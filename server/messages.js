const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient()
const lrange = promisify(client.lrange).bind(client)
const rpush = promisify(client.rpush).bind(client)
const publish = promisify(client.publish).bind(client)

const createMessage = (body, userId) => rpush('messages', JSON.stringify({ body, userId }))
  .then(len => Promise.all([
    publish('updates', JSON.stringify({ body, userId })),
    len
  ]))
  .then(([_, l]) => l)

const getNMessages = n => lrange('messages', 0, n).then(messages => messages.map(m => JSON.parse(m)))

const listenForMessages = handler => {
  const subClient = client.duplicate()

  subClient.on('message', (channel, message) => {
    if (channel === 'updates') handler(message)
  })

  subClient.on('error', console.log)

  subClient.subscribe('updates')

  return () => subClient.unsubscribe()
}

module.exports = {
  createMessage,
  getNMessages,
  listenForMessages
}
