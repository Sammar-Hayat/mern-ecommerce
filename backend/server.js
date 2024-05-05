const app = require("./app");
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

// config
dotenv.config({path:"backend/config/.env"});
const port = process.env.PORT || 5099

//database
connectDatabase()
    
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
