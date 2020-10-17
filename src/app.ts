import express, { urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import passport, { Passport } from 'passport'
import passportMiddleware from './middlewares/passport'
//initializations 
const app = express()
//imp routes
import authRoutes from './routes/auth.routes'
import specialRoutes from './routes/special.routes'
//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize())
passport.use(passportMiddleware)


//routes
app.get('/', (req, res) => {
    res.send(`The api is at http://localhost:${app.get('port')}`)
})
app.use(authRoutes)
app.use(specialRoutes)

export default app;