module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      path: "app/win-x64",
      message: [
        "start DatasetProcessorDesktop.exe"
      ],
      on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
  },{
    method: "shell.run",
    params: {
      path: "app/linux-x64",
      message: [
        "chmod +x DatasetProcessor.Desktop",
        "./DatasetProcessor.Dekstop"
      ],
      on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
  },]
}
