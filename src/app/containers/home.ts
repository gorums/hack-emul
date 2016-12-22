import {Component} from "@angular/core";

@Component({
    selector: "home-container",
    styles: [`
        .app-terminal {
            padding-top: 5%;
        }
    `],
    template: `
    <div>
        <div class="row center-xs app-terminal">
            <div class="col-xs-6">
                <div class="box">
                    <login-container></login-container>
                </div>
            </div>
        </div>  
        <div class="row center-xs app-terminal">
            <ui-footer></ui-footer>
        </div>
    </div>   
    `
})
export class HomeContainer {};