import { ClientsService } from './../../services/clients.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  errorMessage: string;
  user;
  $event; // uploaded image
  picTab: Array<any> = []; // display
  picSend: (File | Blob)[] = []; // send to firebase
  message; // for the pic

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private userS: ClientsService
  ) {}

  ngOnInit() {
    this.initForm();
    //  this.compS.getCompany(localStorage.getItem('id')).subscribe(
    //  (data) => this.user = data
    // );
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit() {
    this.user = {
      idUser: '',
      name: this.userForm.get('name').value,
      age: this.userForm.get('age').value,
      created: Date.now(),
      enabled: true,
      genre: this.userForm.get('genre').value,
      address: this.userForm.get('address').value,
      number: this.userForm.get('number').value,
      email: this.userForm.get('email').value,
      idCDC: '',
      image: ''
    };

    this.openDialog();
  }
  upload(event) {
    this.picSend = event.target.files[0];
    const reader = new FileReader();
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    console.log(this.picSend);

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.picTab.push({ image: reader.result });
    };
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data === 'ok') {
        this.userS.addClient(this.user, this.picSend);
        this.router.navigate(['/clients']);
      }
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
