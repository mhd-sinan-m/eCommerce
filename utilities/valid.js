const mailValid = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail)
}

const passwordValid = (password) => {
    const passwordRejex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRejex.test(password)
}

const valid = { mailValid, passwordValid }
module.exports = valid

/** axios bcrypt cors dotenv express jsonwebtoken ejs mongoose nodemon
}*/

