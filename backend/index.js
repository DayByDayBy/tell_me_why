const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
  
//  please note filename refledcts model being 70B, which it was not initially
//  this will need/want changed back if model is changed back

app.post('/save-responses', (req, res) => {
  const { responses } = req.body;
  const formattedDateTime = new Date().toISOString().replace(/:/g, '');
  const filePath = path.join(__dirname, `70B_output_${formattedDateTime}.txt`);

  fs.writeFile(filePath, responses.join('\n'), (err) => {
    if (err) {
      console.error('An error occurred while writing to file:', err);
      res.status(500).send('Error saving responses');
    } else {
      console.log('Output written to file successfully!');
      res.status(200).send('Responses saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

