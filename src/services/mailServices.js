const {sender}=require(`../config/emailConfig`)


         
        const sendMail=async(mailFrom,mailTo,subject,mail)=>{
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
    }}
module.exports={sendMail}    
