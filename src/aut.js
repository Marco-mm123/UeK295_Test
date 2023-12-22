const express = require('express')
const autrouter = express.Router()
const session = require('express-session')

const AdminData = {
    email: "", 
    password: "m295"
};

autrouter.use(express.json())

autrouter.get('/verify', (req, res) => {
    //#swagger.tags['Authorization']
    if (req.session.email){
        return res.status(200).json({ email: req.session.email })
    }else{
        return res.status(401).json({ error: "Not logged in" })
    }

   
});

autrouter.post('/login', (req, res) => {
    //#swagger.tags['Authorization']
    const { email, password } = req.body;

    if(email && password){
        if(password === AdminData.password){
            req.session.email = email;
            return res.status(200).json({ email: req.session.email  })
        }else{
            res.status(401).json({ error: "invalid password" })
        }
    }

})

autrouter.delete('/logout', (req, res) => {
    //#swagger.tags['Authorization']
    if(req.session.email){
        req.session.email = null
        return res.status(204).send('logged out.')
    }else{
        return res.status(401).json({ error: "Not logged in"})
    }
})


module.exports = autrouter