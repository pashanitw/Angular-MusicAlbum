'use strict';

/* Controllers */

angular.module('musicAlbum.controllers', []).
  controller('MyCtrl1',function($scope,credentials,album,$q){
        $scope.name="pasha"
        $scope.albums=[];
        $.when(album.getAlbumData($scope.albums)).then(function(resp){
          //  alert("successhhhjh");
            console.log("this result");
            console.log(resp);
            $scope.$apply();
        })
            .fail(function(){
                alert("failed");
            })

    })
  .controller('MyCtrl2', [function() {

  }]);