const app = require("./src/config");
const { PORT } = require("./src/constants");

app.listen(PORT, () => {
  console.log(`Server lifted successfully at port ${PORT}`);
});
