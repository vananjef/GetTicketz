'use strict';

(function(){

class ConfirmationComponent {
  constructor($http,booking) {
    this.message = 'Hello';
    this.bookingService = booking;
    this.$http=$http;
  }

  $onInit(){
    this.movieDetails=this.bookingService.movieDetails;
  
    }




}

angular.module('yotemplateApp')
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });

})();
