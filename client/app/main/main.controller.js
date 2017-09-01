'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, booking, $location) {
      this.$http = $http;
      this.socket = socket;
      this.booking = booking;
      this.$location = $location;
      this.movieTheatreMapping=[];
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit(){
      this.$http.get('/api/moviesendpoints').then( response=>{
        this.movies = response.data;
        this.msg = "this is a msg";
        console.log(this.movies);
      })
    }

    select(movie){
      this.booking.movieDetails.name = movie;
      this.$location.path('/timings');
    }


}


  angular.module('yotemplateApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'mainCtrl'
    });
})();
