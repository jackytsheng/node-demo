const amqp = require('amqplib');

const q = "StudentQueue";

module.exports = () =>
  amqp.connect("amqp://localhost")
  .then(conn => conn.createChannel())
  .then(ch => ch.assertQueue(q).then(()=>{
    ch.consume(q,
      (msg) => {
        if (msg.content) {
          console.log(`Get the message  ${msg.content.toString()}`);
        }
      }
    )
  })).catch(console.warn)
   