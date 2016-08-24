var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    ////切换按钮
    ////首页
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    });
    $stateProvider.state("tabs.shoping",{
        url:"/shoping",
        views:{"tab-shoping":{templateUrl:"views/shoping/shoping.html",controller:"shopingCtrl"}}
    });
    $stateProvider.state("tabs.community",{
        url:"/community",
        views:{"tab-community":{templateUrl:"views/community/community.html",controller:"comCtrl"}}
    });
    $stateProvider.state("tabs.me",{
        url:"/me",
        views:{"tab-me":{templateUrl:"views/me/me.html",controller:"meCtrl"}}
    });
    /**/

    //社区的下一级
    $stateProvider.state("tabs.community-area",{
        url:"/community-area",
        views:{"tab-community":{templateUrl:"views/community-area/community-area.html",controller:"areaCtrl"}}
    });
    //下下一级

    $stateProvider.state("tabs.detailTab",{
        url:"/detailTab",
        abstract:true,
        views:{"tab-home":{
            templateUrl:"views/detailTab/detailTab.html",controller:"detailTabCtrl"}}
    });


    $stateProvider.state("tabs.detailTab.detailxq",{
        url:"/detailxq",
        views:{"detailxq":{
            templateUrl:"views/detailxq/detailxq.html"}}
    });


    $stateProvider.state("tabs.detailTab.detailxq1",{
        url:"/detailxq1",
        views:{"detailxq1":{
            templateUrl:"views/detailxq1/detailxq1.html"}}
    });


    $stateProvider.state("tabs.detailTab.detailpj",{
        url:"/detailpj",
        views:{"detailpj":{
            templateUrl:"views/detailpj/detailpj.html"}}
    });

    $urlRouterProvider.otherwise("/tabs/home");
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
});
