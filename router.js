import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router.get('/',(res)=>{
    res.body ='Todo List API using Deno Runtime'
})


export default router;