import listUserService from "../services/listUsers.service";

const listUserController = (req, res) => {

    const userId = req.uuid
    
    if(!userId) {
        return res
        .status(401).send()
    }
    
    const user = listUserService(userId) 

    if(user !== null) {
        return res.json(user).send()
    }
    else {
        return res.status(404).json({message: "user not found"}).send()
    }

    //const usersData = listUserService()

    //return res.status(200).json(usersData)
}

export default listUserController