const express = require('express');
const Table = require('../models/Table');
const router = express.Router();


// INSERCT http://localhost:5000/table/addtable
router.post('/addtable', async (req, res) => {
    try {
        const newtable = new Table({
            Table_Available: req.body.Table_Available,
            Total_Table: req.body.Total_Table,
            Restaurant_Id: req.body.Restaurant_Id,
            Table_Capacity: req.body.Table_Capacity,

        })

        const savetable = await newtable.save();
        // res.json(saveUser);
        if (savetable) {
            res.status(200).json({ 'msg': 'Table Data added Successfully', 'sts': '0' })
        } else {
            res.status(500).json({ 'msg': 'Table Data Failed', 'sts': '1' })
        }

    } catch (error) {
        console.error(error);
    }

})


//  http://localhost:5000/table/viewsingletable

router.get('/viewsingletable/:tid', async (req, res) => {
    const tid = req.params.tid;

    try {
        const table = await Table.findOne({ _id: tid }).populate('Restaurant_Id');
        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }
        res.json(table);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router
