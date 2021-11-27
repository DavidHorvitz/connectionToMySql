const express = require(`express`);
const router = express.Router();


router.get(`/:name`, (req, res,next) => {
res.render(`user`,{name:req.params.name});
next();
});

module.exports = router;