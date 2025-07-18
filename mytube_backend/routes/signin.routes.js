import { signin } from "../controllers/signin.controllers";





function getSigninRoutes(app) {
app.post('/api/signin',signin )

}