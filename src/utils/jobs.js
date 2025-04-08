const nodecron=require(`node-cron`)
const sender=require(`../services/mailServices`)
const EmailRepository=require(`../repository/emailRepository`)
const emailRepository=new EmailRepository()
const jobs=async ()=>{
    try {
        console.log('Running job');
        const emails=await emailRepository.getAllEmails({status:'PENDING'});
        console.log(emails)
        emails.forEach(async (email)=> {
            const timeDiff=new Date(email.notificationTime) - new Date()
            if(timeDiff<=0){
                await sender.sendMail({
                    mailFrom:"satidh1976@gmail.com",
                    mailTo:email.to,
                    subject:email.subject,
                    mail:email.content
            })
            console.log(`Email sent to ${email.to}`);
                // await emailRepository.deleteEmail(email.id)
            emailRepository.update(email.id,{status:'SUCCESS'})
            }
        });
    }
    catch (error) {
        console.error(`Error while executing jobs: ${error.message}`)
    }
}

const job=nodecron.schedule('*/10 * * * * *', jobs)
module.exports={job};