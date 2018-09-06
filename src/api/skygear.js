import skygear from 'skygear'

const config = require('../config.json')

const Todo = skygear.Record.extend('todo')

const api = {
  getItems: () => skygear.publicDB.query(new skygear.Query(Todo)),
  saveItem: text =>
    skygear.publicDB.save(
      new Todo({
        text,
        completed: false
      })
    )
}

export default skygear
  .config(config.skygear)
  .then(() => skygear.auth.signupAnonymously())
  .then(() => api)
