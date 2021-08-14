import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./routes/home/home.component";
import {AuthenticationComponent} from "./routes/authentication/authentication.component";

// http://home/ -> HomeComponent
// http://entrance/ -> AuthenticationComponent

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'entrance', component: AuthenticationComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
