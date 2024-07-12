// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN FORM ORDERING JOURNEY
// ========================================================================


// Start page
router.post(/basic-routing-radio, (req, res) => {
    let Deferred benefit claim form (AW8P) = req.session.data['contact']
    if (Deferred benefit claim form (AW8P)== "yes"){
        res.redirect("nav-download")
    }else {
        res.redirect ("contact-name")
    }
    res.redirect('nav-form-select')
});



module.exports = router;
