var utils = (function () {

  function docReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(fn, 1);
    }
  }

  return {
    docReady
  };

})();