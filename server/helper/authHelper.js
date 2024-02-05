
// its extra for hasshing password and comparePassword only for show advantage

import bcrypt from "bcrypt"

export const hashPassword = async(password)=>{

    try{
        const slatRound = 10;
        const hashPassword = await bcrypt.hash(password, slatRound);
        return hashPassword;
    }catch(error){
         console.log(error);
    }
};

export const comparePassword =async(password, hashPassword)=>{
    return bcrypt.compare(password, hashPassword);
} 