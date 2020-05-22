import { FILE_PATH } from '../../config.js'

export default async ({ response,request }) => {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    try {
      const{value:{title}} =await request.body()
        const data = await Deno.readFile(FILE_PATH)
        //deno comes with a decoder
        const todos = JSON.parse(decoder.decode(data))

        const newTodo = {id:todos.length+1,title,completed:false}
        todos.push(newTodo)
        
        await Deno.writeFile(FILE_PATH,encoder.encode(JSON.stringify(todos)))
        response.status = 201;
        response.body = {status:"Success",newTodo}
    } catch (err) {
        response.status =502;
        response.body = {status:'failed to create a new todo ',err}
    }
}
