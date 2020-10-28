import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('ar');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'ar');
   }

  ngOnInit(): void {
  }
  switchLang(event){
  	 this.translate.use(event.target.value);
  }
}
