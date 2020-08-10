exports.printwelcome=(req,res)=>{
    const name = req.param.name;
    res.setHeader('Content-Type', 'application/json')
    const welcomemessage=`Welcome to Node JS ${req.params.name}`
    res.json({message: welcomemessage})
}

