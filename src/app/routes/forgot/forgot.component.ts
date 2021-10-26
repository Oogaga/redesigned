import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RegExpData} from "../../static/reqexp_data";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {



  restorePassForm =  new FormControl(null, [
      Validators.required,
      Validators.pattern(RegExpData.EMAIL_VALIDATOR)
    ])

  private isRestoredEmailInvalid: any;
  private emailNotFound: any;


  constructor(private service: UsersService) {
  }

  ngOnInit(): void {
  }


  restorePass() {
    this.isRestoredEmailInvalid = false;
    if (this.restorePassForm.invalid) {
      this.isRestoredEmailInvalid = true;
      return;
    }

    this.service.restorePassword(this.restorePassForm.value).subscribe((result) => {
      this.emailNotFound = false;
      this.openDialogSuccess();
    }, (error) => {
      if (error.status === 200) {
        this.emailNotFound = false;
        this.openDialogSuccess();
      } else {
        this.emailNotFound = true;
      }
    });
  }

  openDialogSuccess(): void {
    // const dialogRef = this.dialog.open(SuccessfulDataRecoveryComponent, {
    //   disableClose: true,
    //   data: {}
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.currentPage = 1;
    //   this.restorePassForm.reset();
    //
    // });
  }
}
