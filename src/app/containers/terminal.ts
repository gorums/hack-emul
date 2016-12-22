import {Component} from '@angular/core';

@Component({
    selector: 'terminal-container',
    styles: [`
        .terminal {
            witdh: 800px;
            height: 600px;
            background: black;
        }
    `],
    template: `
        <div class="terminal">aaa</div>
    `
})
export class Terminal{};