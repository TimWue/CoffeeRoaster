import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sideBarOwn', {static: true}) sideBar : ElementRef;
  constructor(private renderer: Renderer2) { }
  faBars = faBars;
  showIcon = true;
  ngOnInit(): void {
  }

  openNav(){

  }
  closeNav(){
    this.renderer.setStyle(this.sideBar.nativeElement, 'width', '0');
  }
  toggleIcon(){
    this.showIcon = !this.showIcon;
    // if(!this.showIcon){
    //   setTimeout(() => {
    //       this.showIcon = !this.showIcon;
    //   }, 50);
    // } else {
    //     this.showIcon = !this.showIcon;
    // }

  }
}
