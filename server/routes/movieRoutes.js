import express from 'express'
import { getMovieList, getMovieDetails } from '../controllers/movieController.js'
const router = express.Router()

router.get('/movies', getMovieList)
router.get('/about-movies/:movieId', getMovieDetails)

export default router