'use strict';

(function(){

class SeatbookingComponent {
  constructor($scope, $http, socket, booking, $location) {
    this.message = 'Hello';
    this.$scope = $scope;
    this.$http = $http;
    this.bookingService = booking;
    this.rows = ['A','B','C','D','E','F','G','H','I','J'];
    this.columns = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.selectedSeats = [];
    this.bookedSeats = [];
    this.seatsBooked=[];
    this.bookingForm = {};
    this.$location = $location;
    this.movieDetails = {};

  }

  $onInit(){


  this.$http.get('/api/paymentendpoints').then( response=>{
    this.payments = response.data;
  //  this.paying=JSON.stringify(this.payments);
  //  console.log(this.paying);
    for(let pay of this.payments)
    {
      console.log(pay.bookedSeats);
      for(let seat of pay.bookedSeats)
      {
        console.log('paid seats are '+seat.row+' '+seat.col);
        var divs = $(".seatbook");

        // var seatpaid=document.getElementsByClassName('seatbook');
        // console.log(seatpaid);
        var seatno=(seat.row).toString()+(seat.col).toString();
         for(var i=0;i<divs.length;i++)
         {
        console.log(divs[i].innerHTML);
        if(divs[i].innerHTML===seatno)
        {
        divs[i].style.backgroundColor='red';
        divs[i].disabled=true;
      }
         }
      }
    }
    //console.log('paid seats '+JSON.stringify(this.payments));

})
  this.movieDetails = this.bookingService.movieDetails;
  console.log(this.movieDetails);
  console.log(this.rows);
  console.log(this.columns);
  console.log(this.selectedSeats);

}

  isSelected(row, col){
    if(_.find(this.selectedSeats, function(seat){ return seat.row === row && seat.col === col })){
      return true;
    } else {
      return false;
    }
    console.log(this.selectedSeats);
  }

  isBooked(row, col){
    if(_.find(this.bookedSeats, function(seat){ return seat.row === row && seat.col === col})){
      console.log('is it booked '+this.bookedSeats);
        return true;
    } else{
      return false;
    }
  }

  selectSeat(row, col, classType){
    if(!this.isSelected(row, col) && !this.isBooked(row, col)){
      console.log("selected");
      this.selectedSeats.push({
        row: row,
        col: col,
        classType: classType
      });
      console.log(this.selectedSeats);
    }

    else{
      this.selectedSeats = _.reject(this.selectedSeats, function(seat){ return seat.row === row && seat.col===col })
    }

    this.bookingForm.platinum = _.filter(this.selectedSeats, function(seat){ return seat.classType === "platinum" });
    this.bookingForm.gold = _.filter(this.selectedSeats, function(seat){ return seat.classType === "gold"})
    this.bookingForm.grandTotal = ( (this.bookingForm.platinum.length * 200) + (this.bookingForm.gold.length * 100) + 30)
    console.log(this.bookingForm);
    console.log(this.selectedSeats);
  }

  bookSeats(){
    console.log("shoop baby");
    this.bookingService.movieDetails.selectedSeats = this.selectedSeats;
    this.bookingService.movieDetails.grandTotal = this.bookingForm.grandTotal
    console.log(this.bookingService.movieDetails);
    this.movieDetails = this.bookingService.movieDetails;
    this.bookedSeats = this.movieDetails.bookedSeats;
    this.selectedSeats = [];
    this.$location.path('/payment');
  }

}

angular.module('yotemplateApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl'
  });

})();
