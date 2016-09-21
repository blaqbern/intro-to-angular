## Two-Way Data Binding

- If we need to update the view, as we did in the jQuery example, simply change the markup:

- ```html
  <div class="caption">
    <h3>Thumbnail label</h3>
    <div class="panel panel-default">
      <div class="panel-heading">Comments</div>
      <div class="panel-body">
        <input class="form-control" ng-model="imageInput" />
        <button class="btn btn-default" ng-click="addComment()">
          click me
        </button>
        <p ng-show="imageComments.length">{{imageComments}}</p>
      </div>
    </div>
  </div>
```

- No update needed for the controller, it operates completely outside of the view and the DOM
