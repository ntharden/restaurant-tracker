import { Restaurant } from "../models/restaurant.js"

function index(req, res) {
  Restaurant.find({})
  .then(restaurants => {
    res.render("restaurants/index", {
      restaurants,
      title: "Restaurants"
    })
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new')
}

function create(req, res) {
  req.body.thumbsUp = !!req.body.thumbsUp
  console.log(req.body.thumbsUp)
  Restaurant.create(req.body)
  .then(restaurant => {
    res.redirect('/restaurants')
  })
}

export {
  index,
  newRestaurant as new,
  create
}