$(document).ready(function() {
  $('#add-burger-form').submit(function(e) {
    e.preventDefault();
    const data = $(this)
      .serializeArray()
      .reduce((o, item) => {
        o[item.name] = item.value;
        return o;
      }, {});
    $.ajax({
      url: '/api/burger',
      type: 'POST',
      data: data
    }).done(data => renderList());
  });
  $('#add-restaurant-form').submit(function(e) {
    e.preventDefault();
    const data = $(this)
      .serializeArray()
      .reduce((o, item) => {
        o[item.name] = item.value;
        return o;
      }, {});
    $.ajax({
      url: '/api/restaurant',
      type: 'POST',
      data: data
    }).then(data => renderList());
    renderRestaurantList();
  });

  const renderList = function(type) {
    $.get('/api/all').then(data => data.map(item => console.log(item)));
  };
});
