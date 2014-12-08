// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

    //service.initialize().done(function () {
      //  console.log("Service initialized");
      service.initialize().done(function () {
        renderHomeView();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    //$('.search-key').on('keyup', findByName);
    /*
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });
    */
    document.addEventListener('deviceready', function () {
    FastClick.attach(document.body);
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */
function findByName() {
    service.findByName($('.search-key').val()).done(function (employees) {
        $('.content').html(employeeListTpl(employees));
    });
}
function renderHomeView() {
    $('body').html(homeTpl());
    $('.search-key').on('keyup', findByName);
}

}());