import dbKnex from '../database/db_config.js'

export const buscaClientes = async (req,res) =>{
try{

    const clientes = await dbKnex('cliente').select('*');
    res.status(200).json(clientes)

}catch(error){
    res.status(500).json({message: error.message})
}
}

export const criaCliente = async (req,res) =>{

    const {nome , idade } = req.body

    if(!nome || !idade){
        res.status(400).json({ message: 'Tcheeee coloca tudo que eu to mandando, pq eu to mandando!!!'})
    }

try{
    const cliente = await 
    dbKnex('cliente')
    .insert({nome,idade})
    res
    .status(201)
    .json(cliente)
}catch(error){
    res.status(500).json({ message: error.message })
}
}