/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myapp").controller("detailTabCtrl",function($scope,$http){
    $scope.products={};
    $http.get("data/products.json").success(function(data){
        $scope.products.product=data;
    }).error(function(){
        $scope.products.error="数据出错";
    })
});