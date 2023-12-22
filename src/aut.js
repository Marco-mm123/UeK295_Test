const express = require('express')
const autrouter = express.Router()
const session = require('express-session')

//This programm only checks for the password so I only gave this object a password and an empty email.
const AdminData = {
    email: "", 
    password: "m295"
};

autrouter.use(express.json())

//By checking if the session email has been given it either verifys you by showing the E-Mail or rejects you.
autrouter.get('/verify', (req, res) => {
    //#swagger.tags['Authorization']
    if (req.session.email){
        return res.status(200).json({ email: req.session.email })
    }else{
        return res.status(401).json({ error: "Not logged in" })
    }

   
});

//It checks if there is an email and password in the body and then it checks the password. If all correct it adds the current email to the session.email
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

//It nullifys the session.email so now you're unauthorized
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