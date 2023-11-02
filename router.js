import { Router,json } from 'express'
import { buscaClientes, criaCliente } from './controllers/clienteController.js';

const router = Router();
router.use(json())

router.get('/cliente',buscaClientes)
router.post('/cliente',criaCliente)

export default router;
