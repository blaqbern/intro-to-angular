## Two-Way Data Binding

- Angular allows us to work with the DOM declaratively.

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

- directives: `ng-model`, `ng-click`, `ng-show`
- `{{ }}` allows us to access our `$scope`, which holds our model
