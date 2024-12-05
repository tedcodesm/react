const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const createUser = async(req,res)=>{
    const {username, email, password,phone} = req.body;
    try {
        const existinguser = await User.findOne({email});
         if(existinguser){
            console.log('User already exists')
             return res.status(400).json({msg: "User already exists"});
         } else{
            const user = await User.create({username,phone,password,email})
            if(user){
                console.log('user created succesfully')

            }else{
                console.log('Error creating user')
                return res.status(500).json({msg: "Server Error"});
            }
         }
    } catch (error) {
        console.log(error);
        
    }
} 


module.exports = {
    createUser,
 
}