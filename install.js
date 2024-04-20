module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "mkdir app",
      ]
    }
  },{
      method: "fs.download",
      params: {
        dir: "app",
        uri: "https://github.com/Particle1904/DatasetHelpers/releases/download/v2.4.1/win-x64.zip"
      }
    },{
      method: "fs.download",
      params: {
        dir: "app",
        uri: "https://github.com/Particle1904/DatasetHelpers/releases/download/v2.4.1/linux-x64.zip"
      }
    }, {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{os.platform() === 'win32' ? 'unzip win-x64.zip' : 'unzip linux-x64.zip'}}"
        ]
      }
    },{
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }]
  }
