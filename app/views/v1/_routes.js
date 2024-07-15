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





module.exports = router;
