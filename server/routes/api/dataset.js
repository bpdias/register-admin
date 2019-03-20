const express = require('express');
const router = express.Router();
const Dataset = require('../../models/Dataset');

// Load input validator
const validateDatasetInput = require('../../validation/dataset');


// @route   GET api/dataset/test
// @desc    Test Dataset Route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: "Dataset route works"
}));

// @route   POST api/dataset/save
// @desc    Create Dataset Route
// @access  Public
router.post('/create', (req, res) => {
    const {
        errors,
        isValid
    } = validateDatasetInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Dataset.findOne({
            dataset: req.body.dataset
        })
        .then(data => {
            if (data) {
                return res.status(400).json({
                    data: "CPF ou Cnpj já cadastrados"
                })
            } else {
                const newDataset = new Dataset({
                    name: req.body.name,
                    data_type: req.body.data_type,
                    blacklist: req.body.blacklist,
                    dataset: req.body.dataset,
                })

                newDataset.save()
                    .then(dataset => res.json(dataset))
                    .catch(err => console.log(err))
            }
        })
});

// @route   POST api/dataset/update
// @desc    Update Dataset Route
// @access  Public
router.post('/update', (req, res) => {
    const {
        errors,
        isValid
    } = validateDatasetInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const datasetFields = {};

    if (req.body.name) datasetFields.name = req.body.name;
    if (req.body.dataset) datasetFields.dataset = req.body.dataset;
    if (req.body.blacklist) datasetFields.blacklist = req.body.blacklist;
    if (req.body.data_type) datasetFields.data_type = req.body.data_type;

    Dataset.findOne({
            id: req.body.id
        })
        .then(dataset => {
            if (dataset) {
                Dataset.findOneAndUpdate({
                        id: req.body.id
                    }, {
                        $set: datasetFields
                    }, {
                        new: true
                    })
                    .then(dataset => {
                        res.json(dataset)
                    });
            }
        })
})

// @route   GET api/dataset/:id
// @desc    GET Dataset
// @access  Public
router.get('/record/:id', (req, res) => {
    const errors = {};
    Dataset.findOne({
            id: req.params.id
        })
        .then(dataset => {
            if (!dataset) {
                errors.noDataset = "CPF/CNPJ not found";
                res.status(404).json(errors);
            }

            res.json(dataset);
        })
        .catch(err => res.status(404).json(err));
})

// @route   GET api/dataset/all
// @desc    Get all Datasets Route
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};
    Dataset.find()
        .then(datasets => {
            if (!datasets) {
                errors.noDataset = "none CPF/CNPJ found";
                res.status(404).json(errors);
            }

            res.json(datasets);
        })
        .catch(err => res.status(404).json(err));
})

// @route   DELETE api/dataset/:id
// @desc    Delete Dataset Route
// @access  Public
router.delete('/destroy/:id', (req, res) => {
    console.log(req.params.id);
    
    Dataset.findOneAndRemove({id: req.params.id})
        .then((response) => {
            res.json({ success: true })
        })
    
})

module.exports = router;