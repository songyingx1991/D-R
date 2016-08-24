angular.module("myapp").controller("guideCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow=false;
    $scope.onSlideChanged=function(){
        if($ionicSlideBoxDelegate.currentIndex()==($ionicSlideBoxDelegate.slidesCount()-1)){
            $scope.isShow=true;
        }else{
            $scope.isShow=false;
        }
    }

});

