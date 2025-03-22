const EventEmitter = require('events');
const myEvent = new EventEmitter();

// events of myEvent
myEvent.on('eventOn', () => {
    console.log('callback of eventOn')
})

myEvent.once('eventOnce', () => {
    console.log('callback of eventOnce')
})

// Run
myEvent.emit('eventOn')
myEvent.emit('eventOn')

myEvent.emit('eventOnce')
myEvent.emit('eventOnce') // can't work

// remove
myEvent.removeAllListeners('eventOn')

// check
myEvent.emit('eventOn')
myEvent.emit('eventOnce')