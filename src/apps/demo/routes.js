import { Router } from 'express'
import { Index, List } from './controllers'

const router = Router()

/** Index route */
router.get('/', Index)

/** List route */
router.get('/list', List)

export default router
