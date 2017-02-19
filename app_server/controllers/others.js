/* GET home page */
const about = function(req, res){
  res.render('generic-text', { title: 'About' });
};

module.exports = {
  about
};