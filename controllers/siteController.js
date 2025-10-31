const path = require('path');
const fs = require('fs');

const dataPath = path.resolve(process.cwd(), 'data', 'site.json');

exports.getSite = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(raw);
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, errors: [err.message] });
  }
};
