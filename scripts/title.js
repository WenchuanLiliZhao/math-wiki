(function() {
  // Docsify plugin function
  function changeTitle(hook, vm) {
    hook.doneEach(function() {
      // Wait for DOM to load
      setTimeout(function() {
        // Get the first h1 element's text
        var firstH1 = document.querySelector('.markdown-section h1 span');
        if (firstH1) {
          document.title += " :: " + firstH1.innerHTML + ' - ' + vm.config.name;
        }
      }, 0);
    });
  }

  // Add the plugin to the Docsify plugins array
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(changeTitle);
})();