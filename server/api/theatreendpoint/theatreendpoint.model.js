'use strict';

import mongoose from 'mongoose';

var TheaterendpointSchema = new mongoose.Schema({
  TheatreName: String,
  PlaceName: String,
  City: String
});

export default mongoose.model('Theatres', TheaterendpointSchema);
