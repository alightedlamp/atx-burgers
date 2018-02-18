$(document).ready(function() {
  const titleCase = function(str) {
    return str
      .split(' ')
      .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  };
  const massageAndPurifyData = function(data) {
    return data.reduce((o, item) => {
      if (typeof item.value === 'string') {
        item.value = titleCase(item.value);
      }
      o[item.name] = DOMPurify.sanitize(item.value).trim();
      return o;
    }, {});
  };

  $('#add-burger-form').submit(function(e) {
    e.preventDefault();
    const data = massageAndPurifyData($(this).serializeArray());
    if (data.name) {
      $.ajax({
        url: '/api/burger',
        type: 'POST',
        data: data
      }).done(data => location.reload());
    } else {
      console.log('Invalid input');
    }
  });

  $('#add-restaurant-form').submit(function(e) {
    e.preventDefault();
    const data = massageAndPurifyData($(this).serializeArray());
    if (data.name && data.address) {
      $.ajax({
        url: '/api/restaurant',
        type: 'POST',
        data: data
      }).then(data => location.reload());
    } else {
      console.log('Invalid input');
    }
  });

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

  $('.delete-burger').on('click', function() {
    const id = $(this).data('id');
    $.ajax({
      url: `/api/burger/${id}`,
      type: 'DELETE'
    }).done(response => location.reload());
  });
});
