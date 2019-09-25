const express = require('express');
const { config } = require('dotenv');
const { log } = require('debug');
const path = require('path');
const cors = require('cors');

config();
const app = express();
const port = process.env.PORT || 7000;
const staticFolder = path.join(__dirname, '../', 'root')

app.use(cors());
app.use(express.static(staticFolder));


app.get('*', (req, res) => {
  res.sendFile(path.join(staticFolder, 'index.html'));
})

app.listen(port, () => {
  log('Server running on port', port);
})
