define(['codeMirror', 'inlet', 'underscore'],
    function(CodeMirror, Inlet, _){
  var codeMirror = CodeMirror.fromTextArea(editor);
  codeMirror.setOption('mode', 'javascript');
  codeMirror.setSize('100%', '100%');
  Inlet(codeMirror);

  var exec = _.throttle(function(){
    var text = codeMirror.getValue();
    window.location.hash = encodeURIComponent(text);
    eval(text);
  }, 30);

  codeMirror.on('change', exec);
  window.addEventListener('resize', exec);

  codeMirror.setOption('value', decodeURIComponent(window.location.hash.substr(1)));
});
