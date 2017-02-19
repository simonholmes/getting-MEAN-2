/* GET 'home' page */
const homelist = function(req, res){
  res.render('locations-list', { title: 'Home' });
};

/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};