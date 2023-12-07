const express = require('express');
const router = express.Router();
const Projet = require('../models/todo');

router.post('/create', (req, res) => {
    let data = req.body;
    let newProjet = new Projet(data);

    newProjet.save()
        .then(savedProjet => {
            res.send(savedProjet);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get('/all', (req, res) => {
    Projet.find({})
        .then(saved => {
            res.status(200).send(saved);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    Projet.findByIdAndDelete({ _id: id })
        .then(saved => {
            res.status(200).send(saved);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.put('/update/:id', (req, res) => {
    let myid = req.params.id;


    Projet.findByIdAndUpdate({ _id: myid }, { status:true })
        .then(saved => {
            if (!saved) {
                res.status(404).send('Project not found');
            } else {
                res.status(200).send(saved);
            }
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;
