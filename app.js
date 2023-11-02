import express from 'express'
const app = express()
const port = 3005
import router from './router.js'
import cors from 'cors'


app.use(cors());

app.use(router);

app.use(express.json());

// Configure o cabeçalho "Access-Control-Allow-Origin" para permitir qualquer origem (não recomendado para produção)
/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // O asterisco permite qualquer origem; substitua por origens específicas em produção
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
