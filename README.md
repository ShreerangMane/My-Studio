# 09 Studio AI Chat - Backend

## Deployment Instructions

### 1. This backend is designed for Vercel serverless functions

### 2. Required Environment Variable

You MUST add this environment variable in Vercel:

**Variable Name:** `ANTHROPIC_API_KEY`
**Variable Value:** Your Anthropic API key (starts with sk-ant-...)

### How to Add Environment Variable in Vercel:

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Name: `ANTHROPIC_API_KEY`
5. Value: Paste your API key from console.anthropic.com
6. Select all three environments (Production, Preview, Development)
7. Click **Save**
8. Go to **Deployments** tab → Click three dots → **Redeploy**

### 3. Test Your Deployment

After deployment, test these endpoints:

- Health check: `https://your-project.vercel.app/api/health`
- Chat endpoint: `https://your-project.vercel.app/api/chat` (POST request)

### 4. File Structure

```
backend-vercel/
├── api/
│   ├── chat.js      (Main chat endpoint)
│   └── health.js    (Health check endpoint)
├── package.json     (Dependencies)
├── vercel.json      (Vercel configuration)
└── README.md        (This file)
```

### 5. API Endpoints

**GET /api/health**
Returns: `{"status":"Server is running","timestamp":"..."}`

**POST /api/chat**
Request body:
```json
{
  "message": "Your question here",
  "conversationHistory": []
}
```

Response:
```json
{
  "success": true,
  "message": "AI response here",
  "conversationHistory": [...]
}
```

---

## Need Help?

If you see a 404 error, make sure:
- Your project is deployed from the root directory (not a subfolder)
- You've added the ANTHROPIC_API_KEY environment variable
- You've redeployed after adding the environment variable
