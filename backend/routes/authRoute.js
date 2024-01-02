import express from 'express'
import { signInCtrl, signupCtrl } from '../controllers/authCtrl.js'

const router = express.Router()

router.post("/signup", signupCtrl)
router.post("/signin", signInCtrl)
export default router