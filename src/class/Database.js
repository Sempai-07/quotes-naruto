const fs = require('fs');
const randomNumbers = require("../function/random.js");

class Database {
  constructor(options) {
    this.log = options.log || false,
    this.path = options.path || ["./database"];
    if (this.log === false) {
    } else {
      console.log(this.log);
    }
  }
  
   addQuotes(name, content) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    if (db.has('custom', name) === false) {
    db.set('custom', name, `${content}`);
    } else {
    db.set('custom', name, `${db.get('custom', name)}#new#${content}`);
    }
  }
  
  setQuotes(name, content) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    db.set('custom', name, content);
  }

  deleteQuetes(name) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    db.delete('custom', name);
  }
  
 editNameQuetes(newName, oldName) {
   const { Create } = require('database-sempai');
   const db = new Create({
     path: this.path,
     table: ["custom"]
   });
   db.editName('custom', oldName, newName);
  }
  
  isCustomQuetes(name) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    if (db.has('custom', name)) {
      return true;
    } else {
      return false;
    }
  }
  
  quetesName(name) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    if (db.has('custom', name)) {
      try {
        let content = db.get('custom', name);
        let textSplit = content.split('#new#');
        let getSplit = textSplit.length - 1;
        let random = randomNumbers(0, getSplit);
        return textSplit[random];
      } catch (e) {
        return db.get('custom', name, true).value;
      }
    } else {
      return undefined;
    }
  }
  
  quetesNameContent(name) {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    return db.get('custom', name);
  }
  
  quetesJSON() {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    return db.all('custom');
  }
  
  quetesDeleteAll() {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    db.deleteAll('custom');
  }
  
  ping() {
    const { Create } = require('database-sempai');
    const db = new Create({
      path: this.path,
      table: ["custom"]
    });
    return db.ping();
  }
 
  savedb(name = "copy.json") {
    let content = fs.readFileSync(`${this.path}/custom/storage.json`, 'utf-8');
    fs.writeFileSync(name, content);
  }
}

module.exports = Database;