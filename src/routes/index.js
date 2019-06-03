import express from 'express'
import DemoRoutes from '../apps/demo/routes'
import CompanyRoutes from '../apps/company/routes'

var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/** DEMO APP namespace */
router.use('/demo', DemoRoutes)

/** Company APP namespace */
router.use('/company', CompanyRoutes)

export default router
