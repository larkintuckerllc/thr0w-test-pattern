(function() {
  'use strict';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var frameEl = document.getElementById('my_frame');
    thr0w.setBase('http://localhost'); // UPDATE TO YOUR SERVER
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var grid = new thr0w.Grid(
        frameEl,
        document.getElementById('my_content'), [
          [0, 1, 2]
        ]);
      thr0w.svg.manage(grid, document.getElementById('my_svg'), 10);
    }
    function messageCallback() {}
  }
})();
