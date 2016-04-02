// sample angular code

var app = angular.module('redditClone', []);

app.controller('navBarController', ['$scope', function($scope) {

}]);

app.controller('postsController', ['$scope', function($scope) {
  $scope.postsObject = [
  {title: "Outside Aspen, CO", voteCount: 10, description: ipsum, imgUrl:"http://l7.alamy.com/zooms/cdab621b79be43239a18ac9992cfb427/wildflowers-rim-creek-trail-snowmass-village-aspen-colorado-usa-dc2hd8.jpg", postedBy: "Ned Stark", date: 1459583635, commentCount: 2},
  {title: "Cliffs of Moher", voteCount: 5, description: ipsum, imgUrl:"http://i.imgur.com/Mycvbzf.jpg", postedBy: "Cersei Lannister", date: 1459583635, commentCount: 1},
  {title: "Olympic National Park", voteCount: 2, description: ipsum, imgUrl:"http://outdoor-society.com/cms/wp-content/uploads/2015/03/Wildflowers-and-Lake-Constance-in-Olympic-National-Park.jpg", postedBy: "Bear Grylls", date: 1459583635, commentCount: 2}
  ];
}]);