import { EventEmitter } from 'node:events';

let emitter: EventEmitter;

declare global {
  var __emitter__: EventEmitter;
}

if (process.env.NODE_ENV === 'production') {
  emitter = new EventEmitter();
  emitter.setMaxListeners(Infinity);
} else {
  if (!global.__emitter__) {
    global.__emitter__ = new EventEmitter();
  }
  emitter = global.__emitter__;
  emitter.setMaxListeners(Infinity);
}

export { emitter };
