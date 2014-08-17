'use strict';

angular.module('flickr-client')
  .factory('config', function () {
    
    var API_KEY = "df065ffd3827063d00493d56783f7ee3"

    return {
      getAPIKey: function(){
        return API_KEY;
      }
    };
  });
