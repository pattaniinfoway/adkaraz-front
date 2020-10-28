import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss']
})
export class PostAdComponent implements OnInit {
    public thumbValidate:boolean=true;
    public imgValidate:boolean=true;
   	urls2 = new Array<string>();
   	fullpath2: Array<File>= [];
	files: any = [];
   	urls = new Array<string>();
   	thumb_name = '';
   	fullpath: Array<File>= [];
   	public thumb;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.spinner.show();
 
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);
  }
  uploadFile(event) {
      let file = event.target.files[0];
      if (file) {
          this.thumb_name = file.name;
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
            this.thumb = e.target.result;
          }
          reader.readAsDataURL(file);
          this.fullpath.push(file);
           if(this.fullpath.length > 0){
              this.thumbValidate = true;
           }else{
             this.thumbValidate = false;
           }
    }
  }
  uploadFile2(event) {
      let files = event.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls2.push(e.target.result);
          }
          reader.readAsDataURL(file);
          this.fullpath2.push(file);
          this.files.push(file.name);
          if(this.fullpath2.length > 0){
            this.imgValidate = true;
          }else{
            this.imgValidate = false;
          }
        }
    }

  }
  deleteAttachment(index) {
    this.urls2.splice(index, 1);
  }
}
