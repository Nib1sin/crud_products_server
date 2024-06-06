"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listProducts = yield product_1.default.findAll();
        res.json(listProducts);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los productos',
            error
        });
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.default.findByPk(id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.destroy();
            res.json({
                msg: 'El producto fue eliminado con exito'
            });
        }
        else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        yield product_1.default.create(body);
        res.json({
            msg: 'El producto fue agregado con exito'
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito'
            });
        }
        else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
});
exports.updateProduct = updateProduct;
