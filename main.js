angular.module("myApp",[]).controller("mainCtrl",["$scope",function($scope){
	
	var count;
	$scope.tasks = [];
	$scope.hours=[00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	$scope.minutes=[0,5,10,15,20,25,30,35,40,45,50,55];

	$scope.addNew = function(){
		$scope.tasks.push({"body":$scope.newTaskBody, "done":false, "date":$scope.getDate(),"alertTime":$scope.getAlertTime()});
		$scope.newTaskBody = "";
	}
	$scope.getDoneCount = function(){
		count=0;
		angular.forEach($scope.tasks, function(task){
			count += task.done ? 1 : 0;
		});
		return count;
	}
	$scope.deleteDone = function(){
		var oldTasks = $scope.tasks;
		$scope.tasks = [];
		angular.forEach(oldTasks, function(task){
			if(!task.done){
				$scope.tasks.push(task)
			}
		})
	};
	$scope.complete = function(){
		//全てのボタンが押されると、all uncompelteとなる
		// if(count == $scope.tasks.length){
		// 	document.getElementById("btnAll").value="All uncomplete";
		// }

		//もし1つでもボタンが押されていないとき
		angular.forEach($scope.tasks, function(task){
			task.done = true;
		});

	}
	$scope.getDate = function(){
		var date = new Date();
		return date.getFullYear() + "/" + ("0" + (date.getMonth()+1)) + "/" + ("0"+date.getDate())
		 // + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
	}

	$scope.getAlertTime = function(){
		//alert時間の設定
		var alertHour = $scope.selectedHour;
		var alertMinute = $scope.selectedMinute;
		return alertHour&&alertMinute ? ("0"+alertHour).slice(-2) + ":" + ("0"+alertMinute).slice(-2) : "";

	}
}]);