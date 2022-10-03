document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    let collaspse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collaspse);
  });
