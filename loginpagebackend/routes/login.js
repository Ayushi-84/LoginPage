var express = require('express');
var router = express.Router();
var pool=require('./pool')

/* GET home page. */
router.post('/addnewuser', function(req, res, next) {
  pool.query("insert into user set ?",[req.body],function(error,result)
  {
if(error)
{ 
    return res.status(500).json({status:false,error:error})
}
else{
    return res.status(200).json({status:true})
}

  })
});

router.post('/checkuser', function(req, res, next) {
  pool.query("select * from logincredentials.user where (userid=? or mobileno=?) and password=?",[req.body.userid,req.body.userid,req.body.password],function(error,result)
  {
    if(error)
    {
        console.log(error)
        return res.status(500).json({status:false,error:error})
    }
    
    else
    {  if(result.length==1)
        {  return res.status(200).json({status:true})
        }
        else
        {
          return res.status(200).json({status:false})
        }
    
    }
    
       })
});


router.post('/checkadmin', function(req, res, next) {
  pool.query("select * from logincredentials.user where userid=? and password=?",[req.body.userid,req.body.password],function(error,result)
  {
    if(error)
    {
        console.log(error)
        return res.status(500).json({status:false,error:error})
    }
    
    else
    {  if(result.length==1)
        {  return res.status(200).json({status:true})
        }
        else
        {
          return res.status(200).json({status:false})
        }
    
    }
    
       })
});

router.post('/updateuser', function(req, res, next) {
  pool.query("update user set firstname=? where userid=?",[req.body.firstname,req.body.userid],function(error,result)
  {
if(error)
{ 
    return res.status(500).json({status:false,error:error})
}
else{
    return res.status(200).json({status:true})
}

  })
});

router.post('/deleteuser', function(req, res, next) {
  pool.query("delete from logincredentials.user where userid=?",[req.body.userid],function(error,result)
  {
if(error)
{ 
    return res.status(500).json({status:false,error:error})
}
else{
    return res.status(200).json({status:true})
}

  })
});

router.get('/displayalluser', function(req, res, next) {

  pool.query("select * from user",function(error,result)
  {
if(error)
{ 
    return res.status(500).json({status:false,error:error})
}
else{
    return res.status(200).json({data:result})
}

  })
});

module.exports = router;