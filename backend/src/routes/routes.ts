const express = require("express");
const swagger = require("./swagger");

const app = express();

app.use("/docs", swagger.serve, swagger.setup);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
