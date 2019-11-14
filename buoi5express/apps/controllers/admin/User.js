function getList(req, res) {
    res.send("User List");
}

function getAdd(req, res) {
    res.send("User Add");
}

function getEdit(req, res) {
    res.send("User Edit");
}

function getDel(req, res) {
    res.send("User Del");
}


function getTest(req, res) {
    res.send(`
        <form method="post">
            <input type="text" name="mail"/>
            <input type="submit" name="sbm" value="Send"/>
        </form>
    `);
}
function postTest(req, res) {
    let mail = req.body.mail
    res.send(mail)
}

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel,

    getTest:getTest,
    postTest:postTest
}