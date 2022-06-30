import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/oauth2callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    failureMessage: true
  }), (req, res) => {
    console.log('Hitting oauth!!!!')
    res.redirect('/restaurants')
  }
)

router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err)}
    res.redirect('/')
  })
})

export {
  router
}
