import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ClickersService} from '../../services';

@Component({
    templateUrl: './eventPage.html',
})

export class EventPage {

    public clickerService: ClickersService;
    public title: string;
    private nav: NavController;

    constructor(nav: NavController, clickerService: ClickersService) {
        this.nav = nav;
        this.clickerService = clickerService;
        this.title = 'Bon Iver';
    }
}
