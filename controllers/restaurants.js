import { Restaurant } from "../models/restaurant.js"

function index(req, res) {
  console.log(req.user)
  Restaurant.find({})
  .then(restaurants => {
    res.render("restaurants/index", {
      restaurants,
      title: "Restaurants",
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new', {
    title: "Add Restaurant",
  })
}

function create(req, res) {
  req.body.owner = req.user.profile_id
  req.body.thumbsUp = !!req.body.thumbsUp
  Restaurant.create(req.body)
  .then(restaurant => {
    res.redirect('/restaurants', {
      title: "Restaurants",
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function show(req, res) {
  Restaurant.findById(req.params.id)
  .populate("reviews.author")
  .then(restaurant => {
    console.log('This is the restaurant------', restaurant)
    res.render('restaurants/show', {
      restaurant,
      title: "About"
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
      title: "Edit Restaurant",
      restaurant
    })
  })
}

function update(req, res) {
  req.body.thumbsUp = !!req.body.thumbsUp
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(restaurant => {
    res.redirect(`/restaurants/${restaurant._id}`, {
      title: `/restaurants/${restaurant._id}`,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteRestaurant(req, res) {
  Restaurant.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/restaurants", {
      title: "Restaurants",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createReview(req, res) {
  Restaurant.findById(req.params.id, req.user.profile_id)
  .then(restaurant => {
    req.body.thumbsUp = !!req.body.thumbsUp
    restaurant.reviews.push(req.body)
    restaurant.save(() => {
      res.redirect(`/restaurants/${restaurant._id}`)
    })
  })
}

export {
  index,
  newRestaurant as new,
  create,
  show,
  edit,
  update,
  deleteRestaurant as delete,
  createReview
}