import { Component, OnInit } from '@angular/core';
import {Config} from '../../config.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();
    title = Config.MAIN_HEADING;
    constructor() { }

    ngOnInit() {}
}
