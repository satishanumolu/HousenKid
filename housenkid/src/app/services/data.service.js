(function (){
 'use strict';

  angular
      .module('housenkid')
      .service('dataService',dataService);

   dataService.$inject = ['$http','$q','CONFIG'];
   function dataService($http,$q,CONFIG){
        var self = this;

       self.search = search;

       function search(keyword){
           return $http.get(CONFIG.API_END_POINT + '/hnkAPI/dev/product/search/'+keyword)
               .then(successFn,errorFn);
       }

       function successFn(response) {
           return response.data;
       }

       function errorFn(response) {
           return $q.reject(response.status);
       }
   }
})();