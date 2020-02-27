import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CdcService } from './../../../services/cdc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdc',
  templateUrl: './cdc.component.html',
  styleUrls: ['./cdc.component.scss']
})
export class CdcComponent implements OnInit {
  canModify = false;
  id;
  Cdc;
  cdcForm: FormGroup;
  constructor(
    private cdcS: CdcService,
    private aR: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.aR.params.subscribe(params => {
      this.id = params.id;
      cdcS.getcdc(this.id).subscribe((data: any) => {
        this.Cdc = data[0];
      });
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.cdcForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      number: ['', [Validators.required]]
    });
  }
  async onSubmit() {
    this.Cdc = {
      name: this.cdcForm.get('name').value,
      address: this.cdcForm.get('address').value,
      enabled: true,
      number: this.cdcForm.get('number').value
    };
    await this.cdcS.updateCdc(this.Cdc);
    this.router.navigate(['/cdc/', this.Cdc.idCdc]);
  }
  async delete() {
    await this.cdcS.deleteCdc(this.Cdc);
    this.router.navigate(['/allCDC']);
  }
  modify() {
    this.canModify = true;
  }
  cancel() {
    this.initForm();
    this.canModify = false;
  }
}
