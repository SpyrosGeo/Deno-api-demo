import { FILE_PATH } from '../../config.js'

export default async ({ response,params }) => {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    try {
        //fetch data
        const data = await Deno.readFile(FILE_PATH)
        //deno comes with a decoder
        const todos = JSON.parse(decoder.decode(data))

        const updatedTodos = todos.filter(todo=>todo.id!= Number(params.id))
        await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(updatedTodos)))


        response.status = 200;
        response.body = { status: "Success", data:updatedTodos }
    } catch (err) {
        response.status = 502;
        response.body = { status: 'failed to delete todo ', err }
    }
}
