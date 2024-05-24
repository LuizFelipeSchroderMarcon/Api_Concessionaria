import e from "express";
import connect from "../config/connection.js";

let veiculo = {}
const con = await connect();

veiculo.all = async function(req, res){
    try {
        let veiculos = await con.query("SELECT * FROM VEICULO;");
        res.send(veiculos[0]);
    } catch (e) {
        console.log("Erro na consulta", e);
    }
}

veiculo.modelo = async function(req, res){
    try {
        let modelo = req.params.modelo_veiculo
        //console.log(modelo)
        let sql = "SELECT * FROM VEICULO WHERE modelo_veiculo LIKE ?"
        let result = await con.query(sql, [modelo])
        res.send({
            result: result
        })
    } catch (e) {
        console.log("Erro.....", e)
    }
}

veiculo.create = async function(req, res){
    try {
        let veiculo = req.body
        //console.log(veiculo)
        let sql = "INSERT INTO veiculo (placa_veiculo, modelo_veiculo, preco) VALUES (?,?,?);";
        let values = [veiculo.placa_veiculo, veiculo.modelo_veiculo, veiculo.preco];
        let result = await con.query(sql, values);
        res.send({
            status: "Inserção Efetuada Com Sucesso",
            result: result 
        })
    } catch (e) {
        console.log("Erro..........", e);
    }
}

veiculo.update = async function(req, res){
    try {
        let id = req.params.id_veiculo
        let veiculo = req.body
        let sql = "UPDATE veiculo SET placa_veiculo=?, modelo_veiculo=?, preco=? WHERE id_veiculo=?;"
        let values = [veiculo.placa_veiculo, veiculo.modelo_veiculo, veiculo.preco, id]
        let result = await con.query(sql,values)
        res.send({
            status: "Atualização Efetuada",
            result: result
        })
    } catch (e) {
        console.log("Erro............", e)
    }
}

veiculo.delete = async function(req,res){
    try {
        let id = req.params.id_veiculo
        let sql = "DELETE FROM veiculo WHERE id_veiculo=?;"
        let result = await con.query(sql,[id])
        res.send({
            status: "A exclusao foi efetuada",
            result: result
        })
    } catch (e) {
        console.log("Erro.......", e)
    }
}

export {veiculo}