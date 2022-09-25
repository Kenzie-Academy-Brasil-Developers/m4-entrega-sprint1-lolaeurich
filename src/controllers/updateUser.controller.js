
import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
    try{
    const uuidReq = req.uuid
    const {uuid} = req.params
    const isAdm = req.isAdm
    const user = req.body
    const updatedUser = updateUserService(uuidReq, uuid, isAdm, user);
    return res.status(200).json(updatedUser)
    }catch(error){
        return res.status(401).json({error: error.message})
    }
}

export default updateUserController

