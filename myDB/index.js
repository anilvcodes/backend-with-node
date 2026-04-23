

const mongoose = require("mongoose");

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myDB")
.then(() => console.log("Connected"))
.catch(err => console.log(err));

// 2. Create Schema (structure of data)
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// 3. Create Model
const User = mongoose.model("User", userSchema);

// 4. Insert Data
async function run() {
  // create user
  const user = new User({
    name: "anil",
    age: 25
  });

  await user.save();
  console.log("User saved");

  // read users
  const users = await User.find();
  console.log(users);
}

run();

