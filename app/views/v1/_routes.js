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
    res.redirect('nav-form-select')
});



module.exports = router;
