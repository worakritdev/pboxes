import { Blog } from "$lib/database/dbconnect";


export async function get() {
    return { status: 200, body: await Blog.find() }
}


export async function post(req) {
    return { status: 200, body: await new Blog(JSON.parse(req.body)).save()) }

}