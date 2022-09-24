import users from "../database/index.js"

const listUserService = (userId) => {
 
    const user = users.find(item => item.uuid == userId)

    if(user) {
        delete user.password
        return user
    }
    else {
        return null
    }
}

export default listUserService