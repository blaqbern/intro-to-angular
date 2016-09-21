## Two-Way Data Binding

- Angular controllers don't need any knowledge of the view

- ```html
  <div class="caption">
    <h3>Thumbnail label</h3>
    <input class="form-control" ng-model="imageInput" />
    <button class="btn btn-default" ng-click="addComment()">
      click me
    </button>
    <p ng-show="imageComments.length">{{imageComments}}</p>
  </div>
```

- ```js
  function CommentController($scope) {
      $scope.imageComments = [];
      $scope.addComment = function() {
        $scope.imageComments.push($scope.imageInput);
        $scope.imageInput = '';
      };
    });
```
