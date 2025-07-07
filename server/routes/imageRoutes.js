import express from 'express'
import { removeBgImage } from '../controllers/imageController.js'
import upload from '../middleware/multer.js'

import authUser from '../middleware/auth.js'

const imageRouter =  express.Router()
imageRouter.post('/removeBg',upload.single('image'),authUser,removeBgImage)
export default imageRouter;