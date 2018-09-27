var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * from users', function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({
        "status": 500,
        "error": error,
        "response": null
      }));
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.send(JSON.stringify({
        "status": 200,
        "error": null,
        "response": results
      }));
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

  connection.query('INSERT INTO users SET name = "' + name + '"',
    function (err, result) {
      if (err) throw err;
      res.send('User added to database with ID: ' + result.insertId);
    }
  );
});

module.exports = router;
