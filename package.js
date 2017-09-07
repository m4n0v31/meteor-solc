Package.describe({
  name: 'm4n0v31:solc',
  summary: 'The solc package provides a compiler build plugin for the Meteor build tool.',
  version: '0.4.20',
  git: 'http://github.com/m4n0v31/meteor-solc'
});

Package.registerBuildPlugin({
  name: "compileSol",
  use: [
    "ecmascript@0.1.0",
    "isobuild:compiler-plugin@1.0.0",
    "caching-compiler@1.0.0"
  ],
  sources: [
    "plugin/handler.js",
  ],
  npmDependencies: {
    "solc": "^0.4.16"
  }
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
});
