import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header_variable=false;
  collapseVar = true
  isContactPage: boolean = false;

  constructor(private router: Router) { }
  
  ngOnInit() { 
    this.isContact();
  }
  
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

  isContact(): boolean {

    const currentUrl = this.router.url;

    if (currentUrl === '/contact') {
      this.isContactPage = true;
    } else {
      this.isContactPage = false;
    }
    
    return this.isContactPage;
  }
}

