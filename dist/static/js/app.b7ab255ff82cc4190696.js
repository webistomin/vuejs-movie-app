webpackJsonp([1],{"7+Ut":function(e,t){},"7zck":function(e,t){},GQpG:function(e,t){},IzbO:function(e,t){},LCHv:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a=i("M4fF"),r=i.n(a),o={data:function(){return{drawer:!1}},mounted:function(){this.$store.commit("loadIdsFromLocalStorage"),this.$store.dispatch("getAllGenresFromAPI")},created:function(){this.debouncedGetAnswer=r.a.debounce(this.getMoviesFromAPI,500)},computed:{setMarginSearchField:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"ml-2";case"sm":return"ml-3";case"md":return"ml-4";case"lg":case"xl":return"ml-5"}},searchQuery:{get:function(){return this.$store.state.shared.searchQuery},set:function(e){this.$store.commit("updateCurrentPage",1),this.$store.commit("updateQuery",e)}},getGenresList:function(){return this.$store.getters.getGenresList.genres},getTotalPages:function(){return this.$store.getters.getTotalPages},currentPage:{get:function(){return this.$store.state.currentPage},set:function(e){this.$store.commit("updateCurrentPage",e)}}},methods:{getMoviesFromAPI:function(){this.$router.push("/"),this.$store.dispatch("getMoviesFromAPI")},getCurrentGenres:function(e){for(var t=[],i=this.$store.getters.getGenresList.genres,s=0;s<e.length;s++)for(var a=0;a<i.length;a++)e[s]===i[a].id&&t.push(i[a].name);return 0!==t.length?t:["unknown"]}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.getGenresList?i("v-app",{attrs:{dark:""}},[i("v-navigation-drawer",{staticClass:"pt-5",attrs:{fixed:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-list",{attrs:{"three-line":""}},[i("v-list-tile",{attrs:{"active-class":"link-active",to:"/"},on:{click:function(t){e.drawer=!1}}},[i("v-list-tile-action",[i("v-icon",{attrs:{large:""}},[e._v("home")])],1),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Home")])],1)],1),e._v(" "),i("v-list-tile",{attrs:{"active-class":"link-active",to:"/top-rated-movies"},on:{click:function(t){e.drawer=!1}}},[i("v-list-tile-action",[i("v-icon",{attrs:{large:""}},[e._v("trending_up")])],1),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Top rated")])],1)],1),e._v(" "),i("v-list-tile",{attrs:{"active-class":"link-active",to:"/upcoming-movies"},on:{click:function(t){e.drawer=!1}}},[i("v-list-tile-action",[i("v-icon",{attrs:{large:""}},[e._v("calendar_today")])],1),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Upcoming")])],1)],1),e._v(" "),i("v-list-tile",{attrs:{"active-class":"link-active",to:"/now-playing-movies"},on:{click:function(t){e.drawer=!1}}},[i("v-list-tile-action",[i("v-icon",{attrs:{large:""}},[e._v("play_circle_outline")])],1),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Now playing")])],1)],1),e._v(" "),i("v-list-tile",{attrs:{"active-class":"link-active",to:"/favorite-movies"},on:{click:function(t){e.drawer=!1}}},[i("v-list-tile-action",[i("v-icon",{attrs:{large:""}},[e._v("favorite_border")])],1),e._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[e._v("Favorite")])],1)],1)],1)],1),e._v(" "),i("v-toolbar",{staticStyle:{"background-color":"#42b883"},attrs:{flat:"",app:"",fixed:"","clipped-left":"",prominent:""}},[i("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),i("v-toolbar-title",{staticClass:"hidden-sm-and-down"},[i("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"h1"}},[e._v("TMDb Movie App")])],1),e._v(" "),i("v-text-field",{class:e.setMarginSearchField,attrs:{"prepend-inner-icon":"search",solo:"",clearable:"","hide-details":"","single-line":"",flat:"",color:"#42b883",autofocus:"",placeholder:"Search for a movie..."},on:{input:e.debouncedGetAnswer},model:{value:e.searchQuery,callback:function(t){e.searchQuery="string"==typeof t?t.trim():t},expression:"searchQuery"}})],1),e._v(" "),i("v-content",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{key:e.$route.fullPath})],1)],1),e._v(" "),i("v-footer",{staticStyle:{"background-color":"#42b883"}},[i("a",{staticClass:"copyright",attrs:{href:"https://github.com/webistomin/vuejs-movie-app"}},[e._v("TMDb Movie App © 2018")])])],1):e._e()},staticRenderFns:[]};var c=i("VU/8")(o,n,!1,function(e){i("x5tc")},null,null).exports,l=i("/ocq"),v={props:{itemName:{type:Object,required:!0}},data:function(){return{isVisible:!1,snackBarMsg:"",snackBarColor:"",snackBarToolTipMsg:""}},methods:{isFavorite:function(e){return this.$store.getters.getFavoriteMoviesIds.includes(String(e))?(this.snackBarToolTipMsg="Remove from favorite list","favorite"):(this.snackBarToolTipMsg="Add to favorite list","favorite_border")},getCurrentGenres:function(e){var t=[],i=this.$store.getters.getGenresList.genres;if("number"==typeof e[0])for(var s=0;s<e.length;s++)for(var a=0;a<i.length;a++)e[s]===i[a].id&&t.push(i[a].name);else for(var r=0;r<e.length;r++)for(var o=0;o<i.length;o++)e[r].id===i[o].id&&t.push(i[o].name);return 0!==t.length?t:["unknown"]},addToFavorite:function(e){"favorite_border"===e.target.innerHTML?(e.target.innerHTML="favorite",this.isVisible=!0,this.snackBarMsg="Film has been successfully added to favorite list",this.snackBarColor="#42b883",this.$store.commit("addToFavoriteMoviesIdsList",e.target.dataset.id)):(e.target.innerHTML="favorite_border",this.isVisible=!0,this.snackBarColor="#FFDF00",this.snackBarMsg="Film has been successfully removed from favorite list",this.$store.commit("removeFromFavoriteMoviesIdsList",e.target.dataset.id))}},computed:{getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-3 mb-4";case"xl":return"mt-5 mb-5"}},getImageSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":case"md":return"w300";case"lg":return"w500";case"xl":return"w780"}}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-flex",{key:e.itemName.id,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[i("v-card",{staticClass:"movie-card",attrs:{color:"#35495e",hover:"",to:"/movie/"+e.itemName.id}},[i("v-img",{staticClass:"card-image",attrs:{src:e.itemName.poster_path?"http://image.tmdb.org/t/p/"+e.getImageSize+"/"+e.itemName.poster_path:"https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg"}}),e._v(" "),i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h2",{staticClass:"subheading mb-3"},[e._v(e._s(e.itemName.title))]),e._v(" "),i("div",[e.itemName.genre_ids?i("div",e._l(e.getCurrentGenres(e.itemName.genre_ids),function(t){return i("v-chip",{key:t,staticClass:"caption",attrs:{label:""}},[e._v(e._s(t))])})):i("div",e._l(e.getCurrentGenres(e.itemName.genres),function(t){return i("v-chip",{key:t.id,staticClass:"caption",attrs:{label:""}},[e._v(e._s(t))])}))])])]),e._v(" "),i("v-card-actions",[i("v-tooltip",{attrs:{right:""}},[i("v-btn",{attrs:{slot:"activator",flat:"",fab:"",icon:"",color:"#42b883",tag:"button"},on:{click:function(t){return t.preventDefault(),e.addToFavorite(t)}},slot:"activator"},[i("v-icon",{attrs:{"data-id":e.itemName.id}},[e._v(e._s(e.isFavorite(e.itemName.id)))])],1),e._v(" "),i("span",[e._v(e._s(this.snackBarToolTipMsg))])],1)],1)],1),e._v(" "),i("v-snackbar",{attrs:{color:e.snackBarColor,dark:""},model:{value:e.isVisible,callback:function(t){e.isVisible=t},expression:"isVisible"}},[e._v("\n    "+e._s(this.snackBarMsg)+"\n    "),i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.isVisible=!1}}},[e._v("\n      Close\n    ")])],1)],1)},staticRenderFns:[]};var m=i("VU/8")(v,u,!1,function(e){i("lK67")},"data-v-30dff712",null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-snackbar",{attrs:{value:this.errorVisibility,color:"error",dark:"",timeout:2e4,"multi-line":""}},[this._v("\n  "+this._s(this.getErrorMessage)+"\n  "),t("v-btn",{attrs:{dark:"",flat:""},on:{click:this.setErrorVisibility}},[this._v("\n    Close\n  ")])],1)},staticRenderFns:[]};var d=i("VU/8")({computed:{getErrorMessage:function(){return this.$store.getters.getErrorMessage},errorVisibility:function(){return this.$store.getters.getErrorVisibility}},methods:{setErrorVisibility:function(){this.$store.commit("setErrorVisibility",!1)}}},g,!1,function(e){i("GQpG")},"data-v-329d173c",null).exports,p={components:{MovieCard:m,ErrorMessage:d},mounted:function(){this.$store.commit("updateLoadingState",!0),this.$store.dispatch("getFavoriteMoviesIdsFromAPI")},computed:{getFavoriteMoviesIds:function(){return this.$store.getters.getFavoriteMoviesIds},getFavoriteMoviesDetails:function(){return this.$store.getters.getFavoriteMoviesDetails},isLoading:function(){return this.$store.getters.getLoadingState},getTitleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"subheading";case"sm":return"title";case"md":return"headline";case"lg":return"display-1";case"xl":return"display-2"}},getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-4 mb-4";case"xl":return"mt-5 mb-5"}}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[0===e.getFavoriteMoviesIds.length?i("h1",{staticClass:"page-title",class:[e.getTitleFontSize,e.getTitleMargin]},[e._v("No favorite movies yet")]):e.isLoading?i("div",{staticClass:"text-xs-center loader"},[i("v-progress-circular",{attrs:{size:150,width:10,color:"#42b883",indeterminate:""}})],1):i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("h1",{staticClass:"display-1 mb-5 mt-5 text-xs-center page-title"},[e._v("Favorite movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getFavoriteMoviesDetails,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1)],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var f=i("VU/8")(p,h,!1,function(e){i("OrDt")},null,null).exports,M={components:{MovieCard:m,ErrorMessage:d},mounted:function(){this.$store.commit("updateLoadingState",!0),this.$store.dispatch("getNowPlayingMoviesFromAPI")},computed:{getNowPlayingMovies:function(){return this.$store.getters.getNowPlayingMovies},isLoading:function(){return this.$store.getters.getLoadingState},getTitleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"subheading";case"sm":return"title";case"md":return"headline";case"lg":return"display-1";case"xl":return"display-2"}},getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-4 mb-4";case"xl":return"mt-5 mb-5"}}}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isLoading?i("div",{staticClass:"text-xs-center loader"},[i("v-progress-circular",{attrs:{size:150,width:10,color:"#42b883",indeterminate:""}})],1):i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("h1",{staticClass:"page-title",class:[e.getTitleFontSize,e.getTitleMargin]},[e._v("Now playing movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getNowPlayingMovies,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1)],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var b=i("VU/8")(M,_,!1,function(e){i("IzbO")},null,null).exports,y={components:{MovieCard:m,ErrorMessage:d},mounted:function(){this.$store.commit("updateLoadingState",!0),this.$store.dispatch("getTopRatedMoviesFromAPI")},computed:{getTopRatedMovies:function(){return this.$store.getters.getTopRatedMovies},isLoading:function(){return this.$store.getters.getLoadingState},getTitleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"subheading";case"sm":return"title";case"md":return"headline";case"lg":return"display-1";case"xl":return"display-2"}},getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-4 mb-4";case"xl":return"mt-5 mb-5"}}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isLoading?i("div",{staticClass:"text-xs-center loader"},[i("v-progress-circular",{attrs:{size:150,width:10,color:"#42b883",indeterminate:""}})],1):i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("h1",{staticClass:"page-title",class:[e.getTitleFontSize,e.getTitleMargin]},[e._v("Top rated movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getTopRatedMovies,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1)],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var k=i("VU/8")(y,w,!1,function(e){i("w+8w")},null,null).exports,x={components:{MovieCard:m,ErrorMessage:d},mounted:function(){this.$store.commit("updateLoadingState",!0),this.$store.dispatch("getUpcomingMoviesFromAPI")},computed:{getUpcomingMovies:function(){return this.$store.getters.getUpcomingMovies},isLoading:function(){return this.$store.getters.getLoadingState},getTitleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"subheading";case"sm":return"title";case"md":return"headline";case"lg":return"display-1";case"xl":return"display-2"}},getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-4 mb-4";case"xl":return"mt-5 mb-5"}}}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isLoading?i("div",{staticClass:"text-xs-center loader"},[i("v-progress-circular",{attrs:{size:150,width:10,color:"#42b883",indeterminate:""}})],1):i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("h1",{staticClass:"page-title",class:[e.getTitleFontSize,e.getTitleMargin]},[e._v("Upcoming movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getUpcomingMovies,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1)],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var I=i("VU/8")(x,C,!1,function(e){i("7+Ut")},null,null).exports,P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"error404"},[t("h1",[this._v("404")]),this._v(" "),t("h2",[this._v("Page not found")]),this._v(" "),t("v-icon",{attrs:{large:"",color:"rgba(255, 255, 255, 0.7)"}},[this._v("sentiment_dissatisfied")])],1)},staticRenderFns:[]};var $=i("VU/8")({},P,!1,function(e){i("vuSr")},"data-v-48d48f62",null).exports,S={components:{MovieCard:m,ErrorMessage:d},mounted:function(){this.$store.dispatch("getPopularMoviesFromAPI")},computed:{searchQuery:{get:function(){return this.$store.state.shared.searchQuery},set:function(e){this.$store.commit("updateCurrentPage",1),this.$store.commit("updateQuery",e)}},getMoviesList:function(){return this.$store.getters.getMoviesList.results},getTotalPages:function(){return this.$store.getters.getTotalPages},currentPage:{get:function(){return this.$store.state.shared.currentPage},set:function(e){this.$store.commit("updateCurrentPage",e)}},getPopularMovies:function(){return this.$store.getters.getPopularMovies},getTitleFontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"subheading";case"sm":return"title";case"md":return"headline";case"lg":return"display-1";case"xl":return"display-2"}},getTitleMargin:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"mt-1 mb-1";case"sm":return"mt-2 mb-2";case"md":return"mt-3 mb-3";case"lg":return"mt-3 mb-4";case"xl":return"mt-5 mb-5"}},getTotalVisiblePages:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 5;case"sm":return 7;case"md":return 10;case"lg":return 15;case"xl":return 20}}},methods:{getMoviesFromAPI:function(){this.$router.push("/"),this.$store.dispatch("getMoviesFromAPI")}}},F={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.searchQuery?i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.getMoviesList,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}),e._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-pagination",{staticClass:"flex-list",staticStyle:{width:"100%"},attrs:{length:e.getTotalPages,dark:"",color:"#42b883","total-visible":e.getTotalVisiblePages},on:{input:e.getMoviesFromAPI},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],2)],1):i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("h1",{staticClass:"page-title",class:[e.getTitleFontSize,e.getTitleMargin]},[e._v("Popular movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getPopularMovies,function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var T=i("VU/8")(S,F,!1,function(e){i("LCHv")},null,null).exports,D=i("NYxO"),E=i("mtWM"),L=i.n(E),A={state:{movies:[]},mutations:{saveMovies:function(e,t){e.movies=t}},actions:{getMoviesFromAPI:function(e){var t=e.commit,i=e.rootState;if(i.shared.searchQuery){var s=encodeURI(i.shared.searchQuery);L.a.get("https://api.themoviedb.org/3/search/movie?api_key="+i.shared.personalAPIKey+"&language=en-US&query="+s+"&page="+i.shared.currentPage+"&include_adult=false").then(function(e){return t("saveMovies",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}}},getters:{getMoviesList:function(e){return e.movies},getTotalPages:function(e){return e.movies.total_pages}}},N={state:{genres:[]},mutations:{saveGenres:function(e,t){e.genres=t}},actions:{getAllGenresFromAPI:function(e){var t=e.commit,i=e.rootState;L.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+i.shared.personalAPIKey+"&language=en-US").then(function(e){return t("saveGenres",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}},getters:{getGenresList:function(e){return e.genres}}},R=i("Xxa5"),V=i.n(R),U=i("exGp"),z=i.n(U),G={state:{movieDetails:[],movieImages:[],movieCredits:[],movieId:null},mutations:{saveMovieId:function(e,t){e.movieId=t},saveDetails:function(e,t){e.movieDetails=t},saveMovieImages:function(e,t){e.movieImages=t},saveMovieCredits:function(e,t){e.movieCredits=t}},actions:{getMovieDetailsFromAPI:function(e){var t=this,i=e.commit,s=e.rootState,a=e.state;return z()(V.a.mark(function e(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.themoviedb.org/3/movie/"+a.movieId+"?api_key="+s.shared.personalAPIKey+"&language=en-US").then(function(e){i("saveDetails",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 2:return e.next=4,L.a.get("https://api.themoviedb.org/3/movie/"+a.movieId+"/images?api_key="+s.shared.personalAPIKey+"&language=en-US&include_image_language=en%2Cnull").then(function(e){i("saveMovieImages",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 4:return e.next=6,L.a.get("https://api.themoviedb.org/3/movie/"+a.movieId+"/credits?api_key="+s.shared.personalAPIKey).then(function(e){i("saveMovieCredits",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 6:case"end":return e.stop()}},e,t)}))()}},getters:{getMovieDetails:function(e){return e.movieDetails},getMovieImages:function(e){return e.movieImages.backdrops},getMovieCredits:function(e){return e.movieCredits}}},B={state:{similarMovies:[]},mutations:{saveSimilarMovies:function(e,t){e.similarMovies=t}},actions:{getSimilarMoviesFromAPI:function(e){var t=this,i=e.commit,s=e.rootState;return z()(V.a.mark(function e(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.themoviedb.org/3/movie/"+s.movieDetails.movieId+"/similar?api_key="+s.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){i("saveSimilarMovies",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 2:case"end":return e.stop()}},e,t)}))()}},getters:{getSimilarMovies:function(e){return e.similarMovies.results}}},Q={state:{RecommendedMovies:[]},mutations:{saveRecommendedMovies:function(e,t){e.RecommendedMovies=t}},actions:{getRecommendedMoviesFromAPI:function(e){var t=this,i=e.commit,s=e.rootState;return z()(V.a.mark(function e(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.themoviedb.org/3/movie/"+s.movieDetails.movieId+"/recommendations?api_key="+s.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){i("saveRecommendedMovies",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 2:case"end":return e.stop()}},e,t)}))()}},getters:{getRecommendedMovies:function(e){return e.RecommendedMovies.results}}},K={state:{PopularMovies:[]},mutations:{savePopularMovies:function(e,t){e.PopularMovies=t}},actions:{getPopularMoviesFromAPI:function(e){var t=e.commit,i=e.rootState;L.a.get("https://api.themoviedb.org/3/movie/popular?api_key="+i.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){t("savePopularMovies",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}},getters:{getPopularMovies:function(e){return e.PopularMovies.results}}},j={state:{UpcomingMovies:[]},mutations:{saveUpcomingMovies:function(e,t){e.UpcomingMovies=t}},actions:{getUpcomingMoviesFromAPI:function(e){var t=e.commit,i=e.rootState;L.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key="+i.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){t("updateLoadingState",!1),t("saveUpcomingMovies",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}},getters:{getUpcomingMovies:function(e){return e.UpcomingMovies.results}}},H={state:{TopRatedMovies:[]},mutations:{saveTopRatedMovies:function(e,t){e.TopRatedMovies=t}},actions:{getTopRatedMoviesFromAPI:function(e){var t=e.commit,i=e.rootState;L.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+i.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){t("updateLoadingState",!1),t("saveTopRatedMovies",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}},getters:{getTopRatedMovies:function(e){return e.TopRatedMovies.results}}},O={state:{NowPlayingMovies:[]},mutations:{saveNowPlayingMovies:function(e,t){e.NowPlayingMovies=t}},actions:{getNowPlayingMoviesFromAPI:function(e){var t=e.commit,i=e.rootState;L.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+i.shared.personalAPIKey+"&language=en-US&page=1").then(function(e){t("updateLoadingState",!1),t("saveNowPlayingMovies",e.data)}).catch(function(e){throw t("setErrorMessage",e.message),t("setErrorVisibility",!0),e})}},getters:{getNowPlayingMovies:function(e){return e.NowPlayingMovies.results}}},q=i("mvHQ"),J=i.n(q),W={state:{favoriteMoviesIds:[],favoriteMoviesDetails:[]},mutations:{addToFavoriteMoviesIdsList:function(e,t){e.favoriteMoviesIds.push(t),localStorage.setItem("favoriteMoviesIds",J()(e.favoriteMoviesIds))},removeFromFavoriteMoviesIdsList:function(e,t){var i=e.favoriteMoviesIds.indexOf(t);e.favoriteMoviesIds.splice(i,1),localStorage.setItem("favoriteMoviesIds",J()(e.favoriteMoviesIds))},loadIdsFromLocalStorage:function(e){e.favoriteMoviesIds=JSON.parse(localStorage.getItem("favoriteMoviesIds"))||[]},saveFavoriteMoviesDetails:function(e,t){e.favoriteMoviesDetails.push(t)},clearMovieDetails:function(e,t){e.favoriteMoviesDetails=t}},actions:{getFavoriteMoviesIdsFromAPI:function(e){var t=this,i=e.commit,s=e.rootState,a=e.state;return z()(V.a.mark(function e(){var r,o;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i("clearMovieDetails",[]),0===a.favoriteMoviesIds.length){e.next=10;break}r=String(a.favoriteMoviesIds).split(","),o=0;case 4:if(!(o<r.length)){e.next=10;break}return e.next=7,L.a.get("https://api.themoviedb.org/3/movie/"+r[o]+"?api_key="+s.shared.personalAPIKey+"&language=en-US").then(function(e){i("updateLoadingState",!1),i("saveFavoriteMoviesDetails",e.data)}).catch(function(e){throw i("setErrorMessage",e.message),i("setErrorVisibility",!0),e});case 7:o++,e.next=4;break;case 10:case"end":return e.stop()}},e,t)}))()}},getters:{getFavoriteMoviesIds:function(e){return e.favoriteMoviesIds},getFavoriteMoviesDetails:function(e){return e.favoriteMoviesDetails}}};s.default.use(D.a);var X=new D.a.Store({modules:{shared:{state:{personalAPIKey:"52217232f795bbefbb1b7c951aae98ad",currentPage:1,searchQuery:"",isLoading:null,errorMessage:null,isErrorVisible:!1},mutations:{updateQuery:function(e,t){e.searchQuery=t},updateCurrentPage:function(e,t){e.currentPage=t},updateLoadingState:function(e,t){e.isLoading=t},setErrorMessage:function(e,t){e.errorMessage=t},setErrorVisibility:function(e,t){e.isErrorVisible=t}},actions:{},getters:{getLoadingState:function(e){return e.isLoading},getErrorMessage:function(e){return e.errorMessage},getErrorVisibility:function(e){return e.isErrorVisible}}},movieList:A,genres:N,movieDetails:G,similarMovies:B,recommendedMovies:Q,popularMovies:K,upcomingMovies:j,topRatedMovies:H,nowPlayingMovies:O,favoriteMovies:W},state:{},mutations:{},actions:{},getters:{},strict:!1}),Y={components:{MovieCard:m,ErrorMessage:d},beforeRouteEnter:function(e,t,i){X.commit("updateLoadingState",!0),X.commit("saveMovieId",e.params.id),X.dispatch("getMovieDetailsFromAPI").then(function(){X.dispatch("getSimilarMoviesFromAPI").then(function(){X.dispatch("getRecommendedMoviesFromAPI").then(function(){X.commit("updateLoadingState",!1)})})}),i()},beforeRouteUpdate:function(e,t,i){var s=this;this.$store.commit("updateLoadingState",!0),this.$store.commit("saveMovieId",e.params.id),this.$store.dispatch("getMovieDetailsFromAPI").then(function(){s.$store.dispatch("getSimilarMoviesFromAPI").then(function(){s.$store.dispatch("getRecommendedMoviesFromAPI").then(function(){s.$store.commit("updateLoadingState",!1)})})}),i()},computed:{getMovieDetails:function(){return this.$store.getters.getMovieDetails},isLoading:function(){return this.$store.getters.getLoadingState},getSimilarMovies:function(){return this.$store.getters.getSimilarMovies},getRecommendedMovies:function(){return this.$store.getters.getRecommendedMovies},getMovieImages:function(){return this.$store.getters.getMovieImages},getBackdropSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return"w300";case"md":return"w780";case"lg":case"xl":return"w1280"}},getCarouselImageSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"w300";case"sm":case"md":return"w780";case"lg":case"xl":return"w1280"}},getMovieCredits:function(){return this.$store.getters.getMovieCredits}},filters:{getFormatedPrice:function(e){return Math.abs(Number(e))>=1e9?Math.round(Math.abs(Number(e))/1e9)+" Billions":Math.abs(Number(e))>=1e6?Math.round(Math.abs(Number(e))/1e6)+" Millions":Math.abs(Number(e))>=1e3?Math.round(Math.abs(Number(e))/1e3)+" Thousands":Math.abs(Number(e))}},methods:{getCurrentGenres:function(e){var t=[],i=this.$store.getters.getGenresList.genres;try{for(var s=0;s<e.length;s++)for(var a=0;a<i.length;a++)e[s].id===i[a].id&&t.push(i[a].name)}catch(e){console.log(e)}return 0!==t.length?t:["unknown"]}}},Z={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isLoading?i("div",{staticClass:"text-xs-center loader"},[i("v-progress-circular",{attrs:{size:150,width:10,color:"#42b883",indeterminate:""}})],1):i("div",[i("v-img",{staticClass:"movie-backdrop",attrs:{src:e.getMovieDetails.backdrop_path?"http://image.tmdb.org/t/p/"+e.getBackdropSize+"/"+e.getMovieDetails.backdrop_path:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:"300"}},[e.getMovieDetails.tagline?i("div",{staticClass:"movie-tagline display-3"},[e._v('\n        "'+e._s(e.getMovieDetails.tagline)+'"\n      ')]):e._e()]),e._v(" "),i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-chip",{attrs:{color:"warning headline chip mb-3","text-color":"white",disabled:""}},[i("v-icon",{attrs:{medium:"",left:""}},[e._v("thumb_up")]),e._v("\n            "+e._s(e.getMovieDetails.vote_average)+"\n          ")],1),e._v(" "),e.getMovieDetails.title?i("h1",{staticClass:"display-2 mb-3"},[e._v("\n            "+e._s(e.getMovieDetails.title)+"\n          ")]):e._e(),e._v(" "),e.getMovieDetails.overview?i("p",{staticClass:"headline mb-3"},[e._v("\n            "+e._s(e.getMovieDetails.overview)+"\n          ")]):e._e(),e._v(" "),void 0!==e.getMovieDetails.genres?i("div",e._l(e.getCurrentGenres(e.getMovieDetails.genres),function(t){return i("v-chip",{key:t.id,staticClass:"title mb-3",attrs:{label:""}},[e._v("\n              "+e._s(t)+"\n            ")])})):e._e(),e._v(" "),e.getMovieDetails.status?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Status:")]),e._v(" "),i("span",{staticClass:"value"},[e._v(e._s(e.getMovieDetails.status))])]):e._e(),e._v(" "),e.getMovieDetails.budget?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Budget:")]),e._v(" "),i("span",{staticClass:"value"},[e._v("$"+e._s(e._f("getFormatedPrice")(e.getMovieDetails.budget)))])]):e._e(),e._v(" "),e.getMovieDetails.revenue?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Revenue:")]),e._v(" "),i("span",{staticClass:"value"},[e._v("$"+e._s(e._f("getFormatedPrice")(e.getMovieDetails.revenue)))])]):e._e(),e._v(" "),e.getMovieDetails.release_date?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Release date:")]),e._v(" "),i("span",{staticClass:"value"},[e._v(e._s(e.getMovieDetails.release_date))])]):e._e(),e._v(" "),e.getMovieDetails.runtime?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Runtime:")]),e._v(" "),i("span",{staticClass:"value"},[e._v(e._s(e.getMovieDetails.runtime)+" minutes")])]):e._e(),e._v(" "),0!==e.getMovieDetails.production_countries.length?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Production country:")]),e._v(" "),i("span",{staticClass:"value "},[e._v(e._s(e.getMovieDetails.production_countries[0].name))])]):e._e(),e._v(" "),e.getMovieDetails.popularity?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Popularity:")]),e._v(" "),i("span",{staticClass:"value "},[e._v(e._s(e.getMovieDetails.popularity))])]):e._e(),e._v(" "),0!==e.getMovieDetails.spoken_languages.length?i("div",{staticClass:"title block mb-3"},[i("span",{staticClass:"mb-3 option"},[e._v("Spoken languages:")]),e._v(" "),i("span",{staticClass:"value"},[e._v(e._s(e.getMovieDetails.spoken_languages[0].name))])]):e._e(),e._v(" "),i("v-layout",{attrs:{column:""}},[0!==e.getMovieCredits.cast.length?i("v-flex",{attrs:{xs12:""}},[i("v-expansion-panel",{staticClass:"title"},[i("v-expansion-panel-content",{attrs:{ripple:""}},[i("div",{staticClass:"option",attrs:{slot:"header"},slot:"header"},[e._v("Cast")]),e._v(" "),e._l(e.getMovieCredits.cast,function(t){return i("v-card",{key:t.cast_id},[i("v-card-text",[i("span",{staticClass:"value"},[e._v(e._s(t.name))]),e._v("\n                    As\n                    "),i("span",{staticClass:"value"},[e._v(e._s(t.character))])])],1)})],2)],1)],1):e._e(),e._v(" "),0!==e.getMovieCredits.crew.length?i("v-flex",{attrs:{xs12:""}},[i("v-expansion-panel",{staticClass:"title"},[i("v-expansion-panel-content",{attrs:{ripple:""}},[i("div",{staticClass:"option",attrs:{slot:"header"},slot:"header"},[e._v("Crew")]),e._v(" "),e._l(e.getMovieCredits.crew,function(t){return i("v-card",{key:t.cast_id},[i("v-card-text",[i("span",{staticClass:"value"},[e._v(e._s(t.name))]),e._v("\n                    As\n                    "),i("span",{staticClass:"value"},[e._v(e._s(t.job))])])],1)})],2)],1)],1):e._e()],1),e._v(" "),e.getMovieImages.length>1?i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-carousel",{attrs:{cycle:"",interval:"5000"}},e._l(e.getMovieImages,function(t){return i("v-carousel-item",{key:t.file_path,attrs:{src:t.file_path?"http://image.tmdb.org/t/p/"+e.getCarouselImageSize+"/"+t.file_path:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}})}))],1)],1):e._e(),e._v(" "),0!==e.getSimilarMovies.length?i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("h2",{staticClass:"display-1 mt-5"},[e._v("Similar movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getSimilarMovies.slice(0,4),function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1):e._e(),e._v(" "),0!==e.getRecommendedMovies.length?i("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[i("h2",{staticClass:"display-1 mt-5"},[e._v("Recommended movies")]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},e._l(e.getRecommendedMovies.slice(0,4),function(e){return i("movie-card",{key:e.id,attrs:{itemName:e}})}))],1):e._e()],1)],1)],1)],1),e._v(" "),i("error-message")],1)},staticRenderFns:[]};var ee=i("VU/8")(Y,Z,!1,function(e){i("jBSv")},null,null).exports;s.default.use(l.a);var te=new l.a({routes:[{path:"",component:T},{path:"/favorite-movies",component:f},{path:"/now-playing-movies",component:b},{path:"/top-rated-movies",component:k},{path:"/upcoming-movies",component:I},{path:"/movie/:id",component:ee},{path:"*",component:$}],mode:"history",scrollBehavior:function(e,t,i){return{x:0,y:0}}}),ie=i("3EgV"),se=i.n(ie);i("7zck");s.default.use(se.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:te,store:X,components:{App:c},template:"<App/>"})},OrDt:function(e,t){},jBSv:function(e,t){},lK67:function(e,t){},vuSr:function(e,t){},"w+8w":function(e,t){},x5tc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b7ab255ff82cc4190696.js.map