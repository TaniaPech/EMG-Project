import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.sheety.co/2dbbde5b4196738220e76aed7ea0ffb2/bioinstru/pacientes");
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
