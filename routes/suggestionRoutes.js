const router = require('express').Router();
const suggest = require('../models/suggestionModel');

router.get('/all-suggestions', (req, res) => {
    suggest.find()
        .then((info) => res.status(200).json({confirmation: 'success', info}))
        .catch((err) => res.status(500).json({confirmation: 'fail', err}));
    });
    
router.get('/byname-suggestion', (req, res) => {
    const name = req.query.name;
        suggest.findOne({name})
            .then((person) => {
                return res.status(200).json({confirmation: 'success', person});
            })
            .catch((err) => res.status(500).json({confirmation: 'fail', err}));
    });

router.get('/single-suggestion/:id', (req, res) => {
    suggest.findById(req.params.id)
        .then((suggestion) => res.status(200).json({suggestion}))
        .catch((err) => res.status(500).json({confirmation: 'fail', err}));
})

router.post('/create-suggestion', (req, res) => {
    if (!req.body.title || !req.body.name || !req.body.suggestion) {
        return res
            .status(400)
            .json({confirmation: 'fail', message: 'All Inputs Must Be Filled.'});
    }
    // const title = req.params.suggest;
    // let existingSuggest = suggest.findOne({title}).then((info) => info.title === req.body.title);
    //     if (existingSuggest.length) {
    //         return res
    //             .status(400)
    //             .send('Suggestion Already Exists');
    //     }

    const newSuggestion = new suggest();

    newSuggestion.title = req.body.title;
    newSuggestion.name = req.body.name;
    newSuggestion.suggestion = req.body.suggestion;
    newSuggestion.likes= req.body.likes;
    newSuggestion.anon = req.body.anon;
    
    newSuggestion
        .save()
        .then((val) => res.status(200).json({confirmation: "success", val}))
        .catch((err) => res.status(500).json({confirmation: 'fail', err}));
});

router.put('/update-suggestion/:title', (req, res) => {
    let updatedSuggestion = req.body.title;
    suggest.findOneAndUpdate({title: req.params.title}, );
        
        
        
        // if(data.title === req.params.title) {
        //     data.title = updatedSuggestion.title 
        //         ? updatedSuggestion.title 
        //         : data.title;
        //     data.suggestion = updatedSuggestion.suggestion 
        //         ? updatedSuggestion.suggestion
        //         : data.suggestion
        
    return res.status(200).json({message: 'User Updated', users})
});

module.exports = router;