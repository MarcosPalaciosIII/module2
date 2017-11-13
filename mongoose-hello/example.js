// this setup will go in "app.js"
// (only once per application)

const mongoose = require('mongoose');

// tells Mongoose which data base to connect to (URL and name of database)
//                                use adopt-a-cat
//                                        |
mongoose.connect("mongodb://localhost/adopt-a-cat", {useMongoClient: true});
//          |
//  setting object (avoids deprecation waring)

// tells Mongoose to use regular Javascript promise for our callback
//(promises are a way to organize callbacks)
mongoose.Promise = Promise;

// -----------------------------------------------


// this setup will go in its own file ('cat-moel.js')
// this needs to happen once per collection

const Schema = mongoose.Schema;

// create the schema for cat documents
// - the "Schema" is the structure of the document
// - it can also include validation rules
const catSchema = new Schema({
  name: {type: String},
  owner: {type: String},
  age: {type: Number},
  favoriteFoods: [
    {type: String }
  ]
});

//create our first Mongoose model for saving cats
const CatModel = mongoose.model("Cat", catSchema);
//                                  |
//                  "Cat" -> "cat" -> "cats"
//                                      |
    // The name of the collection is "cats"
// (by convection, model names are singular. collection names are plural)

//MONGOOSE MODEL:
// A constructor function that gives us methods
// to interact with a specific MongoDB collection

// the model defines the collection name
// and what kind of information will be stored there.


//------------------------------------------------

// CREATE using Mongoose
// Inserting a new document with Mongoose

// db.cats.insertOne({name: "Dooby"})

// 1) create an instance of the model
const arielsKitty = new CatModel({
  name: "Dooby",
  owner: "Ariel",
  age: 8,
  favoriteFoods: [
      "treats",
      "catnip"
  ]
});

// 2) save the instance to send it to the database
arielsKitty.save()
  .then(() => {
    console.log("Dooby saved succesful!");
  })
  .catch((err) => {
    console.log("Dooby Error!");
    console.log(err);
  });


const JessKitty = new CatModel({
  name: "Momo",
  owner: "Jess",
  age: 7,
  favoriteFoods: [
    "wet food",
    "everything"
  ]
});

JessKitty.save()
  .then(() => {
    console.log("Momo save succesful!");
  })
    .catch(() => {
      console.log("Momo Error");
      console.log(err);
  });



// Read using Mongoose
// Retrieving documents with Mongoose

// db.cats.find()
// ("find()" always gets an ARRAY of documents)
CatModel.find(
// 1st argument -> criteria object (optional)
  {name: "Dooby"},

// 2nd argument -> projection object (optional)
  {name: 1, _id: 0}

  //         Tells Mongoose we are done creating the query and we are ready to execute or run it
).exec()
.then((allCats)=> {
  console.log("find all cats SUCCESS!");
  console.log(allCats);
})
.catch((err) => {
  console.log("find cats ERROR");
  console.log(err);
});


//db.cats.findOne({name: "Momo"})
// ("findOne()" always gets only one document)
//              criteria object
//                      |
CatModel.findOne({name: "Momo"}).exec()
  .then((theMomo)=> {
  console.log("One of the MOMO's");
  console.log(theMomo);
})
  .catch ((err)=> {
    console.log("One MOMO ERROR");
    console.log(err);
  });


  // UPDATE using Mongoose
  // Modifying an existing documents with Mongoose

// 1) retrieve the document we want to update
CatModel.findOne({name: "Dooby"}).exec()
// 2) making the changes to the document and SAVING
  .then((theCat)=> {
    theCat.set({name: "Beans" });

    // return the next ASYNC command's promise
    return theCat.save();
  })
  .then((theCat)=> {
    console.log("Update SUCCESS!");
    console.log(theCat);
  })
  .catch((err)=> {
    console.log("Update ERROR!");
    console.log(err);
  });
