import { Component, OnInit } from '@angular/core';
import {ErabiltzaileService} from "../erabiltzaile-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-erabiltzaile',
  templateUrl: './add-erabiltzaile.component.html',
  styleUrls: ['./add-erabiltzaile.component.css']
})
export class AddErabiltzaileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private erabiltzaileService: ErabiltzaileService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  onSubmit() {
    this.erabiltzaileService.addErabiltzaile(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-erabiltzaileak']);
      });
  }

}
