import express from 'express';
import { SERVER_PORT } from '../globals/environment';

export default class Server {

    public app:express.Application;
    public port:number;

    constructor(){
        this.port=SERVER_PORT;
        this.app=express();
        // this.app.get('/',(req,res)=>{
        //     res.send('Hello world');
        // });
    }

    start(callback:Function){
        this.app.listen(this.port,callback());
    }


}



 







