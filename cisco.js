var SSH2Promise = require('ssh2-promise');
class Api {
    constructor(ip, username ,password ) {
      this.sshconfig =  {
        host: ip,
        username: username,
        password: password
      }
      
    }
    
    showrun(){return this._command("sh run")}
    showversion(){return this._command("sh version")}
    showhardware(){return this._command("sh hardware")}
    async _command(command) {
        var ssh = new SSH2Promise(this.sshconfig);
        ssh.connect()
        var out = await ssh.exec(`${command}`)
        ssh.close()
        return out
        
    }
  }
  
  
  module.exports = Api