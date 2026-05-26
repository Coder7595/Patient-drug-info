export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.ANTHROPIC_API_KEY;

  // Temporary debug — shows first 10 and last 4 chars of key
  const keyPreview = key
    ? `${key.slice(0, 10)}...${key.slice(-4)} (length: ${key.length})`
    : 'MISSING';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();

    // Attach key preview to response for debugging
    return res.status(response.status).json({ ...data, _keyPreview: keyPreview });

  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong', detail: err.message, _keyPreview: keyPreview });
  }
}
