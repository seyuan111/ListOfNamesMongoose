const axios = require('axios')

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:8080/api/users')
        .then(function(response){
            res.render('index', { users: response.data})
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.add_user = (req,res) => {
    res.render('add_users');
}

exports.update_user = (req,res) => {
    res.render('update_users')
}