<h2 aling="center">Информация о версиях quotes-naruto</h2>

<h1>0.0.9</h1>
### Добавлено
Смена язык на английский/русский

- `queotesCharacterName('name', 'language?')` - выдаст рандомную цитату заданного персонаж
- `queotesJSON('name', 'type?', 'language?')` - выдаст цитаты (не только) в формате json
- `character('name', 'type?', 'language?')` - выдаст заданную информацию о персонаже
- `isPackageCharacter('name')` - выдаст `true` - если указанный персонаж есть в пакете, `false` - если нет 
- `packageCharacter('separator?')` - выдаст всех доступных персонажей в пакете
- `isPackageType('name')` - выдаст `true` - если указанный тип есть, `false` - если нет 
- `packageType('separator')` выдаст доступные типи `character`
- `randomNames('type?')` - выдаст рандомное название персонажей, оружий, техник
### Удаленно
`queotesItachi()`, `queotesNagato()`, `queotesJiraiya()`, `queotesAsuma()` ну и так далее. Всё это заменила функция `queotesCharacterName`
## База данных, пользовательские цитаты
### Добавлено
- `savedb('path')` - создаёт резервную копию базы данных
- `setQuotes('name', 'new content')` - меняет полностью содержимое переменной
### Изменено
- `addQuotes('name', 'content')` - добавляет новое содержимое к переменной, но не изменяет старое (надеюсь обяснил) 


<h1>0.0.8/0.0.7</h1>
### Фикс багов
- `queotesNameAll` - в 0.0.6 она не работала
- `quetesName` - не правильно работала в 0.0.7 (и ксати это и есть прчина почему я снёс 0.0.7)
- `База данных` - не нужно каждый раз перезапускать проект, чтобы запись в дб сохранялась
### Изменение названий функций
- `customQuetesNameAll` => `quetesNameContent` 
- `customQuetesDelete` => `deleteQuetes`
- `customQuetesEditName` => `editNameQuetes`
- `customQuetesEditContent` => `editContentQuetes`
- `customQuetesName` => `quetesName`

### Добавление новых функций, цитат
- `queotesChoji()` - Чоуджи
- `queotesGemma()` - Гемма
- `queotesIno()` - Ино
- `queotesIruka()` - Ирука
- `queotesKurama()` - Курама
- `queotesMaito_dai()` - Майто дай
- `queotesSai()` - Сай
- `queotesTenten()` - Тен Тен
- `queotesYamato()` - Ямато
- `randomNarutoFact()` - рандомный факт о аниме Наруто
- `IsCustomQuetes()` - проверит, существует ли данное название переменной `true/false`

### Подключения дб
```js
const { Database } = require('quotes-naruto')

const db = new Database({
  log: "База данных подключена",
  // будет высвечивается в консоле, если база данных подключена
  path: "./database/"
  // Папка
})

db.addQuotes("test", "Люди просто бездумные существа#new#Разработчик топ")

let text = db.quetesName("test")
console.log(text) // выведет: Люди просто бездумные существа, или: Разработчик топ. Ну тыпа вы знаете что делает эта функция
```