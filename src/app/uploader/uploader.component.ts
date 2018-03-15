import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  form: FormGroup;
  loading = false;
  array;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      file: null
    });
  }

  clearFile() {

  }

  onSubmit() {
    const formModel = this.form.value;

    const raw = window.atob(formModel.file.value);
    const rawLength = raw.length;
    this.array = new Uint8Array(new ArrayBuffer(rawLength));
    let i;

    for (i = 0; i < rawLength; i++) {
      this.array[i] = raw.charCodeAt(i);
    }
    // console.log(raw + ' array ' + this.array.length);

    for (i = 0 ; i < this.array.length ; i++) {
      // console.log(this.array[i].toString(16));
    }

    // console.log(this.array.length);

    this.loading = true;
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('file').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

}
