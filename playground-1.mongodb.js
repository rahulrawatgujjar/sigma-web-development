
use('SigmaDatabase');


db.getCollection("courses").insertMany([
  {
    "name": "Python",
    "price": 25000,
    "instructor": "Sarah"
  },
  {
    "name": "C++",
    "price": 18000,
    "instructor": "John"
  },
  {
    "name": "JavaScript",
    "price": 22000,
    "instructor": "Emily"
  },
  {
    "name": "Ruby",
    "price": 19000,
    "instructor": "Michael"
  },
  {
    "name": "C#",
    "price": 23000,
    "instructor": "Sophia"
  },
  {
    "name": "PHP",
    "price": 17000,
    "instructor": "David"
  },
  {
    "name": "Swift",
    "price": 27000,
    "instructor": "Emma"
  },
  {
    "name": "HTML",
    "price": 15000,
    "instructor": "Daniel"
  },
  {
    "name": "CSS",
    "price": 16000,
    "instructor": "Olivia"
  },
  {
    "name": "SQL",
    "price": 21000,
    "instructor": "Matthew"
  }
]
);

console.log("Inserting completed.");