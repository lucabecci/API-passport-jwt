import {Router} from 'express'

import { signIn, signUp } from '../controllers/user.controller'

const router = Router()
//reg
router.post('/signup', signUp)
//log
router.post('/signin', signIn)


export default router;