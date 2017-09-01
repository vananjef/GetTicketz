'use strict';

(function(){


  class MoviesComponent {
    constructor($scope,$http,socket) {
      this.message = 'Hello';
      this.$http=$http;
      this.socket=socket;
      this.movie=[];
      this.MovieData=[];
      this.Title;

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
  }


      $onInit(){
        this.$http.get('/api/moviesendpoints').then(response =>{
          this.movie=response.data;
          this.socket.syncUpdates('moviesendpoint',this.movie);
        });
      }

      SearchMovies(title){
        console.log("grbdk");
        var key = '56aae9876c7f8f4d2706bd528d77e895';
        this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}`).then(response => {
          var movieID = response.data.results[0].id;
          console.log(response.data.results);
          this.$http.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}&language=en-US`).then(response =>{
            console.log(response.data);
            this.MovieData = {
              Name: response.data.original_title,
              Year: response.data.release_date.substring(0,4),
              Genre: _.pluck(response.data.genres, 'name').join(),
              Poster: `http://image.tmdb.org/t/p/w500/${response.data.poster_path}`,
              Runtime: `${response.data.runtime} minutes`
            };
            this.showMovies = true;
            console.log(this.MovieData);
          })
        });
      }

      AddMovie(OMDBData)
      {
        this.$http.post('/api/moviesendpoints', this.MovieData);
      }


      RemoveMovie(movie)
      {
        this.$http.delete('/api/moviesendpoints/'+movie._id);
      }
  }

  angular.module('yotemplateApp')
    .component('movies', {
      templateUrl: 'app/movies/movies.html',
      controller: MoviesComponent,
      controllerAs: 'moviesCtrl'
    });

})();
