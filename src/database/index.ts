import { BasicDatabase, BasicUnit, Type } from '../interface/database.interface'

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
 *
 * Update
 * db.get('posts')
 *  .find({ title: 'low!' })
 *  .assign({ title: 'hi!'})
 *  .write()
 */

const schema: BasicDatabase = {
  notes: [],
  diaries: [],
  setting: { direct: false }
}

const initial = () => db.defaults(schema)

const insert = (payload: BasicUnit) => {
  const { type, data } = payload
  db.get[type].push(data).write()
}

const find = (type: Type, key: { [key: string]: any }) => {
  const result = db.get(type).find(key)
  return result
}

const update = (payload: BasicUnit) => {
  const { type, data } = payload
  find(type, data).assign(data)
}

const remove = (payload: BasicUnit) => {
  const { type, data } = payload
  db.get(type)
    .remove(data)
    .write()
}

// 对比本地和云端某对数据解包对比
const compare = () => {}

const databaseExecutors = {
  initial,
  insert,
  update,
  remove
}

export default databaseExecutors
