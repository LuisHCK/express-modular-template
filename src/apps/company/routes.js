import { Router } from 'express'
import { List, View } from './controllers'

const router = Router()

/** Index route */
router.get('/', List)

/** List route */
router.get('/:id', View)

export default router
