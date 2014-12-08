// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EnvioService();
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

      service.initialize().done(function () {
        renderHomeView();
    });
    /* --------------------------------- Event Registration -------------------------------- */
    
    document.addEventListener('deviceready', function () {
    FastClick.attach(document.body);
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Envia UOC", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */
function findByName() {
    service.findByName($('.search-key').val()).done(function (envios) {
        $('.content').html(employeeListTpl(envios));
    });
}
function renderHomeView() {
    $('body').html(homeTpl());
    $('.search-key').on('keyup', findByName);
}

}());