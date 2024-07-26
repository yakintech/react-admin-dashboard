
const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const cors = require("cors")
const { orders } = require("./orders")

const secretKey = "secretKey"

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {

    if (req.url === "/login") {
        return next()
    }

   try {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
       return next()
    })
   } catch (error) {
        return res.sendStatus(401)
   }
})


let users = [
    {
        "id": 1,
        "email": "aykut@mail.com",
        "password": "123"
    },
    {
        "id": 2,
        "email": "cagatay@mail.com",
        "password": "123"
    }
]


app.post("/login", (req, res) => {
    //user check
    let user = users.find(user => user.email === req.body.email && user.password === req.body.password)
    if (user) {
       
        //JWT generate
        const token = jwt.sign(req.body.email, secretKey)

        res.json({
            "token": token,
            "id": user.id
        })

    } else {
        res.status(401).json({
            "message": "Login failed"
        })
    }
})


app.get("/orders", (req,res) => {
   return res.json(orders)
})



app.listen(8080, () => {
    console.log("Server is running on port 8080")
})