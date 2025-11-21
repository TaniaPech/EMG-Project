import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // Sheety espera JSON con la estructura { "dato": {...} }
    const response = await fetch("https://api.sheety.co/2dbbde5b4196738220e76aed7ea0ffb2/bioinstru/datos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dato: req.body })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
