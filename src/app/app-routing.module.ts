import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestingComponent } from './testing/testing.component';
import { AboutbloodComponent } from './aboutblood/aboutblood.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { from } from 'rxjs';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'aboutblood', component: AboutbloodComponent},
  {path: 'eligibility', component: EligibilityComponent},
  {path: 'testing', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }



