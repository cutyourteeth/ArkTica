/*
 * lowdb-manager
 * description: a lowdb method wrapper for building local database
 *
 *
 * Schema
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
import moment from 'moment'
import { BasicDatabase, BasicRequire, BasicUnit, Type } from '../interface/database.interface'

// const path = window.require('path')
const low = window.require('lowdb')
const FileSync = window.require('lowdb/adapters/FileSync')
const db = low(new FileSync('db.json'))

const initSchema: BasicDatabase = {
  __root__: { id: { diaries: 0, notes: 0 } },
  notes: [],
  diaries: [],
  setting: { direct: false }
}

/* basic function */
const find = (type: Type, key: { [key: string]: any }) => {
  const result = db.get(type).find(key)
  console.log('found',result)
  return result
}

const idAutoIncrement = (type: Type) => {
  const route = `__root__.id.${type}`
  db.update(route, (n: number) => n + 1).write()
}

/* executors */

const initial = () => db.defaults(initSchema).write()

const insert = (payload: BasicUnit) => {
  const { type, data } = payload
  let id = db.get('__root__.id').value()[type]

  const current = moment().format('YYYY-MM-DD HH:mm:ss')
  const finalData = { id, createDate: current, updateDate: current, ...data }

  db.get(type)
    .push(finalData)
    .write()

  idAutoIncrement(type)
}

const update = (payload: BasicUnit) => {
  const { type, data } = payload
  find(type, data).assign(data)
}

const remove = (payload: BasicUnit) => {
  const { type, data } = payload
  find(type, data).assign(data)

  db.get(type)
    .remove(data)
    .write()
}

const load = (type:Type) => {
  return db.get(type).value()
}

const filter = (require: BasicRequire) => {}

const databaseExecutors = {
  initial,
  load,
  insert,
  filter,
  update,
  remove
}

export default databaseExecutors
