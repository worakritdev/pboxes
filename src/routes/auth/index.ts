import { dbconnect } from "$lib/database/dbconnect";


export async function post(req) {
    const { username, password } = JSON.parse(req.body);
    const db = await dbconnect();
    
}