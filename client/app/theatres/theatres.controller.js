'use strict';

(function(){

  class TheatresComponent {
    constructor($http, $scope, socket) {
      this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;
      this.theatres = [];
      this.movies = [];
      this.movieTheatreMapping= [];
      this.dates = [];
      this.date;
      this.times = [];
      this.time;
      this.selectedMovie = '';
      this.selectedTheatre = '';
      this.selectedCity = '';
      this.selectedPlace = '';
      this.editId;
      this.selectedEditTime = '';
      this.selectedEditDate = '';
      this.cityNames=[];


      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }
    $onInit(){
      this.$http.get('/api/moviesendpoints').then(response =>{
        this.movies = response.data;
        this.socket.syncUpdates('moviesendpoint',this.movies);
      });
      this.$http.get('/api/theatreendpoints').then(response =>{
        this.theatres = response.data;

        for(var index=0;index<response.data.length;index++)
          {
            this.cityNames[index]=response.data[index].City;
            this.theatres[index]=response.data[index];
          }


        this.socket.syncUpdates('theatreendpoint',this.theatres);
      });
      this.$http.get('api/movietheatresmappingendpoints').then(response =>{
        this.movieTheatreMapping = response.data;
        //sessionStorage.setItem('mapping',JSON.stringify(this.movieTheatreMapping));
      });
    }
    addDate(){
      var d = new Date(this.date);
      var formattedDate = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
      this.dates.push(formattedDate);
      console.log(this.dates);
    }
    addTime(){
      var c = new Date(this.time);
      var formattedTime = c.getHours()+':'+c.getMinutes();
      this.times.push(formattedTime);
    }

    saveMapping(){
      console.log('Saving mapping');
      this.$http.post('/api/movietheatresmappingendpoints',{
        TheatreName: this.selectedTheatre,
        MovieName: this.selectedMovie,
        City: this.selectedCity,
        Dates: this.dates,
        Times: this.times,
        PlaceName: this.selectedPlace
      });
      this.selectedTheatre = '';
      this.selectedMovie = '';
      this.selectedCity = '';
      this.dates='';
      this.times='';
      this.selectedPlace='';
    }

    fetchMappings(){
      this.$http.get('/api/movietheatresmappingendpoints').then(response =>
        {
          this.movieTheatreMapping = response.data;
          this.socket.syncUpdates('movietheatresmappingendpoint',this.movieTheatreMapping);
        });
      }
      removeMapping(movieTheatreMapping){
        this.$http.delete('/api/movietheatresmappingendpoints/'+ movieTheatreMapping._id);
      }
      removeDate(d){
        this.dates.pop(d);
      }
      removeTime(time){
        this.times.pop(time);
      }
       getId(movieTheatreMapping)
       {

         this.editId=movieTheatreMapping;
       }
        saveEdit(){
          console.log('test');
          console.log(this.editId);
            this.$http.put('/api/movietheatresmappingendpoints/'+this.editId._id,{
              MovieName:"jai ho"
          });
        }


  }
    angular.module('yotemplateApp')
    .component('theatres', {
      templateUrl: 'app/theatres/theatres.html',
      controller: TheatresComponent,
      controllerAs: 'theatresCtrl'
    });

  })();
