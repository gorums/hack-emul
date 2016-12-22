import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {App} from './app';
import {LoginContainer, HomeContainer} from './app/containers';
import {
    Terminal, 
    Footer
} from './app/ui';

@NgModule({
    declarations: [
        App,
        HomeContainer,
        LoginContainer,
        Terminal,
        Footer
    ],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);