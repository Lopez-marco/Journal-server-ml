require("dotenv").config();
let express = require('express');
let app = express();

const sequelize = require('./db');

let journal = require('./Controllers/journalcontroller');
let user = require('./Controllers/usercontroller')

sequelize.sync();
app.use(require('./Middleware/headers'));
app.use(express.json());
app.use('/user', user);

// app.use(require('./Middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000,function(){
    console.log("app is listening on port 3000");
});

    // app.use("/test", function(req, res) {
    //     res.send("this is a test route");
    // });
    
    // app.use("/about-me", function(req, res) {
    //     res.send("My name is Marco Lopez and my age is 27");
    // });
    
    // app.use("about-me", (req, res) =>{          ///////fast way with out the function...
    //     res.send("mlopez");
    // })
    //////////////////////this is not the cleanes way... to much code//////////////
    // app.use('/journal', require('./Controllers/journalcontroller'));