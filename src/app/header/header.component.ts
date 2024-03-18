import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header_variable=false;
  collapseVar = true

  constructor() { }
  
  ngOnInit() { }
  
  @HostListener("document:scroll") 
  scrollFunction() {
    if((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
      this.header_variable=true;
      return true;
    }
    else if(!this.collapseVar) {
      this.header_variable=true;
      return true;
    }
    else {
      this.header_variable=false;
      return false;
    }
  }
  
  menuClick() {
    
    if(this.collapseVar && !this.scrollFunction()){
      this.header_variable=true
    }
    else if(!this.collapseVar && !this.scrollFunction()) {
      this.header_variable=false;
    }
    else if(!this.collapseVar && this.scrollFunction()) {
      this.header_variable = true;
    }
    this.collapseVar = !this.collapseVar;
    
  }

  toPage(name: string) {
    document.getElementById(name)?.scrollIntoView();
    this.menuClick()
  }
}
