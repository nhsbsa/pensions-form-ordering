// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN FORM ORDERING JOURNEY
// ========================================================================


// Start page
router.post(/start/, (req, res) => {
    res.redirect('nav-form-select-radios')
});

//Nav-form-select-radios page
router.post(/nav-form-select-radios/, (req, res) => {

    const contract = req.session.data['contact']

    if (contract == 'not') {
        res.redirect('contact-name')
    } else {
        res.redirect('nav-download')

    }
});

//contact-postcode-no-result
router.post(/contact-postcode-no-result/, (req, res) => {

    const contract = req.session.data['noAddress']

    if (contract == 'change') {
        res.redirect('contact-postcode-lookup')
    } else {
        res.redirect('contact-full-address')

    }
});

//contact-postcode-lookup
router.post('/contact-postcode-lookup', (req, res) => {

    let postcode = req.session.data['enterPostcode']

    if (postcode == 'ABC 123') {
        res.redirect('contact-postcode-no-result')
    } else {
        res.redirect('contact-address-select')

    }
});





module.exports = router;
