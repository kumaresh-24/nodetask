var express = require('express');
var router = express.Router();



router.post('/v1/parse', (req, res) => {


  if (req.body.data && req.body.data != '') {
    var splitvalue = '000'
    var reqBody = req.body.data.split(splitvalue);
    if (reqBody.length == 3) {
      res.json({
        'statusCode': 200,
        'data': {
          firstName: reqBody[0] + '0' + splitvalue,
          lastName: reqBody[1].replace('0', '') + splitvalue,
          clientId: reqBody[2]
        }
      })
    } else {
      res.json({
        'statusCode': 409,
        'err': 'Give the Valid String'
      })
    }
  } else {
    res.json({
      'statusCode': 409,
      'err': 'Give the Valid String'
    })
  }


})


router.post('/v2/parse', (req, res) => {

  if (req.body.data && req.body.data != '') {
    var splitvalue = '000'
    var reqBody = req.body.data.split(splitvalue);
    if (reqBody.length == 3) {
      res.json({
        'statusCode': 200,
        'data': {
          firstName: reqBody[0],
          lastName: reqBody[1].replace('0', ''),
          clientId: reqBody[2].substring(0, 3) + "-" + reqBody[2].substring(3, 7)
        }
      })
    } else {
      res.json({
        'statusCode': 409,
        'err': 'Give the Valid String'
      })
    }

  } else {
    res.json({
      'statusCode': 409,
      'err': 'Give the Valid String'
    })
  }

})


module.exports = router;