const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api', apiRouter);

// Serve frontend
const frontendPath = path.resolve(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(frontendPath, 'index.html'));
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
