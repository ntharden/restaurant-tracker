import { Router } from "express"
import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

router.get('/index', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.post('/', restaurantsCtrl.create)

export {
  router
}