import { sendMessageService } from '../services/message.service.js';

export const sendMessage = async (req, res) => {
    try{
        const message = req.body?.message;
        if(!message) {
            throw new Error('Message is required');
        }
        const result = sendMessageService(message);
        res.status(200).json({
            status: 'success',
            message: result.message
        })
    }catch(err) {
        res.send(400).json({
            status: 'failed',
            message: err.message
        })
    }
}