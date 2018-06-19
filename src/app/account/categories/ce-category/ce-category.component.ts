import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators, FormControlName, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-ce-category',
  templateUrl: './ce-category.component.html',
  styleUrls: ['./ce-category.component.scss']
})
export class CECategoryComponent implements OnInit {

  // create || edit
  @Input() settings: any;

  // form
  formGroup: FormGroup;

  // file img
  imagePreview: any = '';
  errorImgSize: boolean = false;

  constructor() { }

  ngOnInit() {
    
    // status: create | edit
    if (this.settings.status === 'edit') {
      this.formGroup = new FormGroup({
        name: new FormControl(this.settings.value.name, [Validators.required]),
        image: new FormControl(this.settings.value.image),
      });
      this.imagePreview = this.settings.value.image;
    } else {
      this.formGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        image: new FormControl(null),
      });
      this.imagePreview = '';
    }

  }

  // error image size
  onErrorImgSize() {
    this.errorImgSize = true;
    setTimeout(() => this.errorImgSize = false, 5000);
  }

  // file img
  fileImg(event) {
    if ( event.target.files.length > 0 ) {
      // max size image 5MB
      let maxSize = 5000000;
      if ( event.target.files[0].size <= maxSize ) {
        this.toBase64(event.target.files[0]).then((data) => {
          this.imagePreview = data;
        });
      } else {
        this.onErrorImgSize();
      }
    }
  }

  // file to base64
  toBase64(file: any) {
    const fileReader = new FileReader();
    return new Promise(resolve => {
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e: any) {
            resolve(e.target.result);
        };
    });
  }

  // delete image
  deleteImg() {
    this.imagePreview = '';
  }

  // create new category
  create() {
    const body = {};
    body['name'] = this.formGroup.value.name;
    body['created'] = new Date().getTime();
    this.imagePreview ? body['image'] = this.imagePreview : body['image'] = '';
    console.log('Create ', body);
  }

}
