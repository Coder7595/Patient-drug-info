# Drug Reaction Checker

A plain-language medication causality assessment tool powered by Claude AI, based on the WHO-UMC scale.

## Repo structure

```
/
├── index.html        ← the full frontend
├── api/
│   └── chat.js       ← Vercel serverless function (proxies Anthropic API)
├── vercel.json       ← Vercel routing config
└── README.md
```

## Deploy to Vercel (free)

### 1. Push to GitHub
Make sure your repo has all four files above.

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com) and sign in with GitHub
- Click **Add New Project**
- Select your repo and click **Deploy**

### 3. Add your API key
- In Vercel, go to your project → **Settings → Environment Variables**
- Add a new variable:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** your Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))
- Click **Save**
- Go to **Deployments** and click **Redeploy** to apply the key

### 4. Update index.html
In `index.html`, replace every instance of:
```
https://api.anthropic.com/v1/messages
```
with:
```
/api/chat
```
There are two fetch calls — one for the urgency check and one for the full assessment. Update both.

### 5. Done
Your app is live at `yourproject.vercel.app` 🎉

## Local development

```bash
npm i -g vercel
vercel dev
```

Set your API key in a `.env.local` file:
```
ANTHROPIC_API_KEY=your-key-here
```

## Notes
- Never commit your API key to the repo
- The `.env.local` file is for local dev only — Vercel uses environment variables set in the dashboard
