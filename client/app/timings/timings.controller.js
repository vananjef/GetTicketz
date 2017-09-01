'use strict';

(function(){

class TimingsComponent {

  constructor($scope, $http, socket, booking, $location) {
    this.message = 'Hello';
    this.$scope = $scope;
    this.$http = $http;
    this.socket = socket;
    this.theatreMappings = [];
    this.filteredMappings = [];
    this.dates = [];
    this.bookingService = booking;
    this.$location = $location;
    this.timings = {};
    this.backdrop = "";
  }
  // constructor($http, booking, $location) {
  //   this.$http = $http;
  //   this.$location = $location;
  //   this.booking = booking;
  //   this.movieDetails = [];
  // }

  // $onInit(){
  //   this.$http.get('/api/movietheatresmappingendpoints').then(response => {
  //     this.mappedMovies = response.data;
  //     this.movieDetails = _.filter(this.mappedMovies, (mapping)=>{ return mapping.MovieName === this.booking.movieName });
  //     this.dates = _.flatten(_.pluck(this.movieDetails, 'Dates'));
  //   });
  // }
  //
  // getTheatres(date){
  //   this.theatres = _.filter(this.movieDetails, (movie)=>{ return movie.Date = date });
  //   console.log(this.theatres);
  //   this.booking.date = date;
  // }
  //
  // select(theatre, time){
  //   this.bookingService.movieDetails.theatre = theatre;
  //     this.bookingService.movieDetails.date = this.timings.date;
  //     this.bookingService.movieDetails.time = time;
  //   this.$location.path('/seatbooking');
  // }

  $onInit() {
    this.$http.get('/api/movietheatresmappingendpoints')
    .then(response => {
      this.theatreMappings = response.data;

      var movieDetails = this.bookingService.movieDetails;
      this.theatreMappings =  _.filter(this.theatreMappings, function(mapping){ return mapping.MovieName === movieDetails.name})
      this.backdrop = this.bookingService.backdrop;
      console.log(movieDetails);

      for( var mapping of this.theatreMappings){
        for( var i=0; i<mapping.Dates.length; i++){
          this.dates.push(mapping.Dates[i]);
        }
      }
      this.dates = _.uniq(this.dates);
      this.dates = _.sortBy( this.dates, (date)=>{ return date } );
    });
  }

  genDate(date){
    var day = new Date(date).getDate();
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(date).getDay()];
    var year = new Date(date).getFullYear();

    return `${day}, ${dayName}`;
  }

  genTiming(timing){
    var hours = new Date(timing).getHours();
    var minutes = new Date(timing).getMinutes();
    return `${hours}.${minutes}`;
  }

  selectDate(date){
    this.timings.date = date;
    this.filteredMappings = _.filter(this.theatreMappings, function(mapping){ return _.contains(mapping.Dates, date) });
  }

  selectTimings(theatre, time){
    console.log(theatre, this.timings.date, time);
    this.bookingService.movieDetails.theatre = theatre;
    this.bookingService.movieDetails.date = this.timings.date;
    this.bookingService.movieDetails.time = time;
    console.log(this.bookingService.movieDetails);
    this.$location.path('/seatbooking');
  }
}

angular.module('yotemplateApp')
  .component('timings', {
    templateUrl: 'app/timings/timings.html',
    controller: TimingsComponent,
    controllerAs: 'timingsCtrl'
  });

})();
