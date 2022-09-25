import users from "../database";

const updateUserService = (uuidReq, uuid, isAdm, user) => {
    
    const date = new Date();
    const formatedDate = date.toLocaleDateString();

    const updatedUser = {
        name: user?.name,
        email: user?.email,
        updatedOn: formatedDate
    }

    const userIndex = users.findIndex((user) => user.uuid === uuid)

    if(userIndex === -1) {
        throw new Error("user not found")
    }

    if(!isAdm && users[userIndex].uuid !== uuidReq) {
        throw new Error(
            "You can only update your profile, unless you are an admin"
          );
    }
    users[userIndex] = {...users[userIndex], ...updatedUser}


    return {
        ...users[userIndex], password: undefined
    }    
}
export default updateUserService
 


 