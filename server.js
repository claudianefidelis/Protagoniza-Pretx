const app = require('./src/app')
const PORT = process.env.PORT || 1313

app.get("/", (req, res) => {
    res.send({ message: "Protagoniza Pretx" });
  });

app.listen(PORT, () => {
    console.log(`Servidor funcionando, porta ${PORT}`)
})

