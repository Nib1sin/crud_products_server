import express, {Application, Request, Response} from 'express';
import routeProduct from '../routes/product_route';
import db from '../db/connection';

class Server {
    //private app: express.Application;
    private app: Application;
    private port: string;

    constructor(){
        //console.log('Port : ${process.env.PORT}')
        this.app    = express();
        this.port   = process.env.PORT || '3001'; 
        this.listen();
        this.midlewares(); //Colocarlo siempre antes de los routes
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res:Response) => {
            res.json({
                msg: 'Api funcionando'
            })
        })

        this.app.use('/api/products', routeProduct)
    }

    midlewares(){
        //Parseamos el body
        this.app.use(express.json());
    }


    async dbConnect(){

        try {
            db.authenticate
            console.log('Base de Datos conectada')
        } catch (e) {
            console.log(e)
            console.log('Error al conectarse al DB')
        }
    }
}

export default Server;