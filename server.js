const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// When deployed on Vercel the route rewrite for "/api/(.*)" will strip the
// `/api` prefix before invoking the serverless function. Detect the Vercel
// environment and mount the router at root there; keep the `/api` prefix for
// local development so existing local requests continue to work.
if (process.env.VERCEL) {
  app.use('/', apiRouter);
} else {
  app.use('/api', apiRouter);
}

app.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, errors: [err.message || 'Server error'] });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
  });
}

// Export the app so serverless platforms (Vercel) can mount it.
module.exports = app;
