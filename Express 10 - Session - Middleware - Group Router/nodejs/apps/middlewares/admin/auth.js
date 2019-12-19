var authCheck = (req, res, next)=>{

    if(req.session.mail){

        return res.redirect("/admin/dashboard")
    }
    next()
}

var authGuest = (req, res, next)=>{

    if(!req.session.mail){

        return res.redirect("/login")
    }
    next()
}

module.exports = {
    authCheck:authCheck,
    authGuest:authGuest
}