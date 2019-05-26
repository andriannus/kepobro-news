import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    window.onscroll = () => this.scroll();
  }

  public scroll(): void {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById('btnBackToTop').style.display = 'block';
    } else {
      document.getElementById('btnBackToTop').style.display = 'none';
    }
  }

  public toTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
