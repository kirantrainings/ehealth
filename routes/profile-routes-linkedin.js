var router = require('express').Router();
var userdetails = require('mongoose').model('userdetail');
var authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/auth/login');
	}
	else{
	    userdetails.findOne({username:req.user.username})
	   .then(result=>{
		   req._passport.session.loggedInDetails = result;
		next();

	   })
	   .catch(err=>{
		res.redirect('/auth/login');
	   })
		
	}
};


router.get('/', authCheck, (req, res) => {
     req.body.userDetails = {
		 username:req.user,
		 role:'Patient'
	 };
	 req._passport.session.role='Patient';
	res.render('patient',  {user: req._passport.session.loggedInDetails});
});

module.exports = router;