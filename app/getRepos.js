var q = require('q');
var request = q.denodeify(require('request'));
var config = require('./config');

module.exports = function(userName) {
  var options = {
    // url: config.githubUrl + userName + '/repos',
    url: config.reposUrl,
    headers: {
      'User-Agent': 'request'
    }
  };

  var convertData = function (data) {
    return {
      name: data[0].name
    }
  }

  return request(options)
    .then(function(response) {
      return response[1];
    })
    .then(JSON.parse)
    .then(convertData);
};
