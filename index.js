const express = require('express');
const app = express();

const PORT = "3000";

app.set('json spaces', 4);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/6x.html');

});

app.listen(PORT, () => {
  console.log(`server started running one port ${PORT}`);
});