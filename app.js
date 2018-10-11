const express = require('express');
const expressVue = require('express-vue');
const path = require('path');
require('cross-fetch/polyfill');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(express.static('static'));

const vueOptions = {

  // Views root
  rootPath: path.join(__dirname, '/views'),

  // Customize layout
  head: {
    title: 'Harvard Art Museums',
    metas: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    styles: [
      {
        style: '/css/styles.css'
      },
      {
        style: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      }
    ]
  }
};


// Initialize express vue
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

const API_KEY = '43a19a70-b76e-11e8-bf0e-e9322ccde4db';
const comments = {};

// Proxy to Harvard Art Museums API
function proxy(endpoint, params={}) {
    // TODO
}


// List galleries
app.get('/', (req, res) => {
    res.renderVue('index.vue', {title: 'Gallery Listing'});
});


// TODO /gallery/:gallery_id


// TODO /object/:object_id


// TODO /object/:object_id/comment


// Listen on socket
app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});
