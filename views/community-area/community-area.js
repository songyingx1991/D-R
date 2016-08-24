/**
 * Created by hxsd on 2016/8/9.
 */
angular.module("myapp").controller("areaCtrl",function($scope,$http,$ionicPopup){
    $scope.content={};
    $http.get("data/discuss.json").success(function(data){
        $scope.content.main=data;
    })
//    点击增加
    $scope.num1=function($index){
        $scope.content.main[$index].love+=1;
        $scope.content.main[$index].active="active";
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
                            $scope.content.main[$index].ping+=1;
                            $scope.content.main[$index].active1="active";
                            /* return $scope.data.text;*/
                        }
                    }
                }
            ]
        });
    };
    //无线下拉
    $scope.buttomrefresh1=function(){
        $http.get("data/discuss.json").success(function(data){
            Array.prototype.push.apply($scope.content.main,data)//转化为angular的方法
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }


});