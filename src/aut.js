const express = require('express')
const autrouter = express.Router()
const session = require('express-session')

const AdminData = {};

autrouter.get('/verify', (req, res) => {
    if (req.session.email){
        return res.status(200).json({ email: req.session.email })
    }else{
        return res.status(401).json({ error: "Not logged in" })
    }

   
});

autrouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    if(email && password){
        secretAdminCredentials['email', 'password'] = email, password;
        req.session.email = email;
        return res.status(200).json({ email: req.session.email  })
    }else{
        res.status(401).json({ error: "Invalid credentails" })
    }

})

autrouter.delete('/logout', (req, res) => {
    if(req.session.email){
        req.session.email = null
        return res.status(204).send()
    }
    
    return res.status(401).json({ error: "Not logged in"})
})


module.exports = autrouter