import User from "../models/userModel.js"
import bcrybtjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signupCtrl = async (req, res, next) => {

    const { username, email, password } = req.body
    const hashedPassowrd = bcrybtjs.hashSync(password, 10)
    const user = new User({ username, email, password: hashedPassowrd })
    try {
        await user.save()
        res.status(201).json('user created successfully!')
    } catch (error) {
        next(error)
    }
}