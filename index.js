/*!
 * mojo.js
 * Copyright (C) 2021 Sebastian Riedel
 * MIT Licensed
 */
import App from './lib/app.js';
import {callerFile} from './lib/file.js';

/**
 * 
 * @param  {...any} args 
 * @returns {App}
 */
export default function mojo (...args) {
  const app = new App(...args);
  app.home = callerFile().dirname();
  app.renderer.viewPaths = [app.home.child('views').toString()];
  app.router.controllerPaths = [app.home.child('controllers').toString()];
  app.static.publicPaths = [app.home.child('public').toString()];
  return app;
}
