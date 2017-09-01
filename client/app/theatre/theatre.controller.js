'use strict';

(function(){

class TheatreComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket = socket;
    this.theatres = [];
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  $onInit(){
    this.$http.get('/api/theatreendpoints').then(response => {
      this.theatres = response.data;
      this.socket.syncUpdates('theatreendpoint', this.theatres);
    });
  }
  AddTheatre() {
    this.$http.post('/api/theatreendpoints', {
      TheatreName: this.TheatreName,
      PlaceName: this.PlaceName,
      City: this.City
    });
    this.TheaterName = '';
    this.PlaceName = '';
    this.City = '';
  }

  RemoveTheatre(theatre){
    this.$http.delete('/api/theatreendpoints/' + theatre._id);
  }
}

angular.module('yotemplateApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });

})();
