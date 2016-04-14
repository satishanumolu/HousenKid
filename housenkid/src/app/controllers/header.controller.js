/**
 * Created by Satish on 21-03-2016.
 */
(function(){
    'use strict';

    angular
        .module('housenkid')
        .controller("HeaderController",HeaderController);

    function HeaderController(){

        var headerVm = this;

        headerVm.homeFlag = true;
        headerVm.aboutFlag = false;
        headerVm.contactFlag = false;

        headerVm.navHome = navHome;
        headerVm.navAbout = navAbout;
        headerVm.navContact = navContact;

        function navHome(){
            headerVm.homeFlag = true;
            headerVm.aboutFlag = false;
            headerVm.contactFlag = false;
        }
        function navAbout(){
            headerVm.homeFlag = false;
            headerVm.aboutFlag = true;
            headerVm.contactFlag = false;
        }
        function navContact(){
            headerVm.homeFlag = false;
            headerVm.aboutFlag = false;
            headerVm.contactFlag = true;
        }
    }
})();
