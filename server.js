const express = require('express');
const headerRenderer = require('./Header');
const contentRenderer = require('./Content');
const footerRenderer = require('./Footer');
const pageRenderer = require('./Page');


const app = express();

app.get('/', (req, res) => {
  const header = headerRenderer({ headline: 'Hallo!' });
  const content = contentRenderer({ text: 'lorem impsum' });

  res.send(pageRenderer({ title: 'SSR Demo', body: [header, content] }));
});

app.use('/public', express.static('public'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
