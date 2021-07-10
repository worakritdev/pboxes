import pkg from "mongoose";

const { connect } = pkg
import BlogModel from "$lib/models/Blog.Model";


export const dbconnect = async () => {

    const db = await connect('mongodb://localhost:27017/boxes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    return db
}
export const Blog = BlogModel
