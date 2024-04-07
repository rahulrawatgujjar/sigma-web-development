// CRUD Operations:

use("CrudDb");

// console.log(db);



// CREATE:

db.createCollection("courses");

// console.log(db.getCollection("courses"));

// db.courses.insertOne({
//   name: "Rahul web dev course",
//   price: 0,
//   assignments: 12,
//   projects: 45
// });

// db.courses.insertMany([
//   {
//     "name": "Java Programming Basics",
//     "price": 0,
//     "assignments": 8,
//     "projects": 20
//   },
//   {
//     "name": "Python for Beginners",
//     "price": 0,
//     "assignments": 10,
//     "projects": 30
//   },
//   {
//     "name": "HTML and CSS Crash Course",
//     "price": 0,
//     "assignments": 6,
//     "projects": 15
//   },
//   {
//     "name": "JavaScript Fundamentals",
//     "price": 0,
//     "assignments": 12,
//     "projects": 40
//   },
//   {
//     "name": "React.js Essentials",
//     "price": 0,
//     "assignments": 15,
//     "projects": 50
//   },
//   {
//     "name": "Node.js Mastery",
//     "price": 0,
//     "assignments": 10,
//     "projects": 35
//   },
//   {
//     "name": "Angular Framework Deep Dive",
//     "price": 0,
//     "assignments": 14,
//     "projects": 45
//   },
//   {
//     "name": "SQL Database Fundamentals",
//     "price": 0,
//     "assignments": 8,
//     "projects": 25
//   },
//   {
//     "name": "Responsive Web Design",
//     "price": 0,
//     "assignments": 10,
//     "projects": 30
//   },
//   {
//     "name": "Git and GitHub for Collaboration",
//     "price": 0,
//     "assignments": 6,
//     "projects": 20
//   }
// ]);



// READ:

// let a = db.courses.find({
//   "price": 0
// });

// console.log(a);

// console.log(a.toArray())

// let b = db.courses.findOne({
//   "price": 0
// });

// console.log(b);



// UPDATE:

// db.courses.updateOne({ price: 0 }, { $set: { price : 100}});

// db.courses.updateMany({ price: 0 }, { $set: {price : 1000}});


// DELETE:

// db.courses.deleteOne({ price: 100 });
// db.courses.deleteMany({ price: 1000});