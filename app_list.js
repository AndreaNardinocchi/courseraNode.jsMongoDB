const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:NFq3Pq7RMGLBPK6QdraHWwSm@172.21.109.45:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })