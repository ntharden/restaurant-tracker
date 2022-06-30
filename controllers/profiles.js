// This is from https://github.com/SEI-Remote/sei-students/blob/main/controllers/profiles.js

import { Profile } from '../models/profile.js'

function index(req, res) {
  // Make the query object to use with Profile.find based on
  // whether the user has submitted the search form or not
  let modelQuery = req.query.name
  ? { name: new RegExp(req.query.name, 'i') }
  : {}
  // Sorting by name
  Profile.find(modelQuery)
  .sort("name")
  .then(profiles => {
    // Passing profiles and name, for use in the EJS
    res.render("profiles/index", { 
      profiles: profiles, 
      name: req.query.name,
      user: req.user
    })
  })
  .catch(err => {
    if (err) return next(err)
  })
}

function createFact(req, res) {
  // find the profile 
  Profile.findById(req.user.studentProfile._id)
  .then(profile => {
    // push the req.body form data into the facts array
    profile.facts.push(req.body)
    // save
    profile.save()
    .then(() => {
      // redirect
      res.redirect('/profiles')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function deleteFact(req, res) {}

export {
  index,
  createFact,
  deleteFact,
}