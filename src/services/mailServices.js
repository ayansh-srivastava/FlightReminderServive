const {sender}=require(`../config/emailConfig`)
const EmailRepo=require(`../repository/emailRepository`)
const axios=require(`axios`)
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
const service= async (payload)=>{
    if(payload.type==='reminder'){
        const res=await axios.get(`http://localhost:3000/api/vi/flights/${payload.flightId}`)
        const flight=res.data;
        payload.notificationTime = new Date(flight.departureTime);
        payload.notificationTime.setHours(payload.notificationTime.getHours() - 1);
        const email=await emailRepo.create(payload)
        return email;
    
}
    else if(payload.type==='CONFIRMATION'){
        payload.notificationTime=new Date();
        const email=await emailRepo.create(payload);
        return email;
}
    else{
    console.error(`Unknown payload type: ${payload.type}`)
    return
}
}
module.exports={sendMail,createEmail,service}    
