import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs"

const userLoginService = async (email, password) => {

    const user = users.find((element) => element.email === email)

    if(!user){
        throw new Error("Wrong email/password")

        }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if(!passwordMatch) {
        throw new Error("Wrong email/password")
    }

    const token = jwt.sign({isAdm: user.isAdm}, "SECRET_KEY", {expiresIn: "24h", subject: user.uuid})

    return {token}

}

export default userLoginService