const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router');

const port = 5000; // Replace with your desired port

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
