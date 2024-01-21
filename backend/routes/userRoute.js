import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { updateUserCtrl } from '../controllers/userCtrl.js';

const router = express.Router();
router.get('/test', (req, res) => {
    res.json({
        message: 'hello word',
    })
})
router.post('/update/:id',verifyToken, updateUserCtrl )
export default router;