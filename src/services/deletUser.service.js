import users from "../database";

const deleteUserService = (id) => {

    const userIndex = users.findIndex(element => element.uuid === id)

    if(userIndex === -1) {
        throw new Error("User deleted with success")
    }

    users.splice(userIndex, 1)

    return {message: "User deleted with success"}

};

export default deleteUserService