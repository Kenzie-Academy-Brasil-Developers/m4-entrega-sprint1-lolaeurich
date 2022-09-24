
import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
    try{
    const {uuid} = req.params
    const {name, email} = req.body
    const updatedUser = updateUserService(uuid, name, email);
    return res.status(200).json(updatedUser)
    }catch(error){
        return res.status(401).json({error: error.message})
    }
}

export default updateUserController