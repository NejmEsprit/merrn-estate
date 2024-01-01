import User from "../models/userModel.js"
import bcrybtjs from 'bcryptjs'

export const signupCtrl = async (req, res) => {

    const { username, email, password } = req.body
    const hashedPassowrd = bcrybtjs.hashSync(password, 10)
    const user = new User({ username, email, password: hashedPassowrd })
    try {
        await user.save()
        res.status(201).json('user created successfully!')
    } catch (error) {
        res.status(500).json(error.message)
    }

}