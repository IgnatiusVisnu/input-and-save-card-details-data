const express = require("express");
const bodyParser = require("body-parser");


const mongoose = require('mongoose');

var path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://127.0.0.1:27017/cardsDB', {useNewUrlParser: true});

const cardSchema = new mongoose.Schema({
name: {type: String,
            required: true},
number: {type: String,
            required: true},
month: {type: String,
                required: true},
year: {type: String,
                required: true},
cvc: {type: String,
            required: true},
})

const Card = mongoose.model('card', cardSchema);

//routes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req, res){
    let nama = req.body.nama;
    let nomor = req.body.nomor;
    let bulan = req.body.bulan;
    let tahun = req.body.tahun;
    let cvc = req.body.cvc;
    
    const card = new Card({
        name: nama,
        number: nomor,
        month: bulan,
        year:tahun,
        cvc: cvc
    })
    
    card.save()



  });



app.listen(3000, function(){console.log("Server running on port 3000");});