import {channel} from '../config/rabbitmq.config.js';

export const sendMessageService = (message) => {
    try{
        channel.sendToQueue(process.env.QUEUE, Buffer.from(message), { persistent: true });
        channel.consume(process.env.QUEUE, (message) => {
            if (message !== null) {
              console.log(`Received: ${message.content.toString()}`);
              channel.ack(message); // now we can delete the message from the queue
            }
          });

        return { message: `${message} sent to RabbitMQ successfully` };
    }catch(err){
        throw err;
    }
}