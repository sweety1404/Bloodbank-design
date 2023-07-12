import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestingComponent } from './testing/testing.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps' 
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewComponent } from './view/view.component';
import { VideoComponent } from './video/video.component';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { CropComponent } from './crop/crop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AlertboxComponent } from './alertbox/alertbox.component';
import { RatingComponent } from './rating/rating.component';
import { StudentsComponent } from './students/students.component';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutbloodComponent } from './aboutblood/aboutblood.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { SignupComponent } from './signup/signup.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    // LoginComponent,
    AboutComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    TestingComponent,
    CarouselBasicComponent,
    AccordionComponent,
    ChartComponent,
    GraphComponent,
    MapComponent,
    ViewComponent,
    VideoComponent,
    TableComponent,
    CropComponent,
    AlertboxComponent,
    RatingComponent,
    StudentsComponent,
    FetchdataComponent,
    ContactformComponent,
    AboutbloodComponent,
    EligibilityComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    GoogleMapsModule,
    PdfViewerModule,
    DataTablesModule,
    ImageCropperModule,
    NgbRatingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
