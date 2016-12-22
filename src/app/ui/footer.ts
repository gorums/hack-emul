import {Component} from '@angular/core';

@Component({
    selector: 'ui-footer',   
    template: `
        <footer><div>© {{year}} Hack Emul</div></footer>
    `
})
export class Footer {
    year: number = new Date().getFullYear();
};