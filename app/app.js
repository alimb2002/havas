var myApp = angular.module('myApp',[]);
myApp.controller("myController" , ['$scope', function($scope){
  $scope.handleBlock = function(val){
    var blocks = document.getElementsByClassName('blocks');
   for(j=0 ; j< blocks.length ; j++){
     blocks[j].style.height = 0;
     blocks[j].style.transitionDuration = '1s';
     blocks[j].style.overflow = 'hidden';
    }
     blocks[val].style.height = '88vh';
        blocks[val].lastElementChild.innerText = 'active block';
     console.log(blocks[val].lastElementChild.innerText) ;
    // e.target.style.transitionDuration = '1s';

  }
  $scope.blocks =[
    {number : 1 , name : "block1"  },
    {number : 2 , name : "block2"  },
    {number : 3 , name : "block3" },
    {number : 4 , name : "block4" },


  ];
}]);
