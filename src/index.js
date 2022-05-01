//Import biblioteki "express" oraz "axios"
const express = require("express");
const axios = require("axios");
//Utworzenie aplikacji Express
const app = express();
//Ustawienie stalej "port" jako port 5000
const port = process.env.PORT | 5000;

app.get("/", (req, res) => {
    // Pobranie adresu IP klienta
    const ip = req.ip;
    res.write(`Adres IP: ${ip}\n`);
    //Wykorzystanie biblioteki "axios" oraz API "ipwhois.app" do pobrania informacji o strefie czasowej klienta
    axios
    .get(`https://ipwhois.app/json/`)
    .then((axiosRes) => {
        const data = axiosRes.data;
        //Jesli udalo sie pobrac dane...
        if (data.success)
        {
            //Okreslenie godziny i czasu u klienta na podstawie strefy czasowej
            let dateTime = new Date().toLocaleString("pl-PL", {
                timeZone: data.timezone,
            });
            res.write(`Adres klienta w API "ipwhois": ${data.ip}\n`)
            res.write(`Data u klienta API "ipwhois": ${dateTime}`);
        }
        //Jesli nie udalo sie pobrac danych...
        else
        {
            res.write("Wystapil blad pobierania danych!\n");
            res.write(`Tresc bledu:\n${data.message}`)
        }
        res.send();
    }) //Obsluga bledow
    .catch((error) => {
        console.error(error);
    });
});

//Ustawienie nasluchiwania serwera na porcie 5000
app.listen(port, () => {
  console.log("Michal Mon");
  console.log(`Data: ${Date()}`);
  console.log(`Serwer nasluchuje na porcie: ${port}`);
});