http://bootswatch.com/cerulean/
http://stackoverflow.com/questions/19200525/bootstrap-3-modal-in-html5mode-in-angularjs

<div class="panel panel-primary">
	<div class="panel-heading">
		<h3 class="panel-title">Users</h3>
	</div>
	<div class="panel-body">
		<button class="btn btn-success" ng-click="editUser('new')" data-toggle="modal" href="#editModal">
		New User</button>
		<div>
		<table class="table table-condensed table-bordered table-hover table-striped">
			<thead>
				<tr>
					<th> id </th>
					<th>first name</th>
					<th>last name</th>
					<th>age</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-class-even="'even'" ng-repeat="user in users">
					<td>{{$index + 1}}</td>
					<td><a href="/user/{{user.id}}">{{user.firstname}}</a></td>
					<td>{{user.lastname}}</td>
					<td>{{user.age}}</td>
					<td><button role='button' class='btn' ng-click="editUser(user)" data-toggle="modal" href="#editModal">Edit</button></td>
				</tr>
			</tbody>
		</table>
		</div>
	</div>
</div>
<div class="modal hide fade" ng-include="'/user/detail.html'" id="editModal" role='dialog'></div>

///////index///////////////

<!doctype html>
<html ng-app="plunker">
  <head>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.js"></script>
    <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.6.0.js"></script>
    <script src="example.js"></script>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>

<div ng-controller="ModalDemoCtrl">
    <button class="btn" ng-click="open()">Open me!</button>
    <div ng-show="selected">Selection from a modal: {{ selected }}</div>
</div>
  </body>
</html>

/////////////////////

<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" ng-click="cancel()">&times;</button>
      <h4 class="modal-title">Modal title</h4>
    </div>
    <div class="modal-body">
      <ul>
        <li ng-repeat="item in items">
          <a ng-click="selected.item=item">{{item}}</a>
        </li>
      </ul>
      <div>Selected Item: {{selected.item}}</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" ng-click="cancel()">Close</button>
      <button type="button" class="btn btn-primary" ng-click="ok()">Save changes</button>
    </div>
  </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->

//////////////////js //////////////////////////
angular.module('plunker', ['ui.bootstrap']);
var ModalDemoCtrl = function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'modal.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

//////////////////////////

<div class="modal">
	<div class="modal-dialog">
		<div class="modal-content" name="userForm">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 ng-hide='isNew' class="modal-title">Eidt User: {{user.firstname}}</h4>
				<h4 ng-hide='isNew' class="modal-title">New User</h4>
			</div>
			<form class="form-horizontal">
				<fieldset>
					<div class="modal-body">	
						<div class="form-group">
							<label for="inputFirstName" class="col-lg-2 control-label">First Name</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputFirstName"
									placeholder="First Name" ng-model="user.firstname" required>
							</div>
						</div>
			
						<div class="form-group">
							<label for="inputLastName" class="col-lg-2 control-label">Last Name</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputLastName"
									placeholder="Last Name" ng-model="user.lastname" required>
							</div>
						</div>
			
						<div class="form-group">
							<label for="inputAge" class="col-lg-2 control-label">Age</label>
							<div class="col-lg-10">
								<input type="number" class="form-control" id="inputAge"
									placeholder="Age" ng-model="user.age" required>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type='submit' class="btn btn-danger" data-dismiss="modal" ng-click="delete()">Delete</button>
						<button type="submit" class="btn btn-primary" data-dismiss="modal" ng-disabled='!userForm.$valid' ng-click="save()">Save</button>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</div>

