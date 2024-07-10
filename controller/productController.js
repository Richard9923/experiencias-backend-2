const { get } = require("mongoose");
const Produto = require("../model/product.model");


const getProducts = async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createProduct = async(req,res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findById(id);
        if (!produto) {
            res.status(404).json({message: "Produto não encontrado."})
        }
        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findByIdAndUpdate(id, req.body);
        if(!produto) {
            req.status(404).json({message: "Produto não encontrado"});
        }
        res.status(200).json(produto);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const produto = await Produto.findByIdAndDelete(id);
        if(!produto) {
            req.status(404).json({message: "Produto não encontrado"});
        }
        res.status(200).json({message: "Produto deletado"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}




module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}