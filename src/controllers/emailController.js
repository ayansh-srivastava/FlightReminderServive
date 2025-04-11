const emailService = require('../services/mailServices');


const createEmail = async (req, res) => {
    try {
        console.log(req.body);
        const { to, subject, content, notificationTime } = req.body;
        if (!to ||!subject ||!content ||!notificationTime) {
            return res.status(400).json({ error: 'To, subject, content, and notificationTime are required' });
        }
        const email = await emailService.createEmail({
            to:to, 
            subject:subject, 
            content:content, 
            notificationTime:new Date(notificationTime)
    });
    return res.status(201).json(
        {
            data:email,
            message: 'Email created successfully',
            success: true
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create email' });
    }}

module.exports = { createEmail };