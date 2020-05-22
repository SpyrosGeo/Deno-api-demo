import { Router } from 'https://deno.land/x/oak/mod.ts'

import getTodos from './controllers/todos/get.js'
import postTodo from './controllers/todos/post.js';
import deleteTodo from './controllers/todos/delete.js';
const router = new Router();
//cant name it anything else it must be response because the structure is context.response.body
router.get('/', ({ response }) => {
    response.body = "Todo API with Deno runtime"
})

router.get('/todos',getTodos)

router.post('/todos',postTodo)
router.delete('/todos/:id',deleteTodo)


export default router;