import express from 'express'
import * as dashboard from '../controllers/dashboard'
import { verifyAccessToken } from '../middlewares/auth'

const router: express.Router = express.Router()

router.get(`/dashboard`, verifyAccessToken, dashboard.index)

export default router