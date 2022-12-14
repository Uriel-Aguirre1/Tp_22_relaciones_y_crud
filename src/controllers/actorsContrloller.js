const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.render('actorsList.ejs', {actors})
            })
    },
'detail': (req, res) => {
        db.Actor.findByPk(req.params.id,{
            include : [
                {
                    association : 'movies'
                }
            ]
        })
            .then(actors => {
                res.render('actorsDetail.ejs', {actors});
            });
    }

}

module.exports = actorsController;