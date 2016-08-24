/**
 * Created by hxsd on 2016/8/8.
 */
angular.module("myapp").controller("comCtrl",function($scope,$ionicPopup,$http){
    $scope.data={};
    /*$scope.chuang=function(){*/
        $http.get("data/main.json").success(function(data){
            $scope.data.main=data;
        });
  /*  };*/
    $scope.num=function($index){
        $scope.data.main[$index].view+=1;
    };
    $scope.num1=function($index){
        $scope.data.main[$index].like+=1;
        $scope.data.main[$index].active="active";
    };
    $scope.showPopup = function ($index) {
        $scope.data1 = {};

        // 一个精心制作的自定义弹出窗口
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data1.text">',
            title: '评论',
            scope: $scope,
            buttons: [
                {text: '取消'},
                {
                    text: '<b>评论</b>',
                    type: 'button-assertive',
                    onTap: function (e) {
                        if (!$scope.data1.text) {
                            // 不允许用户关闭，除非输入wifi密码
                            e.preventDefault();
                        } else {
                            $scope.data.main[$index].ping+=1;
                            $scope.data.main[$index].active1="active";
                           /* return $scope.data.text;*/
                        }
                    }
                }
            ]
        });
    };
    //无线下拉
    $scope.buttomrefresh=function(){
        console.log(1);
        $http.get("data/main.json").success(function(data){
            Array.prototype.push.apply($scope.data.main,data)//转化为angular的方法
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }


});