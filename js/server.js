require('dotenv').config();
import express from 'express';
import { get } from 'axios';
import cors from 'cors'; // Importar cors

const app = express();
const port = 3000;

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

console.log(unsplashAccessKey);// Obtener Access Key desde variables de entorno

// Usar cors para permitir todas las solicitudes (solo para desarrollo)
app.use(cors());

// Ruta para obtener imágenes de Unsplash
app.get('/api/images/:query', async (req, res) => {
    const query = req.params.query;
    try {
        const response = await get(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashAccessKey}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error al hacer la solicitud a la API de Unsplash:', error.message);
        console.error('Status:', error.response.status); // Imprime el estado de la respuesta
        console.error('Data:', error.response.data); // Imprime los datos de la respuesta
        res.status(500).json({ error: 'Error al obtener imágenes de Unsplash' });
    }
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
