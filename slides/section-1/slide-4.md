## jQuery

- ```html
  <div id="myImage" class="thumbnail">
    <img src="..." alt="...">
    <div class="caption">
      <h3>Thumbnail label</h3>
      <input class="form-control" />
      <button class="btn btn-default">click me</button>
    </div>
  </div>
```

- ```js
  $('#myImage').find('.caption').find('button')
    .on('click', function(e) {
      var caption = $(this).closest('.caption');
      var input = caption.find('input');
      caption.append($('<p>' + input.val() + '</p>'));
      input.val('');
    });
```
