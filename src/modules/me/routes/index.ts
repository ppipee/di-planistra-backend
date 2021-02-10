import express from 'express'

import { getFavoritePlaces, getMe, saveFavoritePlace } from 'modules/me/controllers'
import auth from 'modules/user/middleware/auth'

import deleteFavoritePlace from '../controllers/deleteFavoritePlace'

const router = express.Router()

router.get('/', getMe)
router.get('/favoritePlaces', auth, getFavoritePlaces)
router.post('/favoritePlaces', auth, saveFavoritePlace)
router.delete('/favoritePlaces/:publicId', auth, deleteFavoritePlace)

export default router
