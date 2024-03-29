import express from 'express'
import { signInCtrl, signInGoogle, signOut, signupCtrl } from '../controllers/authCtrl.js'

const router = express.Router()

router.post("/signup", signupCtrl)
router.post("/signin", signInCtrl)
router.post("/google", signInGoogle)
router.get('/signout', signOut)

export default router