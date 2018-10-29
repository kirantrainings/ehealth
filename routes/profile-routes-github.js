var router = require('express').Router();

var authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/auth/login');
	}
	else{
	    userdetails.findOne({username:req.user.id})
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
		role:'Doctor'
	};
	req._passport.session.role='Doctor';
	res.render('physician', {user: req._passport.session.loggedInDetails});
});

module.exports = router;