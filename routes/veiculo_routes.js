import express from "express"

import { veiculo } from "../controller/veiculo_controller.js"


let router = express.Router();

router.get('/veiculo', veiculo.all)
router.post('/veiculo', veiculo.create)
router.put('/veiculo/:id_veiculo', veiculo.update)
router.delete('/veiculo/:id_veiculo', veiculo.delete)
router.get('/veiculo/:modelo_veiculo', veiculo.modelo)


export {router}