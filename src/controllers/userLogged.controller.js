import userLoggedService from "../services/userLogged.service";

const userLoggedController = (req, res) => {
    
    try{
       const users = userLoggedService(uuid)
       return res.status(200).json(users)
       
   }catch(error){

        return res.status(401).json("teste")

   }
}

export default userLoggedController