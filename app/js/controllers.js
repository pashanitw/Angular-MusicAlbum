'use strict';

/* Controllers */

angular.module('musicAlbum.controllers', []).
  controller('MyCtrl1',function(credentials,album){
        album.getAlbumData();
    })
  .controller('MyCtrl2', [function() {

  }]);