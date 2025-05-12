import bcrypt from 'bcrypt'


export let hashPassword=async(plainPass)=>{
    try {
        let encryptPass=await bcrypt.hash(plainPass,10)
    return encryptPass;
    } catch (error) {
       console.log(error);  
    }
}