const express = require('express');
const router = express.Router();
const FootballCat = require("./model.js")


router.get('/', (req, res) => {
    const footballCatsData = FootballCat.FootballCat.all;
    res.send(footballCatsData);
});

router.get('/get/:id', (req, res) => {
    try {
        const footballCatId = parseInt(req.params.id);
        const selectedFootballCat = FootballCat.FootballCat.findById(footballCatId);
        res.send(selectedFootballCat);
    } catch (err) {
        console.log(err);
        res.status(404).send("Jedi Football Cat not found!");
    }
});

router.post('/create', (req, res) => {
    const data = req.body;
    const newFootballCat = FootballCat.FootballCat.create(data);
    res.status(201).send(newFootballCat);
});

router.delete('/delete/:id', (req, res) => {
    const footballCatId = parseInt(req.params.id);
    const footballCatToDestroy = FootballCat.FootballCat.findById(footballCatId);
    footballCatToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;
