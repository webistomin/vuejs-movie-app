# vuejs-movie-app 
> Одностраничное приложения для просмотра фильмов с помощью The Movie Database API

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)

При открытии приложения, отображается список популярных фильмов с пагинацией или динамической подгрузкой (на выбор). Также на странице должно быть располагается поле поиска. Когда ты вводишь туда какой-то текст, отображаются фильмы которые ему соответствуют. Для каждого фильма в списке отображается список жанров, к которым он принадлежит.

При клике на карточку с фильмом, показывается страница с детальной информацией об этом фильме и списком рекоммендованых или похожих фильмов к нему.

Присутствует возможность добавлять фильмы в избранное как со списка, так и на странице с отдельным фильмом. Список таких фильмов сохраняется локально (localStorage). Список всех избранных фильмов можно увидеть на отдельной странице. Также избранный фильм помечается зведочкой

<img src='https://raw.githubusercontent.com/dbader/readme-template/master/header.png'>

## Установка
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Техническое задание 
https://gist.github.com/krambertech/ecb3890824fd7ada0f4ec1ff55125758
