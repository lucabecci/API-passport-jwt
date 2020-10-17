import { Request, Response} from 'express'
import User, { IUser } from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config/config'

function createToken (user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret, {
        expiresIn: 86400
    })
}


export const signUp = async (req: Request, res: Response):Promise<Response>=> {
    const { email, password } = req.body;
    if( !email || !password){
        return res.status(400).json({ msg: 'Please send your email and password'})
    }
    
    const user = await User.findOne({email: email})
    if(user){
        return res.status(400).json({ msg:'The user already exists' })
    }

    const newUser = new User({
        email,
        password
    });
    await newUser.save()

    return res.status(201).json({
        data: newUser
    })

}

export const signIn = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    if( !email || !password){
        return res.status(400).json({ msg: 'Please send your email and password'})
    }

    const user = await User.findOne({email: email})
    if(!user){
        return res.status(400).json({ msg: 'This user doesnt exists'})
    }

   const isMatch =  await user.comparePassword(password)
   if (isMatch){
       return res.status(200).json({token: createToken(user)})
   }

   return res.status(400).json({ msg: 'The email or password are incorrect.'})
}