define([], function(){
  function exec(){
    evalByAppendingScript(window.location.hash.substr(1));
  }
  exec();
  window.addEventListener('resize', exec);

  /**
   * Using eval() doesn't support degubbing.
   *
   * Using script.innerHTML = '...' also doesn't support debugging.
   *
   * Setting the script tag source to a data URL makes debugging work.
   */
  function evalByAppendingScript(text){
    var s = document.createElement('script');
    s.src = 'data:text/javascript;charset=utf-8,' + text;
    document.body.appendChild(s);
  }
});
