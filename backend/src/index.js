import express, { json } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())

// Conexão com o banco de dados
import connection from '../db/conn.js'
connection();

const port = 3000

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a API ML Painel' })
})

// Routes
import routes from '../routes/router.js'
app.use('/api', routes);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})      

