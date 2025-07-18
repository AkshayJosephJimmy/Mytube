import { use } from "react";
import {userModel} from "../models/users.model.js";





 export function registerUser(req,res){

    // Logic for registering a user
    const { username, email, password } = req.body;
    userModel.create({ username, email, password })
        .then(user => {
            res.status(201).json({ message: "User registered successfully", user });
        })
        .catch(error => {
            res.status(500).json({ message: "Error registering user", error });
        });
        console.log(req.body);
  



}
