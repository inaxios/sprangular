import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Erabiltzaile} from "./erabiltzaile/erabiltzaile";
import {ErabiltzaileService} from "./erabiltzaile/erabiltzaile-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Erabiltzaile CRUD gauza';
  erabiltzaileak: Erabiltzaile[];

  constructor(private router: Router, private erabiltzaileService: ErabiltzaileService) {
  }

  getErabiltzaileak() {
    this.erabiltzaileService.getErabiltzaileak().subscribe(data => {
      this.erabiltzaileak = data;
    });
  }

  addErabiltzaile(): void {
    this.router.navigate(['add-erabiltzaile'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getErabiltzaileak();
    });
  }
}
