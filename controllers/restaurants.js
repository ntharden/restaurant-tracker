import { Restaurant } from "../models/restaurant.js"

function index(req, res) {
  Restaurant.find({})
  .then(restaurants => {
    res.render("restaurants/index", {
      restaurants,
      title: "Restaurants"
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new')
  .catch(err => {
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.thumbsUp = !!req.body.thumbsUp
  console.log(req.body.thumbsUp)
  Restaurant.create(req.body)
  .then(restaurant => {
    res.redirect('/')
  })
  .catch(err => {
    res.redirect('/')
  })
}

function show(req, res) {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    res.render('restaurants/show', {
      restaurant
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function edit(req, res) {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    res.render('restaurants/edit', {
      restaurant
    })
  })
}

function update(req, res) {
  req.body.thumbsUp = !!req.body.thumbsUp
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(restaurant => {
    res.redirect(`/restaurants/${restaurant._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteRestaurant(req, res) {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/restaurants")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  newRestaurant as new,
  create,
  show,
  edit,
  update,
  deleteRestaurant as delete
}