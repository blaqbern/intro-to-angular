## jQuery

- A change in our markup requires us to update the JavaScript too.

- ```html
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
```

- ```js
  $('#myImage').find('.caption').find('button')
    .on('click', function(e) {
      var caption = $(this).closest('.caption');
      var input = caption.find('input');
      var panel = caption.find('.panel-body');
      panel.append($('<p>' + input.val() + '</p>'));
      input.val('');
    });
```
