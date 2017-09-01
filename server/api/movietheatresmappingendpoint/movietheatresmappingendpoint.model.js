'use strict';

import mongoose from 'mongoose';

var MovietheatresmappingendpointSchema = new mongoose.Schema({
TheatreName: {
  type:String,
  required:true
},
City: {
  type:String,
  required:true
},
MovieName:{
  type: String,
  required:true
},
PlaceName:{
  type: String,
  required:true
},
Dates: [{
type: String
}],
Times:[{
  type: String
}]
});

export default mongoose.model('Movietheatresmappingendpoint', MovietheatresmappingendpointSchema);
