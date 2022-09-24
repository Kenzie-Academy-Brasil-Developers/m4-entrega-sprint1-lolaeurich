import users from "../database"
import {v4 as uuidv4} from "uuid"
import * as bycrypt from "bcryptjs"


const createUserService = async (email, name, password, isAdm = false) => {
    const hashedPassword = await bycrypt.hash(password, 10)

    const newUser = {
        email,
        name,
        password: hashedPassword,
        isAdm,
        createdOn: new Date(),
        updatedOn: new Date(),
        uuid: uuidv4()
    }

    users.push(newUser)
    const uuid = newUser.uuid
    
    const teste1 = {email, name, isAdm, createdOn: new Date(), updatedOn: new Date(), uuid}
   
    return teste1
}

export default createUserService