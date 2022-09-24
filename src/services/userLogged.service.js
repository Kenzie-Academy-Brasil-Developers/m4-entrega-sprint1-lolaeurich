import users from "../database";

const userLoggedService = (uuid) => {
   

    const userIndex = users.findIndex(element => element.uuid === uuid)

    if(userIndex === -1) {
        throw new Error({message: "teste"})
    }


    return users[userIndex]

}

export default userLoggedService