/**
 * Created by dell on 2016/8/5.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$http){
    $scope.detailshow={};
    $http.get("data/showpro.json").success(function(data){
        $scope.detailshow.products=data;
    }).error(function(){
        detailshow.error="错错错，都是你的错";
    })
});