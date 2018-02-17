$(document).ready(function() {
  const titleCase = function(str) {
    return str
      .split(' ')
      .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  };
  // Title cases strings and converts to a consumable object
  const massageData = function(data) {
    return data.reduce((o, item) => {
      if (typeof item.value === 'string') {
        item.value = titleCase(item.value);
      }
      o[item.name] = item.value;
      return o;
    }, {});
  };
  // Handle adding a new burger
  $('#add-burger-form').submit(function(e) {
    e.preventDefault();
    const data = massageData($(this).serializeArray());
    $.ajax({
      url: '/api/burger',
      type: 'POST',
      data: data
    }).done(data => location.reload());
  });

  // Handle adding a new restaurant
  $('#add-restaurant-form').submit(function(e) {
    e.preventDefault();
    const data = massageData($(this).serializeArray());
    $.ajax({
      url: '/api/restaurant',
      type: 'POST',
      data: data
    }).then(data => location.reload());
  });
  // Update a burger to devoured
  $('.devour-burger').on('click', function() {
    const id = $(this).data('id');
    $.ajax({
      url: `/api/burger/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({
        devoured: true
      })
    }).done(response => location.reload());
  });
  // Delete a burger
  $('.delete-burger').on('click', function() {
    const id = $(this).data('id');
    $.ajax({
      url: `/api/burger/${id}`,
      type: 'DELETE'
    }).done(response => location.reload());
  });
});
