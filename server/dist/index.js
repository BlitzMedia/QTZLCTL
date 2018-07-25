'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const endpoint = 'https://api.airtable.com/v0';
const base = 'apptg1boOr10IkCsY';
const table = 'releases';
const key = 'keyMmV8ObRgCW8YNy';

//var bodyParser = require('body-parser')
//var fetch = require('node-fetch')

const app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

const getReleases = async (req, res) => {
  const url = `${endpoint}/${base}/${table}?api_key=${key}`;

  const response = await (0, _nodeFetch2.default)(url);
  const releases = await response.json();

  res.json(releases);
};

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/qtzlctl', getReleases);

// app.get('/', (req, res) => {
//   var base = 'apptg1boOr10IkCsY';
//   var table = 'releases';
//   var key = 'keyMmV8ObRgCW8YNy'
//
//   var resp = await fetch('https://api.airtable.com/v0/' + base + '/' + table + '?api_key=' + key)
//
//   const json = await resp.json()
//   res.json(json)
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Yo! This QTZL huntin! '));