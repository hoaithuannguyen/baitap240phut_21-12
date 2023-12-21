const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { allUsersRouter } = require("./src/routes/users.routes");
const { todoRouter } = require("./src/routes/todolist.routes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

allUsersRouter(app);
todoRouter(app);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
