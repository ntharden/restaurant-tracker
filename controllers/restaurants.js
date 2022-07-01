import { Restaurant } from "../models/restaurant.js"

function index(req, res) {
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
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.id
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
  .then(restaurant => {
    const userProfileId = req.user.id
    res.render('restaurants/show', {
      restaurant,
      title: "About",
      userProfileId
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
  .catch(err => {
    console.log(err)
    res.redirect("/")
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
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    req.body.thumbsUp = !!req.body.thumbsUp
    const review = {
      content: req.body.content,
      thumbsUp: req.body.thumbsUp,
      author: req.user.id
    }
    restaurant.reviews.push(review)
    restaurant.save(() => {
      res.redirect(`/restaurants/${restaurant._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function updateReview(req, res) {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    res.render()
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
  deleteRestaurant as delete,
  createReview,
  updateReview
}