import fetch from "node-fetch";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7AfORw6xkk54QBA5BBU_jeeO3rYoemSWstmVEG_OBQBFuLSZxHd78zTENxV/exec";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // para CORS
  const { id, nombre, rms, vmax } = req.query;
  try {
    const url = `${GOOGLE_SCRIPT_URL}?action=guardarSesion&id=${id}&nombre=${nombre}&rms=${rms}&vmax=${vmax}`;
    const response = await fetch(url);
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Error guardando sesión");
  }
}
