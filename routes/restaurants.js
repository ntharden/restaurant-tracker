import { Router } from "express"
import * as restaurantsCtrl from '../controllers/restaurants.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', restaurantsCtrl.index)
router.get('/new', restaurantsCtrl.new)
router.get('/:id', restaurantsCtrl.show)
router.get('/:id/edit', isLoggedIn, restaurantsCtrl.edit)
router.post('/', isLoggedIn, restaurantsCtrl.create)
router.post('/:id/reviews', restaurantsCtrl.createReview)
router.put('/:id/reviews/:id', restaurantsCtrl.updateReview)
router.put('/:id', restaurantsCtrl.update)
router.delete('/:id', restaurantsCtrl.delete)

export {
  router
}