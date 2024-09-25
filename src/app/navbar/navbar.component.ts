import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { ScrollService } from 'src/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    // Check if the user has already selected dark mode in previous sessions
    const darkModeEnabled = localStorage.getItem('dark-mode');
    if (darkModeEnabled === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode(event: any) {
    console.log('Dark mode toggled:', event.target.checked);
    this.isDarkMode = event.target.checked;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true'); // Save preference in local storage
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false'); // Save preference in local storage
    }
  }
  scrollToContact() {
    this.scrollService.triggerScrollToContact();
  }
}
