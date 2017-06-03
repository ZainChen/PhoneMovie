var df = "data_en.json";  //json数据文件(用来切换语言)
//AngularJS路由
angular.module("czyRoute", ['ngRoute'])
.controller('czyCon',function($scope){
  $scope.headerUrl='./page/header.html';  //页眉
  $scope.footerUrl='./page/footer.html';  //页脚
})
.controller("HomeCon", function($scope,$route){$scope.$route = $route;})
.controller("SeekCon", function($scope,$http) {
  $http.get("data/"+df).success(function(data) {
    $scope.emps = data;
  });
  $scope.loadmore = function() {
    $http.get("data/"+df).success(function(data) {
      $scope.emps = $scope.emps.concat(data);
    });
  }
})
.controller('datasCon',function($scope,$routeParams,$http){
  $scope.did = $routeParams.dtid;  
  $http.get('data/'+df).success(function(d){
    for(var i = 0; i < d.length; i++){
      if($scope.did==d[i].id){
        $scope.dname = d[i].name;
        $scope.dimg1 = d[i].img1;
        $scope.dimg2 = d[i].img2;
        $scope.dimg3 = d[i].img3;
        $scope.dgrade = d[i].grade;
        $scope.ddirector = d[i].director;
        $scope.dstars = d[i].stars;
        $scope.dinfo = d[i].info;
        $scope.dstoryline = d[i].storyline;
      }
    }
  })
})
.controller('playCon',function($scope,$routeParams,$http){
  $scope.pid = $routeParams.plid;  
  $http.get('data/'+df).success(function(d){
    for(var i = 0; i < d.length; i++){
      if($scope.pid == d[i].id){
        $scope.pname = d[i].name;
        $scope.pimg1 = d[i].img1;
        $scope.pimg2 = d[i].img2;
        $scope.pimg3 = d[i].img3;
        $scope.pgrade = d[i].grade;
        $scope.pdirector = d[i].director;
        $scope.pstars = d[i].stars;
        $scope.pinfo = d[i].info;
        $scope.pstoryline = d[i].storyline;
      }
    }
  })
})
.controller("UserCon", function($scope,$route){$scope.$route = $route;})
.controller("UserEditCon", function($scope,$route){$scope.$route = $route;})
.config(function($routeProvider) {
  $routeProvider
  .when('/page/home', {
    templateUrl: './page/home.html',
    controller: 'HomeCon'
  })
  .when('/page/seek', {
    templateUrl: './page/seek.html',
    controller: 'SeekCon'
  })
  .when('/datas/:dtid', {
    templateUrl: './page/datas.html',
    controller: 'datasCon'
  })
  .when('/play/:plid', {
    templateUrl: './page/play.html',
    controller: 'playCon'
  })
  .when('/page/user', {
    templateUrl: './page/user.html',
    controller: 'UserCon'
  })
  .when('/page/user_edit', {
    templateUrl: './page/user_edit.html',
    controller: 'UserEditCon'
  })
  .otherwise({
    redirectTo: '/page/home'
  })
})