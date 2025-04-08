const {Email} = require(`../models/index`)

class EmailRepo{
    async create(data){
        try {
            console.log(data)
        await Email.create(data)   
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    async getAllEmails(filter){
        try {
        const emails=await Email.findAll({where:filter})
        return  emails;  
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    async update(id,data){
        try {
            const email=await Email.findByPk(id)
            if(!email){
                throw new Error('Email not found')
            }
            await email.update(data)
            return email
        } catch (error) {
            console.error(error);
            throw error
        }
    
}
}
module.exports=EmailRepo