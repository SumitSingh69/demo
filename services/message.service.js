import {channel} from '../config/rabbitmq.config.js';

export const sendMessageService = (message) => {
    try{
        channel.sendToQueue(process.env.QUEUE, Buffer.from(message), { persistent: true });
        return { message: `${message} sent to RabbitMQ successfully` };
    }catch(err){
        throw err;
    }
}