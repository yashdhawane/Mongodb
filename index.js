const mongoose = require('mongoose');

main().then(()=>{console.log("res")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
 
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
  });

  const user = mongoose.model("user", userSchema);

//   const user2= new user({
//     name:"yash",
//     email: "yash",
//     age:50,
//   });

//   user2.save();

user.insertMany([
    {name:"yash",email:"yash",age:22},
    {name:"yash",email:"yash",age:22},
    {name:"yash",email:"yash",age:22},

    {name:"sde",email:"sde",age:21},
    {name:"design",email:"design",age:23},

]);





// user.updateMany({age : {$gt:10}},{age:40}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// });

user.deleteMany({ name:"yash" }).then((res)=>{
   
})
.catch((err)=>{
    console.log(err)
});

user.find({ }).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});
