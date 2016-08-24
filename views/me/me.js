/**
 * Created by hxsd on 2016/8/22.
 */
angular.module("myapp").controller("meCtrl",function($scope,$ionicModal){
        // 构造模式对话框
        $ionicModal.fromTemplateUrl('views/loading/loading.html', {
            scope: $scope,       // 作用域使用父作用域
            animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        // 创建新联系人
       /* $scope.createContact = function(u) {
            $scope.contacts.push({ name: u.username,email: u.email});
            $scope.modal.hide();    // 隐藏
        };*/

        // 离开时清除model
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // 在移除modal时执行一些动作
        $scope.user="登录/注册";
        $scope.$on('modal.removed', function() {
            // 在这里执行一些操作
            if(!$scope.mail1&&!$scope.password1){
                $scope.user=$scope.mail1;
                console.log(1);
            }

        });




})