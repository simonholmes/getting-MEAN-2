/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = {
  index
};