const fs = require('fs');
const randomNumbers = require("../function/random.js");

class Database {
  constructor(options) {
    this.log = options.log || false,
    this.path = options.path || ["./database"];
    if (options.log === false) {
    } else {
    console.log(options.log)
    }
  }
  
  addQuotes(name, content) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main", {
    path: this.path,
    //encryption: "key here"
    })
      db.set(name, `${db.get(name).value}#new#${content}`);
  }
  
   setQuotes(name, content) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main", {
    path: this.path,
    //encryption: "key here"
    })
      db.set(name, content);
  }

  deleteQuetes(name) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
      db.delete(name);
  }

  editContentQuetes(name, newContent) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
      db.set(name, newContent);
  }
  
 editNameQuetes(newName, oldName) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
      db.set(newName, db.get(oldName).value);
      db.delete(oldName);
  }
  
  isCustomQuetes(name) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
    if (db.has(name)) {
      return true;
    } else {
      return false;
    }
  }
  
  quetesName(name) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
    if (db.has(name)) {
      try {
        let textSplit = (db.get(name).value).split('#new#');
        let getSplit = textSplit.length;
        let random = randomNumbers(1, getSplit);
        return textSplit[random];
      } catch (e) {
        return db.get(name).value;
      }
    } else {
      return undefined;
    }
  }
  
  quetesNameContent(name) {
    const Db = require('json-db-easier')
    const db = new Db.Create("main",{
    path: this.path,
    //encryption: "key here"
    })
      return db.get(name).value;
  }
 
  savedb(name = "copy.json") {
    let content = fs.readFileSync(`${this.path}/main/db.json`, 'utf-8');
    fs.writeFileSync(name, content);
  }
}

module.exports = Database;