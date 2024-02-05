import express from "express"
import bcrypt from "bcrypt"
import users from "../module/userModel.js";

export const registerUser =async (req, res)=>{
    const {name,email, mobile, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
          const newUser = await users ({
             name,
             email,
              mobile,
            password: hashedPass
          })
          try {
            await newUser.save();
            res.status(200).json(newUser);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
   }

   export const loginUser =async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await users.findOne({email: email})
        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)


            validity? res.status(200).json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exists")
        }
    }catch(error){
        res.status(500).json({ message: error.message });
    }
   }