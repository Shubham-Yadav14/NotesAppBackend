// middleware.js
const verify = (req, res, next) => {
    console.log("Hello");
    console.log(req.url);
    next();
};

module.exports = {
    verify
};
