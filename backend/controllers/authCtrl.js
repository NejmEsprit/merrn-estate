import User from "../models/userModel.js"
import bcrybtjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

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

export const signInCtrl = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email: email })
        if (!validUser) {
            return next(errorHandler(404, ('User not found!')))
        }
        const validPassword = bcrybtjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Invalid Password!'))
        const token = jwt.sign({ id: validPassword._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json({
            rest,
            token,
        })
    } catch (error) {
        next(error)
    }
}