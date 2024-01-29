import express from "express";
import { createListingCtrl } from "../controllers/listingCtrl.js";

const router = express.Router()

router.post('/create', createListingCtrl)


export default router;