var require = {
  paths: {
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
    d3: '//cdnjs.cloudflare.com/ajax/libs/d3/3.1.6/d3.min',
    // Had to reverse codeMirror and codeMirrorJS in order to get file loading order right
    codeMirrorJS: '//cdnjs.cloudflare.com/ajax/libs/codemirror/3.12.0/codemirror.min',
    codeMirror: '//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/javascript',
    inlet: '../lib/inlet.min'
  },
  shim: {
    underscore: { exports: '_' },
    d3: { exports: 'd3' },
    codeMirror: {
      deps: ['codeMirrorJS'],
      exports: 'CodeMirror'
    },
    codeMirrorJS: {
      exports: 'CodeMirror'
    },
    inlet: { exports: 'Inlet' }
  }
};
