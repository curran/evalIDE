define(['codeMirror', 'inlet', 'underscore'],
    function(CodeMirror, Inlet, _){
  var codeMirror = CodeMirror.fromTextArea(editor);
  codeMirror.setOption('mode', 'javascript');
  codeMirror.setSize('100%', '100%');
  Inlet(codeMirror);

  var exec = _.throttle(function(){
    var text = codeMirror.getValue();
    window.location.hash = encodeURIComponent(text);
    evalByAppendingScript(text);
  }, 30);

  /**
   * Using eval() doesn't support degubbing.
   *
   * Using script.innerHTML = '...' also doesn't support debugging.
   *
   * Setting the script tag source to a data URL makes debugging work.
   */
  function evalByAppendingScript(text){
    var s = document.createElement('script');
    s.src = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(text);
    document.body.appendChild(s);
  }

  codeMirror.on('change', exec);
  window.addEventListener('resize', exec);

  codeMirror.setOption('value', decodeURIComponent(window.location.hash.substr(1)));
});
