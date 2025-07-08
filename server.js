const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { username: 'admin', password: 'password' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.json({ message: 'Login successful' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
