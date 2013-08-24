/**
 * Created with JetBrains WebStorm.
 * User: PASHA
 * Date: 24/08/13
 * Time: 11:10
 * To change this template use File | Settings | File Templates.
 */
musicAlbum.factory('mapper',function(albumModel){

var mapAlbum=function(data){
    var item=new albumModel();
  //  console.log(item);
  //  console.log(data);
    item.id=data.id
        .name=data.name
        .category=data.category
        .type=data.type;
        item.thumbNails.push(data.thumbnails["50x50"]);
    item.thumbNails.push(data.thumbnails["100x100"]);
    item.thumbNails.push(data.thumbnails["120x120"]);
    item.thumbNails.push(data.thumbnails["200x200"]);
    item.thumbNails.push(data.thumbnails["3200x320"]);
    return item;
      }

    return{
        mapAlbum:mapAlbum
    }

})