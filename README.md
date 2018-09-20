# vuejs-movie-app 
> Одностраничное приложения для просмотра фильмов с помощью The Movie Database API

[![Build status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/webistomin/vuejs-movie-app/status.svg)](https://david-dm.org/webistomin/vuejs-movie-app) [![Dependency status][dependency-image]][dependency-url] 

При открытии приложения, отображается список популярных фильмов с пагинацией или динамической подгрузкой (на выбор). Также на странице должно быть располагается поле поиска. Когда ты вводишь туда какой-то текст, отображаются фильмы которые ему соответствуют. Для каждого фильма в списке отображается список жанров, к которым он принадлежит.

При клике на карточку с фильмом, показывается страница с детальной информацией об этом фильме и списком рекоммендованых или похожих фильмов к нему.

Присутствует возможность добавлять фильмы в избранное как со списка, так и на странице с отдельным фильмом. Список таких фильмов сохраняется локально (localStorage). Список всех избранных фильмов можно увидеть на отдельной странице. Также избранный фильм помечается зведочкой

<img src='https://raw.githubusercontent.com/dbader/readme-template/master/header.png'>

## Установка

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm install</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
     <tr>
      <td><code>npm run build</code></td>
      <td>Собрать проект для продакшена</td>
    </tr>
     <tr>
      <td><code>npm run build --report</code></td>
      <td>Собрать проект для продакшена с отчетом</td>
    </tr>
    <tr>
      <td><code>npm start ЗАДАЧА</code></td>
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>package.json</code>)</td>
    </tr>
  </tbody>
</table>

Предполагается, что все команды вы выполняете в bash (для OSX и Linux это самый обычный встроенный терминал, для Windows это, к примеру, Git Bash). В Windows установку пакетов (npm i) нужно выполять в терминале, запущенном от имени администратора.

## Техническое задание 
<a href="https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758" target="_blank">Открыть gist</a>

## Используемые технологии
1. Vue Js
2. Vuex
3. Vue Router
4. Vuetify
5. axios


[travis-image]: https://travis-ci.org/webistomin/vuejs-movie-app.svg?branch=master
[travis-url]: https://travis-ci.org/webistomin/vuejs-movie-app
[dependency-image]: https://david-dm.org/webistomin/vuejs-movie-app/dev-status.svg
[dependency-url]: https://david-dm.org/webistomin/vuejs-movie-app

