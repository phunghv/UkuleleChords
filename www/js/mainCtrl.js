
angular.module('MainApp.controllers', ['ionic', 'ngCordova'])
  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ]
  })
  .controller('SearchCtrl', function ($scope, $cordovaSQLite) {
    $scope.data ="chua co gi"
    $scope.insert = function () {
         $scope.data ="LiST: \n"
         $scope += $scope.text;
   var query = 'SELECT song_content FROM SongTbl WHERE song_id = ?'
      $cordovaSQLite.execute(db, query,$scope.text).then(function (res) {
        if (res.rows.length > 0) {
          console.log("Query : ")
          $scope.data +=res.rows.item(0).song_content
          console.log('SELECTED -> ' + res.rows.item(0).song_content)
        } else {
          console.log('No results found')
          $scope.data +="\nno result\n"
        }
      }, function (err) {
        console.error(err)
      })
    }

    $scope.select = function () {
        $scope.data ="LiST: \n"
      var query = 'SELECT song_content FROM SongTbl WHERE song_id = ?'
      $cordovaSQLite.execute(db, query,'1').then(function (res) {
        if (res.rows.length > 0) {
          console.log("Query : ")
          $scope.data +=res.rows.item(0).song_content
          console.log('SELECTED -> ' + res.rows.item(0).song_content)
        } else {
          console.log('No results found')
          $scope.data +="\nno result\n"
        }
      }, function (err) {
        console.error(err)
      })
    }
    //Function delete database
    $scope.delete = function(){
        $scope.data =": "
    }
  })
  .controller('PlaylistCtrl', function ($scope, $stateParams) {})
