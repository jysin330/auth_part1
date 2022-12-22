const app = require("./app")
const { PORT } = process.env
// process.env.PORT
app.listen(PORT, () => "server is runnig at 4000")