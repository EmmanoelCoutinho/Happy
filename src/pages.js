const orphanages = require('./database/fakedata.js');

module.exports = {

    index(req,res) {
        return res.render('index')
    },
    createOphanage(req,res) {
        return res.render('create-orphanage')
    },
    orphanages(req,res) {
        return res.render('orphanages', {orphanages})
    },
    orphanage(req,res) {
        return res.render('orphanage')
    }
}