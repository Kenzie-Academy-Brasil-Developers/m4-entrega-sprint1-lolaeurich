import jwt from "jsonwebtoken"

const verifyIsAdmmiddleware = (req, res, next) => {

    const {isAdm} = req
    
    if(isAdm){

        next()
    }else {

        return res.status(401).json({message: "Unauthorized"})

}



    

}
export default verifyIsAdmmiddleware