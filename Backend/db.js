const mongoose = require('mongoose');
/*const mongouri = 'mongodb+srv://gofood:hamza@cluster0.i1e1vtz.mongodb.net/?retryWrites=true&w=majority';*/
const mongoDB =async()=>{
     await mongoose.connect('mongodb+srv://gofood:hamza@cluster0.i1e1vtz.mongodb.net/goofoodmern?retryWrites=true&w=majority');     
            console.log("connected"); 
            const fetched_data = await mongoose.connection.db.collection("food_items");
            const a = await fetched_data.find({}).toArray();
            const foodCategory=await mongoose.connection.db.collection("foodCategory");
            const b = await foodCategory.find({}).toArray();
            global.food_items = a; 
            global.foodCategory = b;  
            console.log(global.food_items);                  
                             
        }

module.exports = mongoDB();
