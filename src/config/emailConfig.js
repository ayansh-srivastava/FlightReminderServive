const nodemailer=require(`nodemailer`)
const {email,pass}=require(`./serverConfig`)


const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:email,
        pass:pass
    }
})

module.exports={sender}