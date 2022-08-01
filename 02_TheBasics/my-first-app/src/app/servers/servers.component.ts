import { Component, OnInit } from '@angular/core'; // NgModule
import { FormsModule } from '@angular/forms'; 

// NgModule({
//   imports: [
//        FormsModule      
// ]})

@Component({
  // selector: 'app-servers',

  selector: '.app-servers',
  
  templateUrl: './servers.component.html',

  // template: '<app-server><\app-server>',

  // template: `<app-server></app-server><h1>This is the server 2 content.</h1><app-server></app-server>`,
  
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No user added.'
  serverName = '';
  serverCreated = false;
  servers = ['Server 2', 'Server 3', 'Server 4', 'Server 5', 'Server 6', 'Server 7']
  showSecret = false;
  logs = [];

  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000)
      setTimeout(() => {
        this.allowNewServer = false;
      }, 10000)
    }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'User Addition Successful. User Name: ' + this.serverName
  }
  
  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggle() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}
