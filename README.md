Simple "Chatbot" assignment
===

> A simple "chatbot" written as a recruitement assignment to join Forter

`GIF`

## Requirements
Node.js (any version above 7 will probably be OK) and Redis.

## Running the server
Before starting anything, you need to transpile the front-end code - run `npm run build` in order to do that. After that, run `npm start` as per JS conventions and go to [http://localhost:8080](http://localhost:8080) and see the bot operates!

## Technology stack
Since the assignment said that I needed to put the most attention to UI, I decided to write a simple server using express.js and to store them in Redis for the thing to be fast. The client is written in React.js with Redux to manage the states (+ `redux-thunk` for async operations).

The client passes messages to the server using a simple POST request, and the server passes messages to the client using [HTML5 Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) - this was done because I don't remember SocketIO very fondly. The server passes messages between connections using Redis pub/sub nodes.
