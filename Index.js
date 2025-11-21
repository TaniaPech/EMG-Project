import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7AfORw6xkk54QBA5BBU_jeeO3rYoemSWstmVEG_OBQBFuLSZt7RKGZxHd78zTENxV/exec?action=obtenerPacientes";

app.get("/obtenerPacientes", async (req, res) => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=obtenerPacientes`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo pacientes" });
  }
});

app.get("/guardarSesion", async (req, res) => {
  const { id, nombre, rms, vmax } = req.query;
  try {
    const url = `${GOOGLE_SCRIPT_URL}?action=guardarSesion&id=${id}&nombre=${nombre}&rms=${rms}&vmax=${vmax}`;
    const response = await fetch(url);
    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("Error guardando sesión");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo");
});
