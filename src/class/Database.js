const fs = require('fs');
const randomNumbers = require("../function/random.js");

class Database {
  constructor(options) {
    this.log = options.log || false,
    this.path = options.path || ["./database"];
  }
  
   addQuotes(name, content) {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
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
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    db.set('custom', name, content);
  }

  deleteQuetes(name) {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    db.delete('custom', name);
  }
  
  isCustomQuetes(name) {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
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
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
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
        return db.get('custom', name);
      }
    } else {
      return undefined;
    }
  }
  
  quetesNameContent(name) {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    return db.get('custom', name);
  }
  
  quetesJSON() {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    return db.all('custom');
  }
  
  quetesDeleteAll() {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    db.deleteAll('custom');
  }
  
  ping() {
    const { CreateSql } = require('database-sempai');
    const db = new CreateSql({
      path: this.path,
      table: ["custom"]
    });
    return db.ping();
  }
}

module.exports = Database;