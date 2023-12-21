const dataBase = require("../config/database");
async function getUserDataBase(email) {
    try {
        const [user] = await dataBase.execute("select * from users where email = ?", [
            email,
        ]);
        return user[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserDataBase,
};
