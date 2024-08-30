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
        "chmod +x DatasetProcessorDesktop",
        "./DatasetProcessorDesktop"
      ],
      on: [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
    }
  },]
}
