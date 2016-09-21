# [Intro to Angular](http://blaqbern.github.io/intro-to-angular)

mobomo | 21 Sep 2016 | Chris Blackburn

## What is Angular?

Angular is a JavaScript framework for creating Single Page Applications (SPAs). It incorporates an MVC pattern and two-way data binding.
If this doesn't mean anything to you, don't worry. We'll explore these concepts in the coming sections.

## MVC

Model View Controller is a software design pattern that decouples an application's **data**, **presentation** and **logic**. The controller is responsible for handling events created by the user in the view layer and keeping the model and view in sync.

![MVC diagram](./images/mvc.png)

In the diagram above, the user performs an action, which is then sent to the controller. The controller has knows what to do with a given action and sends the appropriate update to the model. The model sends out a notification on every change, which is received by the controller. The controller then sends the appropriate update to the view to reflect the new state of the model.

This is the basic idea behind MVC, but there are a lot of different ways that it can be implemented. Angular has its own implementation as we'll see in the next section.

## Two-Way Data binding

Angular uses a concept called two-way data binding to keep the model and view in sync. If the model changes, the view reflects this change and vice versa. This allows the controller to be completely separate from the view. So it doesn't need to know anything about what is being rendered or how it's being rendered. This is a departure from something like jQuery where the logic that executes actions needs to know the structure of the DOM elements that it's modifying.

Consider the following markup. Something like this, where we have lots of nested elements, is pretty typical when using a CSS framework like Bootstrap or Foundation.

```html
...
  <div id="myImage" class="thumbnail">
    <img src="..." alt="...">
    <div class="caption">
      <h3>Thumbnail label</h3>
      <input class="form-control" />
      <button class="btn btn-default">click me</button>
    </div>
  </div>
...
```

Suppose we want to allow users to add comments using the input field and button. In jQuery we'd have to do something like this:

```js
// jQuery
$('#myImage').find('.caption').find('button')
  .on('click', function(e) {
    var caption = $(this).closest('.caption');
    var input = caption.find('input');
    caption.append($('<p>' + input.val() + '</p>'));
    input.val('');
  });
```

Notice how we need to know the structure of the DOM--`#myImage`, `.caption`, etc--in order to make this happen with jQuery.

If we decide somewhere down the road that we want to put the comments (and the input and button) in a panel, for some reason, our jQuery code is going to break:

```html
...
  <div class="caption">
    <h3>Thumbnail label</h3>
    <div class="panel panel-default">
      <div class="panel-heading">Comments</div>
      <div class="panel-body">
        <input class="form-control" />
        <button class="btn btn-default">click me</button>
      </div>
    </div>
  </div>
...
```

We going to end up with an empty panel, and all of the comments appended to the bottom of the `.caption` div. So we have to go in and fix this in our jQuery code:

```js
$('#myImage').find('.caption').find('button')
  .on('click', function(e) {
    var caption = $(this).closest('.caption');
    var input = caption.find('input');
    // we need to append to the panel
    var panel = caption.find('.panel-body');
    panel.append($('<p>' + input.val() + '</p>'));
    input.val('');
  });
```

Things are starting to get a bit complicated. Any such change could potentially require a similar fix.

Thankfully we don't need to worry about this when working with Angular. Angular uses what are called directives to allow us to work with the DOM in a more declarative way.

```html
...
  <div class="caption">
    <h3>Thumbnail label</h3>
    <input class="form-control" ng-model="imageInput" />
    <button class="btn btn-default" ng-click="addComment()">
      click me
    </button>
    <p ng-show="imageComments.length">{{imageComments}}</p>
  </div>
...
```

Notice the `ng-model`, `ng-click` and `ng-show` directives. These are built in to Angular to help us perform tasks in the DOM such as mutate our model or conditionally show content. Also notice the `{{}}`. This syntax allows us to access our `$scope`, which holds our model.

Now in our controller we can implement the same functionality that we had before, but without any knowledge about the structure of the DOM.

```js
angular.module('app', [])
  .controller('CommentController', function($scope) {
    $scope.imageComments = [];
    $scope.addComment = function() {
      $scope.imageComments.push($scope.imageInput);
      $scope.imageInput = '';
    };
  });
```

Suppose as before, that we want to put the comments in a panel:

```html
...
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
...
```

That's it! We just update our markup and we're good to go. The logic in our controller will continue to work as though nothing changed. The controller performs its work completely separately from the view, and isn't affected at all by changes in the template. As our app gets more complex, this is going to be a huge benefit.
