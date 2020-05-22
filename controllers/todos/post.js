import { FILE_PATH } from '../../config.js'

export default async ({ response,request }) => {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    try {
      const{value:{title}} =await request.body()
        
      console.log(title)
    } catch (err) {

    }
}
