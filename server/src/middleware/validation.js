const validation = (req, res, next) => {
    const { nameTodo } = req.body;
    if (!nameTodo) {
        res.status(400).json({
            message: "Vui lòng nhập công việc!",
        });
    } else {
        next();
    }
};

module.exports = {
    validation,
};
