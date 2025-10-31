const path = require('path');
const fs = require('fs');

const dataPath = path.resolve(process.cwd(), 'data', 'products.json');

function readProducts() {
  const raw = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(raw || '[]');
}

exports.getProducts = (req, res) => {
  try {
    const data = readProducts();
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, errors: [err.message] });
  }
};

exports.getProduct = (req, res) => {
  try {
    const id = req.params.id;
    const data = readProducts();
    const item = data.find((p) => p.id === id);
    if (!item) return res.status(404).json({ success: false, errors: ['product not found'] });
    res.json({ success: true, data: item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, errors: [err.message] });
  }
};
