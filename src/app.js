const express = require('express');
const app = express();

app.get('', (req,res) => {
    res.send("app.get is sending a response to you")
});

app.listen(3000, () => {
    console.log('  **  codezup http server is listening on port 3000');
});