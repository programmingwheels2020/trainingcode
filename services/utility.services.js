const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    console.log(password);
    return bcrypt.hashSync(password, salt);
}

const comparePassword = (hashPassword, password) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}