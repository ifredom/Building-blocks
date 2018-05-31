;
(function (global) {

  function Bblock() {
    return {}
  }
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return Bblock
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = Bblock
  } else {
    global.Bblock = Bblock
  }
})(this);