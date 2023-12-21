const { login } = require("../controllers/users.controllers");

const allUsersRouter = (app) => {
    app.post("/login", login);
};

module.exports = { allUsersRouter };
