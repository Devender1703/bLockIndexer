import polka from 'polka';
import serverless from 'serverless-http';

const app = polka();

app.post('/webhook', (req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    console.log(JSON.parse(data));
    res.end('Webhook received');
  });
});

app.get('/', (req, res) => {
  res.end('Hello from webhookhandler!');
});


app.listen(3000, err => {
  if (err) throw err;
  console.log('> Running on localhost:3000');
});

export default serverless(app);