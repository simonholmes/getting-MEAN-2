/* GET home page */
const about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports = {
  about
};