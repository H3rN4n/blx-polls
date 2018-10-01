const createTables = function(connection) {
    connection.query('CREATE DATABASE IF NOT EXISTS belatrix_polls', function (err) {
      if (err) throw err;
      connection.query('USE belatrix_polls', function (err) {
        if (err) throw err;
  
        connection.query('CREATE TABLE IF NOT EXISTS results(' +
          'id INT NOT NULL AUTO_INCREMENT,' +
          'PRIMARY KEY(id),' +
          'pollId VARCHAR(30),' +
          'firstname VARCHAR(30),' +
          'lastname VARCHAR(30),' +
          'email VARCHAR(64),' +
          'country VARCHAR(30),' +
          'organization VARCHAR(30),' +
          'jobTitle VARCHAR(30),' +
          'comments VARCHAR(120),' +
          'pollResult VARCHAR(255)' +
          ')',
          function (err) {
            if (err) throw err;
          });
  
        connection.query('CREATE TABLE IF NOT EXISTS polls(' +
          'id INT NOT NULL AUTO_INCREMENT,' +
          'PRIMARY KEY(id),' +
          'title VARCHAR(100),' +
          'bgImage VARCHAR(255),' +
          'questionsBgImage VARCHAR(255),' +
          'bgColor VARCHAR(64),' +
          'primaryColor VARCHAR(30),' +
          'secundaryColor VARCHAR(30),' +
          'questions VARCHAR(255)' +
          ')',
          function (err) {
            if (err) throw err;
          });
      });
  
    });
  
    return connection;
  }
  
  
module.exports = createTables;