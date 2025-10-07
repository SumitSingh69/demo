import amqp from 'amqplib';


let channel;

const connectRabbitMQ = async () => {
    try{
        const conn = await amqp.connect(process.env.RABBIT_URL);
        // now create a channel
        channel = await conn.createChannel();
        await channel.assertQueue(process.env.QUEUE, { durable: true });// queue will not get lost even if rabbitmq server restarts
        console.log('Connected to RabbitMQ');

    }catch(err) {
        console.error('RabbitMQ connection error:', err);
        process.exit(1);
    }
}

export {channel, connectRabbitMQ};