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
  isNotHomePage: boolean = false;

  constructor(private router: Router) { }
  
  ngOnInit() { 
    this.isNotHome();
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

  isNotHome(): boolean {

    const currentUrl = this.router.url;

    if (!currentUrl.includes('/home')) {
      this.isNotHomePage = true;
    } else {
      this.isNotHomePage = false;
    }
    
    console.log(this.isNotHomePage)
    return this.isNotHomePage;
  }
}
