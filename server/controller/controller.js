var Userdb = require('../model/model');

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "This field must contain value"})
        return
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        occupation: req.body.occupation,
        gender: req.body.gender
    })

    user
     .save(user)
     .then(data => {
        res.send(data)
     })
     .catch(err => {
        res.status(500).send({
            message: err.message || "An Error occured"
        })
     })
}

exports.find = (req,res) => {

}

exports.update = (req,res) => {

}

exports.delete = (req,res) => {

}