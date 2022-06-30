// This is from https://github.com/SEI-Remote/sei-students/blob/main/routes/profiles.js

import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET localhost:3000/profiles/profiles
router.get('/', profilesCtrl.index)

// POST localhost:3000/profiles/facts
// We will already have access to the logged in profile on
// the server, therefore do not use: /profiles/:id/facts
router.post('/facts', isLoggedIn, profilesCtrl.createFact)

// DELETE localhost:3000/profiles/facts/:id
router.delete('/facts/:id', profilesCtrl.deleteFact)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}


export {
  router
}