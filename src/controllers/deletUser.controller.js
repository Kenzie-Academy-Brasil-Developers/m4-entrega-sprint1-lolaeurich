import users from "../database";
import deleteUserService from "../services/deletUser.service";

const deleteUserController = (req, res) => {
  
  
  try{
  const deletedUserid = req.params.uuid;
  const {isAdm, uuid} = req
  const deletedUser = deleteUserService(uuid);
 if(!isAdm && uuid !== deletedUserid ){
   return res.status(401).json({message: "Missing admin permissions"})
  }else{
  return res.json(deletedUser);
}
}catch(error){
  return res.json({ message: error.message })
}
};

export default deleteUserController;
