

function addSchool(req, res) {
    res.send("school added");
};

function listSchool(req, res){
    res.send("showing list");
};

module.exports = {addSchool, listSchool};