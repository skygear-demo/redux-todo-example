import skygear from 'skygear';
const Todo = skygear.Record.extend('todo');

export default {
  getItems: (cb) => {
    const query = new skygear.Query(Todo);
    skygear.publicDB.query(query).then((todos) => {
      cb(todos);
    }, (error) => {
      console.error(error);
    });
  },
  saveItem: (text, cb) => {
    skygear.publicDB.save(new Todo({
      'text': text,
      'completed': false
    })).then((record) => {
      console.log(record);
      cb(record);
    }, (error) => {
      console.error(error);
    });
  },
  signupAnonymously: (cb) => {
    skygear.auth.signupAnonymously().then((user)=>{
      console.log('logged in');
      cb(user);
    });
  },
  config: (cb) => {
    skygear.config({
      'endPoint': 'https://testapi20180109.skygeario.com/',
      'apiKey': '4bb9cb48bab7439c97f6d033204841fc',
    }).then(() => {
      console.log('skygear container is now ready for making API calls.');
      cb(skygear);
    }, (error) => {
      console.error(error);
    });
  }
}