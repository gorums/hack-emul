import {Component} from '@angular/core';

@Component({
    selector: 'login-container',
    template: `
        <div>
            <terminal
                [consoleTitle]="loginTitle"                
            ></terminal>
        </div>
    `
})
export class LoginContainer {
    loginTitle: string = "Terminal Login";    
};