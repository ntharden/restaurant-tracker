import { Router } from "express"
import * as restaurantsCtrl from '../controllers/restaurants.js'

const router = Router()

router.get('/', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.get('/:id', restaurantsCtrl.show)
router.get('/:id/edit', restaurantsCtrl.edit)
router.post('/', restaurantsCtrl.create)
router.post('/:id/reviews', restaurantsCtrl.createReview)
router.put('/:id', restaurantsCtrl.update)
router.delete('/:id', restaurantsCtrl.delete)

export {
  router
}