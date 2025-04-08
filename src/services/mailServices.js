const {sender}=require(`../config/emailConfig`)
const EmailRepo=require(`../repository/emailRepository`)
const emailRepo=new EmailRepo()
         
const sendMail=async({mailFrom,mailTo,subject,mail})=>{
        try {
            const response=await sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:subject,
            text:mail
    })
    console.log(response)
    }
    catch (error) {
        console.log(error);
        throw(error)      
    }
}
const createEmail=async(data)=>{
    try {
        const email=await emailRepo.create(data)
        return email
    }
    catch (error) {
        console.error(error)
        throw error
    }
}
module.exports={sendMail,createEmail}    
