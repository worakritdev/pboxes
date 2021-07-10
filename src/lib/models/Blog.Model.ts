import mongoose from 'mongoose';
const { Schema } = mongoose;
const db = mongoose.createConnection('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});


const Blog = db.model('Blog', blogSchema)
export default Blog