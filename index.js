const mongoose = require ('mongoose');
const cors = require ('cors');
const express = require ('express');

const app = express();
app.use(cors());
app.use(express.json());


const port = 4000
const dbconnection = "mongodb+srv://Edward:Baguvix___9382@ecommerce.kr0lz.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce"


app.listen(port,()=>{
    console.log(`server runnning on  ${port}`)
})
app.get('/',(req,res)=>{
    res.send("server is running on port 4000");
})


// connecting to the database

mongoose.connect(dbconnection)
.then(()=>{
  console.log("connected to the database")
}).catch((error)=>{
    console.log("error connecting to the database",error);
})

// set up routes
const userroutes = require('./routes/UserRoutes');

app.use('/api/users',userroutes);