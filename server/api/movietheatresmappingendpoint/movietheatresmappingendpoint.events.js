/**
 * Movietheatresmappingendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Movietheatresmappingendpoint from './movietheatresmappingendpoint.model';
var MovietheatresmappingendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MovietheatresmappingendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Movietheatresmappingendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MovietheatresmappingendpointEvents.emit(event + ':' + doc._id, doc);
    MovietheatresmappingendpointEvents.emit(event, doc);
  }
}

export default MovietheatresmappingendpointEvents;
