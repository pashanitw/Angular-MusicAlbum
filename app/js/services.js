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
.factory('album',function(credentials,$http,mapper,$q){

       //var url=   "http://api.ent.nokia.com/1.x/us/creators/986039/products/?domain=music&client_id=5e1490bd4983b770cfde86f5d77f0a05";
        var url=   "http://api.ent.nokia.com/1.x/us/products/6710223/sample/?domain=music&client_id=5e1490bd4983b770cfde86f5d77f0a05";

        // var url=   "http://api.ent.nokia.com/1.x/us/?category=artist&domain=music&client_id=5e1490bd4983b770cfde86f5d77f0a05";
       // var url=   "http://api.ent.nokia.com/1.x/us/?category=artist&domain=music&client_id=5e1490bd4983b770cfde86f5d77f0a05";

        var getAlbumData=function(result){
         var deferred = $.Deferred();
         var options={
             url:url,
             dataType: "jsonp",
             type:"GET"
         }
         $.ajax(options).then(function(response){
             console.log(response);
             mapToData(response.data.items,mapper.mapAlbum,result);
             deferred.resolve(result);
            // console.log(result);

         })
             .fail(function(){
                 deferred.reject();
                alert("failed");
             })
     return deferred;
     }
     function mapToData(data,mapFunc,result){
         alert("here");
         $.each(data,function(){
           result.push(mapFunc(this));
         })
     }

     return{
         getAlbumData:getAlbumData
     }

    })