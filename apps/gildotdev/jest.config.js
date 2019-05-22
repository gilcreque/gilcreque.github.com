module.exports = {
  name: "gildotdev",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/gildotdev/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
