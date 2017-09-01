'use strict';

function bookingService() {
	this.movieDetails = {};
  this.movieDetails.theatre = "";
  this.movieDetails.name = "";
  this.movieDetails.date = "";
  this.movieDetails.time = "";
  this.movieDetails.selectedSeats = [];
  this.movieDetails.grandTotal = "";
  this.paymentDetails ={};
}

angular.module('yotemplateApp')
  .service('booking', bookingService);
