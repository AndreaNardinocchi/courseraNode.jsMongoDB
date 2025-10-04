const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:FacreKlSbHt5iEZAeqAPxCLV@172.21.19.248:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })