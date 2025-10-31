const path = require('path');
const fs = require('fs');

const contactsPath = path.join(__dirname, '..', 'data', 'contacts.json');
const subsPath = path.join(__dirname, '..', 'data', 'subscribers.json');

function safeReadJson(filePath, defaultVal) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw || 'null') || defaultVal;
  } catch (err) {
    return defaultVal;
  }
}

function safeWriteJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

exports.postContact = (req, res) => {
  const { name, email, phone, message } = req.body || {};
  const errors = [];
  if (!name) errors.push('name is required');
  if (!email) errors.push('email is required');
  if (!message) errors.push('message is required');
  if (errors.length) return res.status(400).json({ success: false, errors });

  const contacts = safeReadJson(contactsPath, []);
  const entry = { id: Date.now(), name, email, phone: phone || null, message, createdAt: new Date().toISOString() };
  contacts.push(entry);
  safeWriteJson(contactsPath, contacts);
  res.json({ success: true, data: { id: entry.id } });
};

exports.postSubscribe = (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ success: false, errors: ['email is required'] });

  const subs = safeReadJson(subsPath, []);
  if (subs.find(s => s.email === email)) {
    return res.json({ success: true, data: { alreadySubscribed: true } });
  }
  const entry = { id: Date.now(), email, createdAt: new Date().toISOString() };
  subs.push(entry);
  safeWriteJson(subsPath, subs);
  res.json({ success: true, data: { id: entry.id } });
};
