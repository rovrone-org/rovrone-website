const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', apiRouter);

// Serve frontend
const frontendPath = path.resolve(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.resolve(frontendPath, 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  } else {
    next();
  }
});

app.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, errors: [err.message || 'Server error'] });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
