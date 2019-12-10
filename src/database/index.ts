import { BasicDatabase } from "../interface/database.interface"

const low = window.require('lowdb')
// const path = window.require('path')
const FileSync = window.require('lowdb/adapters/FileSync')
const db = low(new FileSync('db.json'))

/* Basic methods
 * Schema
 * db.defaults({ notes: [] })
 * db.defaults({ posts: [], user: {}, count: 0 }).write()
 * 
 * Set
 * db.set('log', quillValue).write()
 * 
 * Add a post
 * db.get('posts')
 *   .push({ id: 1, title: 'lowdb is awesome' })
 *   .write()
 * 
 * Set a user using Lodash shorthand syntax
 * db.set('user.name', 'typicode').write()
 * 
 * Increment count
 * db.update('count', (n: number) => n + 1).write()
 */
const schema:BasicDatabase = {
    notes:[]
}

const initialDatabase = ()=>{
    db.default(schema)
}


const databaseExecutors = {
    initialDatabase
}

export default databaseExecutors
