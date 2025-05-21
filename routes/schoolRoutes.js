const express = require("express");
const {addSchool, listSchool} = require("../controllers/school");

const router = express.Router();

router.post('/addSchool', addSchool);

router.get('/listSchool', listSchool);

module.exports = router;