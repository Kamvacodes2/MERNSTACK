import express from 'express'
import MoviesController from './movies.controller.js'

const router = express.Router(MoviesController.apiGetMovies) // get access to express router
router.route('/').get((req, res) => res.send('hello world'))
export default router