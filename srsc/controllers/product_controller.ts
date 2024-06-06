import { Request, Response} from 'express';
import Product from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const listProducts = await Product.findAll();
        res.json(listProducts);
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los productos',
            error
        });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (product) {
            res.json(product);
        } else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (product) {
            await product.destroy();
            res.json({
                msg: 'El producto fue eliminado con exito'
            })
        } else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }    
}

export const postProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        await Product.create(body);
        res.json({
            msg: 'El producto fue agregado con exito'
        })  
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
    
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue actualizado con exito'
            });
        } else {
            res.status(400).json({
                msg: `No existe el producto con el id ${id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el producto',
            error
        });
    }
    
}
