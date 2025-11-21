import fetch from "node-fetch";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7AfORw6xkk54QBA5BBU_jeeO3rYoemSWstmVEG_OBQBFuLSZt7RKGZxHd78zTENxV/exec";

export default async function handler(req, res) {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=obtenerPacientes`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo pacientes" });
  }
}
