var Userdb = require('../model/model');

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "This field must contain value"})
        return
    }

    const user = new Userdb({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        college: req.body.college,
        occupation: req.body.occupation
    })

    user
     .save(user)
     .then(data => {
        //res.send(data)
        res.redirect('add-user')
     })
     .catch(err => {
        res.status(500).send({
            message: err.message || "An Error occured"
        })
     })
}

exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: `id ${id} not found please try again`})
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: `Error finding ${id}. please try again`})
            })

    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "error occured while retrieving data"})
        })
    }
}

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Please can't be left empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message: `user with ${id} not found. Please try again`})
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: "error updating user"})
        })
}

exports.delete = (req,res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Error deleting user with id ${id}`})
            }else{
                res.send({
                    message: "User deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "trouble deleting User with id=" + id
            })
        })
}