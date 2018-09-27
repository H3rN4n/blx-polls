var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  console.log(req.params);
  connection.query('SELECT * from polls WHERE id= "' + req.params.id +'"', function (error, results, fields) {
    console.log(results)
    if (error) {
      res.json({
        "status": 500,
        "error": error,
        "response": null
      });
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.json({
        "status": 200,
        "error": null,
        "response": results
      });
      //If there is no error, all is good and response is 200OK.
    }
  });

});

router.post('/', function (req, res) {

  connection.on('error', function (err) {
    console.log(err);
    res.send({
      success: false,
      message: 'database error',
      error: err
    });
    return;
  });

  var name = req.body.name;

  connection.query('INSERT INTO users SET ' +
  'title = "' + title + '",' +
  'bgImage = "' + bgImage + '",' +
  'questionsBgImage = "' + questionsBgImage + '",' +
  'bgColor = "' + bgColor + '",' +
  'primaryColor = "' + primaryColor + '",' +
  'secundaryColor = "' + secundaryColor + '",' +
  'questions = "' + questions + '"',
    function (err, result) {
      if (err) throw err;
      res.send('User added to database with ID: ' + result.insertId);
    }
  );
});

module.exports = router;
