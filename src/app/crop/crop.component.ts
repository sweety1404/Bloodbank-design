import { Component } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';



@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
  }



// import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

// export class YourComponent {
//     imageChangedEvent: any = '';
//     croppedImage: any = '';

//     fileChangeEvent(event: any): void {
//         this.imageChangedEvent = event;
//     }
//     imageCropped(event: ImageCroppedEvent) {
//         this.croppedImage = event.base64;
//     }
//     imageLoaded(image: LoadedImage) {
//         // show cropper
//     }
//     cropperReady() {
//         // cropper ready
//     }
//     loadImageFailed() {
//         // show message
//     }
// }


// import { NgModule } from '@angular/core';
// import { ImageCropperModule } from 'ngx-image-cropper';

// @NgModule({
//     imports: [
//         ...
//         ImageCropperModule
//     ],
//     declarations: [
//         ...
//     ],
//     exports: [
//         ...
//     ],
//     providers: [
//         ...
//     ]
// })
// export class YourModule {
// }