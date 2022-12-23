<h1 align="center">quotes-naruto</h1>
Эта новый пакет в котром собрание все цитаты персонажей Наруто на русском/английском языке (на данный момент не все). Также цитаты брались с данного сайта: <a href=" https://citaty.info">Citaty.info</a>. Информация о изменении в <a href="https://github.com/Sempai-07/quotes-naruto">quotes-naruto@0.0.11<a/>

### Установка
```js
$ npm install quotes-naruto@0.0.11
$ npm install database-sempai@1.0.0
```

### Пример с обычными функциями
```js
const quotesNaruto = require('quotes-naruto');

let text = quotesNaruto.queotesCharacterName('itachi', 'ru');
console.log(`Итачи: ${text}`);
```
### Подключения бази данных
```js
const { Database } = require('quotes-naruto')

const db = new Database({
  log: "База данных подключена", // будет показывать в консоле сообщения о подключении/создани базы данных
  path: "./database" // название папки
})

db.setQuotes("sempai", "Люди")
db.editNameQuetes("name", "sempai")
console.log(db.quetesNameContent("name"))

db.addQuotes("name", "Хз")
console.log(db.quetesNameContent("name"))
// Люди#new#Хз
db.savedb("./index.json")
// Создать копию базы данных
```
Если вы не подключите дб, функции которые связаны с кастом цитатами не будут работать.

#### queotesAll()
```js
queotesAll('language?')
```
- `language` - язык `en/ru`
Выдаст рандомную цитату без автора
#### queotesNameAll()
```js
queotesNameAll('type?', 'separator?', 'language?')
```
Выдаст рандомную цитату вместе с автором
- `type` - left - автор цитаты будет в конце. right - автор цитаты будет в самом начале
- `separator` - разделить, точнее то что будет отделать цитату та автора
- `language` - язык `en/ru`
#### queotesCharacterName()
```js
queotesCharacterName('name', 'language?')
```
- `name` - название персонажа
- `language` - язык `en/ru`
Выдаст рандомную цитату заданного персонаж. Замена старых функций
#### queotesJSON()
```js
queotesJSON('name', 'type?', 'language?')
```
- `name` - название персонажа
- `type` - `queotes/info/all`
- `language` - язык `en/ru`
Выдаст цитаты (не только) в формате json
#### character()
```js
character('name', 'type?', 'language?')
```
- `name` - название персонажа
- `type` - тип: `description` - описание, `clan` - клан в котором состоит, `status` - статус: мёртв/жив/жива, `date` - дата рождения, `growth` - рост, `weight` - кг, `element` - элемент, `rank` - ранг, `family` - семья
- `language` - язык `en/ru`
Выдаст заданную информацию о персонаже
#### isPackageCharacter()
```
isPackageCharacter('name')
```
- `name` - название персонажа
Выдаст `true` - если указанный персонаж есть в пакете, `false` - если нет
#### packageCharacter()
```
packageCharacter('separator?')
```
- `separator` - разделитель
Выдаст всех доступных персонажей в пакете
#### isPackageType()
```
isPackageType('name')
``` 
- `name` - название типа
Выдаст `true` - если указанный тип есть, `false` - если нет 
#### packageType()
```js
packageType('separator?')
```
- `separator` - разделитель
Выдаст доступные типи `character`
#### randomNames()
```
randomNames('type?')
``` 
- `type` -  тип: `weapon` - техники, `jinchuriki` - джинчурики, `character` - персонаж
Выдаст рандомное название персонажей, оружий, техник
#### randomNarutoFact
```js
randomNarutoFact('language')
```
- `language` - язык `en/ru`
Выдаст рандомный факт о аниме Наруто
#### addQuotes()
```js
db.addQuotes('name', 'content')
```
Создаёт новую переменную в которой будет находиться ваша цитата или же фраза, также если уже была создана переменная эта функция просто додаст новое содержимое
- `name` - название вашей переменной
- `content` - содержимое переменной
- `#new#` - спомощу этого символа вы можете разделить содержимое в переменной на части
```js
db.addQuotes('sempai', 'Люди просто зло#new#Люди это добро#new#Собака лудший друг человека')

console.log(db.quetesName('sempai'))
// Выдаст рандомную цитату/фразу которою вы написали ранние или же додаст 
```
#### setQuotes()
```js
db.setQuotes('name', 'new content')
```
Полностью изменит содержимое переменной
#### editNameQuetes()
```js
db.editNameQuetes('newName', 'oldName')
```
Меняет название переменной. Если вы изменили название переменной, данные которые были вписаны в старую не пропадут они просто будут под новым названием...
- `newName` - новое название переменной
- `oldName` - старое название переменной
#### quetesJSON()
```js
db.quetesJSON()
```
Выдаст все переменные и их содержимое в формате json
#### quetesName()
```js
db.quetesName('name')
```
Покажет рандомную фразу, если вы использували разделитель, а если нет покажет просто содержимое без рандома
- `name` - название переменной
#### quetesNameContent()
```js
db.quetesNameContent('name')
```
Покажет Всё содержимое которое находится в переменной
#### isCustomQuetes()
```js
db.isCustomQuetes('name')
```
- `name` - название переменнои,
Вернёт `true` - если переменная существует, `false` - если переменная не существует
#### savedb()
```js
savedb('path')
```
- `path` - название файла/путь
Создаёт резервную копию базу данных
#### quetesDelete()
```js
db.quetesDelete('name')
```
Удалит переменною
- `name` - название переменной которою хотите удалить
#### quetesDeleteAll()
```js
quetesDeleteAll()
```
Удалит все переменные
#### ping()
```js
ping()
```
Покажет задержку в ms
<h1 align="center">quotes-naruto</h1>
 This new pack contains all Naruto character quotes in Russian/English (not all at the moment).  Also quotes were taken from this site: <a href=" https://citaty.info">Citaty.info</a>.  Change info in <a href="https://github.com/Sempai-07/quotes-naruto">quotes-naruto@0.0.11</a>

 ### Installation
 ```js
 $ npm install quotes-naruto@0.0.11
 $ npm install database-sempai@1.0.0
 ```

 ### Example with normal functions
 ```js
 const quotesNaruto = require('quotes-naruto');

 let text = quotesNaruto.queotesCharacterName('itachi', 'en');
 console.log(`Itachi: ${text}`);
 ```
 ### Database connections
 ```js
 const { Database } = require('quotes-naruto')

 const db = new Database({
   log: "Database is connected", // will show messages about database connection/creation in the console
   path: "./database" // folder name
 })

 db.setQuotes("sempai", "People")
 db.editNameQuetes("name", "sempai")
console.log(db.quetesNameContent("name"))
 // otherwise undefined

 db.addQuotes("name", "Xs")
 console.log(db.quetesNameContent("name"))
 // People#new#Xs
 db.savedb("./index.json")
 // Create a copy of the database
 ```
 If you don't include a db, the functions that are related to custom quotes won't work.

 #### queotesAll()
 ```js
 queriesAll('language?')
 ```
 - `language` - language `en/ru`
 Gives a random quote without an author
 #### queuesNameAll()
 ```js
 queotesNameAll('type?', 'separator?', 'language?')
 ```
 Will issue a random quote along with the author
 - `type` - left - the quote author will be at the end.  right - the author of the quote will be at the very beginning
 - `separator` - separate, or rather what will be used to separate the author's quote
 - `language` - language `en/ru`
 #### queotesCharacterName()
 ```js
 queotesCharacterName('name', 'language?')
 ```
 - `name` - character name
 - `language` - language `en/ru`
 Gives a random quote for the given character.  Replacing old functions
 #### queotesJSON()
 ```js
 queotesJSON('name', 'type?', 'language?')
 ```
 - `name` - character name
 - `type` - `queotes/info/all`
 - `language` - language `en/ru`
 Gives quotes (not only) in json format
 #### character()
 ```js
 character('name', 'type?', 'language?')
 ```
 - `name` - character name
 - `type` - type: `description` - description, `clan` - clan, `status` - status: dead/alive/alive, `date` - date of birth, `growth` - height, `weight`  - kg, `element` - element, `rank` - rank, `family` - family
 - `language` - language `en/ru`
 Will give the given information about the character
 #### isPackageCharacter()
 ```
 isPackageCharacter('name')
 ```
 - `name` - character name
 Returns `true` if the specified character is in the package, `false` if not
 #### packageCharacter()
 ```
 packageCharacter('separator?')
 ```
 - `separator` - separator
 Will return all available characters in the pack
 #### isPackageType()
 ```
 isPackageType('name')
 ```
 - `name` - type name
 Returns `true` if the specified type exists, `false` if not
 #### packageType()
 ```js
 packageType('separator?')
 ```
 - `separator` - separator
 Returns available `character` types
 #### randomNames()
 ```
 randomNames('type?')
 ```
 - `type` - type: `weapon` - techniques, `jinchuriki` - jinchuriki, `character` - character
 Will give a random name of characters, weapons, technicians
 #### randomNarutoFact
 ```js
 randomNarutoFact('language')
 ```
 - `language` - language `en/ru`
 Gives a random fact about Naruto anime
 #### addQuotes()
 ```js
 db.addQuotes('name', 'content')
 ```
 Creates a new variable in which your quote or phrase will be located, also if a variable has already been created, this function will simply add new content
 - `name` is the name of your variable
 - `content` - variable content
 - `#new#` - using this symbol you can split the content in a variable into parts
 ```js
 db.addQuotes('sempai', 'People are evil#new#People are good#new#A dog is man's best friend')

 console.log(db.quetesName('sempai'))
 // Will give a random quote/phrase that you wrote earlier or add
 ```
 #### setQuotes()
 ```js
 db.setQuotes('name', 'new content')
 ```
 Will completely change the contents of the variable
 #### editNameQuets()
 ```js
 db.editNameQuetes('newName', 'oldName')
 ```
 Changes the name of a variable.  If you change the name of the variable, the data that was entered into the old one will not be lost, they will simply be under the new name...
 - `newName` - new variable name
 - `oldName` - old variable name
#### quetesJSON()
```js
db.quetesJSON()
```
Will return all variables and their content in json format
 #### quetesName()
 ```js
 db.quetesName('name')
 ```
 Will show a random phrase if you used a separator, and if not, it will show just the content without a random one
 - `name` - variable name
 #### quetesNameContent()
 ```js
 db.quetesNameContent('name')
 ```
 Shows all the content that is in the variable
 #### isCustomQuets()
 ```js
 db.isCustomQuetes('name')
 ```
 - `name` - variable name,
 Returns `true` if the variable exists, `false` if the variable does not exist
 #### savedb()
 ```js
 savedb('path')
 ```
 - `path` - filename/path
 Creates a database backup
 #### quetesDelete()
 ```js
 db.quetesDelete('name')
 ```
 Delete variable
 - `name` - the name of the variable you want to delete
#### quetesDeleteAll()
```js
quetesDeleteAll()
```
Remove all variables
#### ping()
```js
ping()
```
Show delay in ms