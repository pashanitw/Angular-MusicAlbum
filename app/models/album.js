/**
 * Created with JetBrains WebStorm.
 * User: PASHA
 * Date: 24/08/13
 * Time: 10:08
 * To change this template use File | Settings | File Templates.
 */
musicAlbum.
    factory('albumModel',function(){
     return function(){
          var self=this;
           self.category='';
           self.id='';
           self.name='';
           self.sortname='';
           self.thumbNails=[];
           self.type='';
         return self;
     }
    })