import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUserCtrl, updateUserCtrl } from '../controllers/userCtrl.js';

const router = express.Router();
router.get('/test', (req, res) => {
    res.json({
        message: 'hello word',
    })
})
router.post('/update/:id',verifyToken, updateUserCtrl )
router.delete('/delete/:id',verifyToken,deleteUserCtrl  )
export default router;