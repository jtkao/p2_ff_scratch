// controller 
module.exports = function(app) {

    app.get("/", function(req,res){

        res.render('homepage', {layout: 'login'});
    });

};