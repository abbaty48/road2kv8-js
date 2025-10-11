const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 3000

app.get('/', (_req, res) => {
  res.send("<h1>Hello Express World!</h1>")
});

app.get('/api/v2/rocket-man', (_req, res) => {
  res.json(JSON.stringify({ who: "rocker man", where: "mars" }));
});

app.listen(port, () => {
  const appPID = path.join(__dirname, 'app.pid');
  fs.writeFileSync(appPID, `${process.pid}`);
  console.log('Server running on port http://0.0.0.0:' + port)
});
