/**
 * Created by Satish on 21-03-2016.
 */
(function(){
    'use strict';

    angular
        .module('housenkid')
        .controller("HomeController",HomeController);

    HomeController.$inject = ['dataService'];
    function HomeController(dataService){

        var homeVm = this;

        homeVm.search = search;
        homeVm.loadMore = loadMore;
        homeVm.items=[];
        homeVm.infiniteScrollFlag = true;

        /*init();

        function init() {
            dataService
                .search("chair")
                .then(function (data) {
                        console.log(data.list);
                        homeVm.products = data.list;
                        homeVm.products.length = data.list.length;
                        homeVm.infiniteScrollFlag = false;
                    },
                    function (error) {
                        console.log(error);
                    })
        }*/


        function search(keyword) {

            dataService
                .search(homeVm.keyword)
                .then(function (data) {
                        console.log(data.list);
                        homeVm.products = data.list;
                        homeVm.products.length = data.list.length;
                        homeVm.items = homeVm.products.slice(0, 3);
                        homeVm.infiniteScrollFlag = false;

                    },
                    function (error) {
                        console.log(error);
                    })
        }

        function loadMore() {
            /*var last = homeVm.products[homeVm.products.length - 1];
            for(var i = 1; i < homeVm.products.length; i++) {
                console.log(last);
                homeVm.items.push(last + i);
            }*/
            console.dir(homeVm.items);
            console.log("satish");
            homeVm.items = homeVm.products.slice(0, homeVm.items.length+3);
        };
        
    }
})();
