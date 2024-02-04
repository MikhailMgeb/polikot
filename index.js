const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3000;


app.use(cors());

app.get('/', (req, res) => {
    const language = req.query.language;
    const dataBase = fs.readFileSync(path.join(__dirname, 'translate.json'), 'utf-8');
    const dataBaseObject = JSON.parse(dataBase);

    const answerServer = {
        language: dataBaseObject[language]
    };

    res.json(answerServer);
})

app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
})