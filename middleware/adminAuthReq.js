module.exports = function(req,res,next) {
    // if(!req.session.currentUser && req.session.currentUser.admin)
    if(!req.session.adminUser)
    {
        return res.redirect("/admin/login");
    }

    next();
}