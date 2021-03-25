import { CdcService } from './../../../services/cdc.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-cdc',
  templateUrl: './add-cdc.component.html',
  styleUrls: ['./add-cdc.component.scss']
})
export class AddCDCComponent implements OnInit {
  cdcForm: FormGroup;
  errorMessage: string;
  cdc;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private cdcS: CdcService
  ) {}

  ngOnInit() {
    this.initForm();
    //  this.compS.getCompany(localStorage.getItem('id')).subscribe(
    //  (data) => this.user = data
    // );
  }
  initForm() {
    this.cdcForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.cdc = {
      idCdc: '',
      name: this.cdcForm.get('name').value,
      address: this.cdcForm.get('address').value,
      created: Date.now(),
      enabled: true,
      number: this.cdcForm.get('number').value,
    };

    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: this.cdc
    });

    dialogRef.afterClosed().subscribe((data:any) => {
      if (data) {
        this.cdcS.addCdc(this.cdc);
        this.router.navigate(['/allCDC']);
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
    this.dialogRef.close(false);
  }
  save() {
    this.dialogRef.close(true);
  }
}
