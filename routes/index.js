exports.index = function(req, res){
    res.render('index', { name: 'John' , title: 'test page'});
  };