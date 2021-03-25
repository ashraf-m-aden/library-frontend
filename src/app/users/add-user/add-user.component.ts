import { AuthService } from './../../services/auth.service';
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
    private userS: ClientsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.user = {
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      enabled: 1,
      email: this.userForm.get('email').value,
    };

    this.openDialog();
  }
  // upload(event) {
  //   this.picSend = event.target.files[0];
  //   const reader = new FileReader();
  //   const mimeType = event.target.files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = 'Only images are supported.';
  //     return;
  //   }
  //   console.log(this.picSend);

  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = () => {
  //     this.picTab.push({ image: reader.result });
  //   };
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe((data:any) => {
      if (data === 'ok') {
        this.userS.addClient(this.user).subscribe(() => {
         this.router.navigate(['/clients']);
        },(error) => {
          this.auth.checkAuthError(error);
        });
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
