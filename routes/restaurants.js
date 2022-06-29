import { Router } from "express"
import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

router.get('/index', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.get('/:id', restaurantsCtrl.show)
router.get('/:id/edit', restaurantsCtrl.edit)
router.post('/', restaurantsCtrl.create)
router.put('/:id', restaurantsCtrl.update)

export {
  router
}