import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Solo POST permitido");
  }

  try {
    const datosArduino = req.body; // Recibimos JSON de Arduino

    // URL de Sheety para guardar datos
    const SHEETY_URL = "https://api.sheety.co/2dbbde5b4196738220e76aed7ea0ffb2/bioinstru/datos";

    // POST a Sheety
    const response = await fetch(SHEETY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dato: datosArduino })
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error enviando datos a Sheety" });
  }
}
