import { IncomingMessage, ServerResponse } from "http";
import  DB  from "@database";

const allAvos = async(request:IncomingMessage,response:ServerResponse) => {
    const db = new DB()

    const entry = await db.getAll()
    response.statusCode =200
    response.setHeader('Content-type','application/json')
    response.end(JSON.stringify({data:entry}))

 }
 export default allAvos