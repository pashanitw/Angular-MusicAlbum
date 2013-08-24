'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('musicAlbum.services', []).
  value('version', '0.1')
    .factory('credentials',function(){
       var clientID="5e1490bd4983b770cfde86f5d77f0a05";
       var clientSecret="CB/bLySCfzJGEFTr8h9yJSERSPe/MvqprxT4RDLBnVYK2gX1pl78uadjOpu4RQ7V";

        return {
            clientID:clientID,
            clientSecret:clientSecret
        }

    })
.factory('album',function(credentials,$http){
     var url=   "http://api.ent.nokia.com/1.x/us/?category=artist&domain=music&client_id=5e1490bd4983b770cfde86f5d77f0a05";
     var getAlbumData=function(){
         var options={
             url:url,
             dataType: "jsonp",
             type:"GET"
         }
         $.ajax(options).then(function(response){
             alert("success")
             console.log(response);
         })
             .fail(function(){
                alert("failed");
             })

      /*  $http({method: 'GET', url: url,dataType:"jsonp"}).
            success(function(data, status, headers, config) {
                alert("success")
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function(data, status, headers, config) {
                alert("failed")
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
            */
         function call_back(){
             alert("callback")
         }

     }
        function call_back(){
            alert("callback")
        }
     return{
         getAlbumData:getAlbumData
     }

    })