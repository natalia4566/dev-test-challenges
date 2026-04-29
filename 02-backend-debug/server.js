<<<<<<< HEAD
=======

>>>>>>> upstream/main
const express = require('express');
const app = express();
app.use(express.json());

<<<<<<< HEAD
// avoid memory issues by limiting how much we store
=======
>>>>>>> upstream/main
const requestLog = [];
const MAX_LOG_SIZE = 100;


async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, value: 'hello' }), 100);
  });
}

<<<<<<< HEAD
// GET /data
app.get('/data', async (req, res, next) => {
  try {
    // keep log size under control
    requestLog.push({ ts: Date.now() });
    if (requestLog.length > MAX_LOG_SIZE) {
      requestLog.shift();
    }

    // wait for the data to be resolved
    const data = await getDataFromDB();

    // return 404 if nothing is found
    if (!data) {
      return res.status(404).json({ error: 'No data found' });
    }

    // send the correct field from the response
    res.status(200).json({ result: data.value });

  } catch (error) {
    next(error);
  }
});

// POST /save
app.post('/save', (req, res, next) => {
  try {
    const { name, value } = req.body;

    // basic validation
    if (!name || !value) {
      return res.status(400).json({ error: 'name and value are required' });
    }
=======
app.get('/data', async (req, res) => {
  requestLog.push({ ts: Date.now() });   

  const data = getDataFromDB();          

  if (!data) {
    res.status(200).json({ error: 'No data found' });  
    return;
  }

  res.json({ result: data.result });     
});

app.post('/save', (req, res) => {
  const { name, value } = req.body;
 
  requestLog.push({ name, value, ts: Date.now() });  
>>>>>>> upstream/main

    if (typeof name !== 'string' || typeof value !== 'string') {
      return res.status(400).json({ error: 'Invalid input types' });
    }

    // log request but keep it limited
    requestLog.push({ name, value, ts: Date.now() });
    if (requestLog.length > MAX_LOG_SIZE) {
      requestLog.shift();
    }

    // return correct status for creation
    res.status(201).json({ saved: true, name, value });

  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
// handle unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

=======
>>>>>>> upstream/main
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

module.exports = app;
