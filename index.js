import { Application,Router } from 'https://deno.land/x/oak/mod.ts'
// express alternative for deno
import {PORT} from './config.js'
import router from './router.js';



const app = new Application();
app.use(router.routes());
//  we must expilicly allow in deno 
app.use(router.allowedMethods())

console.log(`server is running  at http://localhost:${PORT}`);

await app.listen({port:PORT});
