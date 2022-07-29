const app = require('./src/app')
const PORT = process.env.PORT || 1313

app.listen(PORT, () => {
    console.log(`Servidor funcionando, porta ${PORT}`)
})

