import express from 'express'
import { signupCtrl } from '../controllers/authCtrl.js'

const router = express.Router()

router.post("/signup", signupCtrl)
export default router