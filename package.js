Package.describe({
  name: 'silentcicero:solc',
  summary: 'The solc package provides a compiler build plugin for the Meteor build tool.',
  version: '0.2.6',
  git: 'http://github.com/SilentCicero/meteor-solc'
});

Package.registerBuildPlugin({
    name: "compileSol",
    use: [
        "ecmascript@0.3.0",
        "silentcicero:solc-compiler@0.2.1",
        "ethereum:web3@0.15.1"
    ],
    sources: [
        "plugin/handler.js",
    ]
});
