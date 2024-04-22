const express = require('express');
const Restaurants = require('../models/Restaurants');
const Table = require('../models/Table');
const router = express.Router();


// INSERCT http://localhost:5000/restaurant/addrestaurant
router.post('/addrestaurant', async (req, res) => {
    try {
        const newrestaurant = new Restaurants({
            Name: req.body.Name,
            Address: req.body.Address,
            Mob_No: req.body.Mob_No,
            Restaurant_Status: req.body.Restaurant_Status,

        })

        const saverestaurant = await newrestaurant.save();
        // res.json(saveUser);
        if (saverestaurant) {
            res.status(200).json({ 'msg': 'restaurant Data added Successfully', 'sts': '0' })
        } else {
            res.status(500).json({ 'msg': 'restaurant Data Failed', 'sts': '1' })
        }

    } catch (error) {
        console.error(error);
    }

})

// view http://localhost:5000/restaurant/viewrestaurant

router.get('/viewrestaurant', async (req, res) => {
    try {
        const restaurant  = await Restaurants.find()

        res.json(restaurant)

    } catch (error) {
        res.status(500).json({ 'Error': error })

    }
})


// http://localhost:5000/restaurant/singlerestaurant
router.get('/singlerestaurant/:rid', async (req, res) => {
    const rid = req.params.rid
    try {
        const restaurant = await Restaurants.findById(rid)
        res.json(restaurant)
    } catch (error) {
        res.status(500).json({ 'Error': error })
    }
})




module.exports = router
