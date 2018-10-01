const generateDummyEntries = function (connection) {

  //Poll Table

//   pollId: "",
//   title: "",
//   bgImage: "",
//   questionsBgImage: "",
//   bgColor: "",
//   primaryColor: "",
//   secundaryColor: "",

//   contact_active: true / false
//   contact_first: true / false


  //radio, checkbox, ?input

  var questions = [{
      text: "Lobo esta?",
      type: "radio",
      answers: [{
          text: "se esta poniendo el pantalon",
          correct: false
        },
        {
          text: "se esta poniendo el camisa",
          correct: false
        },
        {
          text: "siiii",
          correct: true
        }
      ]
    },
    {
      text: "Sal de ahí chivita chivita?",
      type: "radio",
      answers: [{
          text: "sal de ahi de ese lugar",
          correct: true
        },
        {
          text: "vente pa ca",
          correct: false
        },
        {
          text: "siiii",
          correct: false
        }
      ]
    }
  ]

  console.log("poll dyummy")

  connection.query('INSERT INTO polls (title, bgImage, questionsBgImage, bgColor, primaryColor, secundaryColor, questions )' +
    'VALUES (,"sal de ahí chivita chivita?, "", "","","","",'
     + JSON.stringify(questions) + ' )' +
    ')',
    function (err) {
      if (err) throw err;
    });

  return connection;
}

module.exports = generateDummyEntries;