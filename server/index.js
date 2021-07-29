const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./routes/router');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});