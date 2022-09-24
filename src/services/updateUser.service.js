import users from "../database";

const updateUserService = (uuid,name,email) => {
    const updatedUser = {
        uuid, 
        name,
        email,
    }

    const userIndex = users.findIndex(element => element.uuid === uuid)

    if(userIndex === -1) {
        throw new Error({message: "teste"})
    }

    users[userIndex] = {...users[userIndex], ...updatedUser}


    return users[userIndex]
}
export default updateUserService