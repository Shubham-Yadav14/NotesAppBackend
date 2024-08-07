export default verify = (req,res,next)=>{
    console.log("Hello");
    console.log(req.url);
    next();

}