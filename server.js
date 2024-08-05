// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const port = 3000;

// app.use(express.static('public'));

// app.get('/weather', async (req, res) => {
//     const city = req.query.city;
//     const apiKey = "c75d5605c821326e1e992b98c953f06d";

//     if (!city) {
//         return res.status(400).send({ error: 'City is required' });
//     }

//     try {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//         const data = response.data;

//         if (data.cod !== 200) {
//             return res.status(400).send({ error: data.message });
//         }

//         res.send({
//             location: data.name,
//             temperature: data.main.temp,
//             weather_descriptions: data.weather[0].description
//         });
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to fetch weather data' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = "c75d5605c821326e1e992b98c953f06d";

    if (!city) {
        return res.status(400).send({ error: 'City is required' });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = response.data;

        if (data.cod !== 200) {
            return res.status(400).send({ error: data.message });
        }

        res.send({
            location: data.name,
            temperature: data.main.temp,
            weather_descriptions: data.weather[0].description
        });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
