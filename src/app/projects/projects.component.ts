import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  currentIndex: number = 0;
  totalSets: number = 2; // Two sets of 4 projects each

  ngOnInit() {
    // Start auto-scroll when the component is initialized
    if (window.innerWidth > 768) {
      // Start auto-scroll when the component is initialized only for desktop
      setInterval(() => this.autoScroll(), 10000); // Auto-scroll every 10 seconds
    }else{
    setInterval(() => this.autoScroll(), 10000);} // Auto-scroll every 10 seconds
  }

  autoScroll() {
    const grid = document.querySelector('.projects-grid') as HTMLElement;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

    // Increment the index and reset it when it exceeds the number of sets
    this.currentIndex = (this.currentIndex + 1) % this.totalSets;

    // Update the grid position for auto-scroll
    grid.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.currentIndex].classList.add('active');
  }

  scrollToProject(index: number) {
    const grid = document.querySelector('.projects-grid') as HTMLElement;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

    // Set the current index to the clicked dot's index
    this.currentIndex = index;

    // Update the grid position for manual scroll
    grid.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.currentIndex].classList.add('active');
  }
}
