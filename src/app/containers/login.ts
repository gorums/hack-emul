import {Component} from '@angular/core';

@Component({
    selector: 'login-container',
    template: `
        <div>
            <terminal
                [consoleTitle]="loginTitle"
                (onEnterHandler)="onCmdHandler($event)"                
            ></terminal>
        </div>
    `
})
export class LoginContainer {
    loginTitle: string = "Terminal Login";

    onCmdHandler(cmd: string){        
        this.loginTitle = cmd;
    }    
};