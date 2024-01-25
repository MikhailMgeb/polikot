const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/translate.json');
})

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
})