'use strict';

(function(){

class MovieratingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yotemplateApp')
  .component('movierating', {
    templateUrl: 'app/movierating/movierating.html',
    controller: MovieratingComponent,
    controllerAs: 'movieratingCtrl'
  });

})();
