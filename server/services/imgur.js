const request = require('request');
const authorization = { Authorization: 'Client-ID 8cf0049fd77d541'};

//set page count 100, and get page 1
const imgurListUrl = `https://api.imgur.com/3/gallery/hot/viral/0.json?perPage=100&page=1`;

var getImage = {};

getImage.search = function(search, page = 0) {
  return new Promise((resolve, reject) => {
    let options = {
      url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
      headers: authorization,
      json: true,
    };
    function getSearchResult(err, response, body) {
      if (!err && response.statusCode == 200) {
        body = body.data.filter(image => {
          if (!image.is_album) {
            return image;
          }
        }).map(image => {
          return {
            url: image.link,
            title: image.title,
            context: `https://imgur.com/${image.id}`
          };
        });
        resolve(body)
      }
    }
    request(options, getSearchResult);
  });
};

getImage.getList = function() {
  return new Promise((resolve, reject) => {
    let options = {
      url: imgurListUrl,
      headers: authorization,
      json: true,
    };

    function getImgs(err, response, body) {
      if (!err && response.statusCode == 200) {
        body = body.data.filter(image => {
          if (!image.is_album) {
            return image;
          }
        }).map(image => {
          return {
            url: image.link,
            title: image.title,
            context: `https://imgur.com/${image.id}`
          };
        });
        resolve(body)
      }
    }
    request(options, getImgs);
  });
};

exports.getImage = getImage;
