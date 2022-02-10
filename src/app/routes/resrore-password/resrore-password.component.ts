import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {RegExpData} from "../../static/reqexp_data";
import {ActivatedRoute, Router} from "@angular/router";
import {RestorePasswordService} from "../../services/restore-password.service";

@Component({
  selector: 'app-resrore-password',
  templateUrl: './resrore-password.component.html',
  styleUrls: ['./resrore-password.component.css']
})
export class ResrorePasswordComponent implements OnInit {

  code: string = '';
  querySubscription: Subscription;
  block: boolean;

  newPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(RegExpData.PASSWORD_VALIDATOR)
  ]);

  confirmNewPassword = new FormControl('', [Validators.required,
    this.confirmPasswordValidator(this.newPassword)]
  );

  newPasswordForm = new FormGroup({
    newPassword: this.newPassword,
    confirmNewPassword: this.confirmNewPassword,
  });

  constructor(private route: ActivatedRoute, private router: Router, private restoreService: RestorePasswordService) {
    this.block = false;

    this.querySubscription = route.queryParams
      .subscribe((queryParam: any) => {
        this.code = queryParam['secret_key'];
      });

    this.newPassword.valueChanges.subscribe(data => {
      this.confirmNewPassword.updateValueAndValidity();
    });
  }

  ngOnInit() {
    this.block = false;
    if (this.code) {
      this.restoreService.checkSecretCode(this.code).subscribe(resp => {
        if (resp) {
          this.block = true;
        } else {
          this.router.navigate(['/entrance']);
        }
      }, err => {
        if (err) {
          this.router.navigate(['/entrance']);
        }
      })
    } else {
      this.router.navigate(['/entrance']);
    }
  }

  sendPasswordToChange() {

    Object.keys(this.newPasswordForm.controls).forEach(key => {
      const control = this.newPasswordForm.get(key);
      if (control) {
        control.markAsTouched();
        control.markAsDirty();
      }
    });
    this.newPasswordForm.updateValueAndValidity();
    if (!this.newPasswordForm.valid) {
      return;
    }

    this.restoreService.sendPasswordToChange(this.newPassword.value, this.confirmNewPassword.value, this.code).subscribe(resp => {
      if (resp) {
        this.openDialogSuccess();
        setTimeout(() => this.router.navigate(['/login']), 3000);
      }
    });
  }

  openDialogSuccess(): void {
    // const dialogRef = this.dialog.open(PopupSuccessRestorePassComponent, <any> {
    //   disableClose: true,
    //   data: {}
    // });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

  confirmPasswordValidator(originalPasswordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const confirm = control.value === originalPasswordControl.value;
      return confirm ? {doesntMatch: false} : {doesntMatch: {value: control.value}};
    };
  }
}
