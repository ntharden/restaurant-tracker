import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  console.log('Hitting /restuarants')
  res.redirect('/restaurants')
  // use other from MEN template if this^ doesn't work
})

export {
  router
}
