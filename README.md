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

<table>
  <thead>
    <tr>
      <th>Технология</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://ru.vuejs.org/index.html">Vue.js</a></td>
      <td>Основной фреймворк для разработки интерфейса приложения</td>
    </tr>
    <tr>
      <td><a href="https://vuex.vuejs.org/ru/">Vuex</a></td>
      <td>Центральное хранилище данных для всех компонентов приложения</td>
    </tr>
     <tr>
      <td><a href="https://router.vuejs.org/ru/">Vue Router</a></td>
      <td>Библиотека для маршрутизации</td>
    </tr>
     <tr>
      <td><a href="https://vuetifyjs.com/ru/">Vuetify</a></td>
      <td>Фреймворк, предоставляющий набор компнентов UI в Material Design</td>
    </tr>
    <tr>
      <td><a href="https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html">axios</a></td>
      <td>Доступ к API, основанный на промисах HTTP-клиента</td>
    </tr>
  </tbody>
</table>

## Поддержка браузерами

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Yandex |
| --------- | --------- | --------- | --------- |--------- | --------- |
| IE11, Edge| Поддерживается| Поддерживается| 9+ |Поддерживается| Поддерживается |

## Искал вдохновение
<a href='https://github.com/dmtrbrl/tmdb-app'>Тут</a> и <a href='https://github.com/SKempin/reactjs-tmdb-app'>тут</a>


[travis-image]: https://travis-ci.org/webistomin/vuejs-movie-app.svg?branch=master
[travis-url]: https://travis-ci.org/webistomin/vuejs-movie-app
[dependency-image]: https://david-dm.org/webistomin/vuejs-movie-app/dev-status.svg
[dependency-url]: https://david-dm.org/webistomin/vuejs-movie-app

