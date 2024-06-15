const express = require('express');
const app = express();

// app.get('/', (req, res) => {
// 	return res.json({ message: 'hi' });
// });

app.use(express.static('build'))

app.listen(3000, () => console.log('listening on 3000'));

