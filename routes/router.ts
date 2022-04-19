import { Router, Request,Response } from "express";

export const router = Router();


router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje:'Todo esta bien'
    });
});

var result=router.post('/mensajes/:id',(req:Request,res:Response)=>{
    const data=req.body.data;
    const de=req.body.de;
    const id=req.params.id;
    
    res.json({
        ok:true,
        data,
        de,
        id
    });
  
});


export default router;