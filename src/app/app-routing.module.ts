import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./routes/home/home.component";
import {AuthenticationComponent} from "./routes/authentication/authentication.component";
import {RegistrationComponent} from "./routes/authentication/registration/registration.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {ForgotComponent} from "./routes/forgot/forgot.component";
import {RegistrationWithGoogleComponent} from "./routes/authentication/registration-with-google/registration-with-google.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminHomeComponent} from "./routes/admin/admin-home/admin-home.component";

// http://home/ -> HomeComponent
// http://enterance -> AuthenticationComponent

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/entrance', pathMatch: 'full'},
      {path: 'entrance', component: AuthenticationComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'forgot', component: ForgotComponent},
      {path: 'registrationWithGoogle', component: RegistrationWithGoogleComponent}
    ]
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: '',
    component: AdminHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
