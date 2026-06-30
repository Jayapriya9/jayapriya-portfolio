import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0"
     style="z-index: 9999; background: rgba(10,14,39,0.85); backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <span class="font-display font-bold text-lg tracking-tight">
          Jayapriya<span class="gradient-text">.dev</span>
        </span>
        <ul class="hidden md:flex gap-8 text-sm font-medium" style="color:#94A8BF">
          <li><a (click)="scrollTo('about')"      class="hover:text-white transition-colors duration-200 cursor-pointer">About</a></li>
          <li><a (click)="scrollTo('skills')"     class="hover:text-white transition-colors duration-200 cursor-pointer">Skills</a></li>
          <li><a (click)="scrollTo('projects')"   class="hover:text-white transition-colors duration-200 cursor-pointer">Projects</a></li>
          <li><a (click)="scrollTo('experience')" class="hover:text-white transition-colors duration-200 cursor-pointer">Experience</a></li>
          <li><a (click)="scrollTo('contact')"    class="hover:text-white transition-colors duration-200 cursor-pointer">Contact</a></li>
        </ul>
        <a href="assets/Resume_Jayapriya_fullstack.pdf" download
           class="hidden md:inline-block btn-primary text-sm" style="padding: 0.5rem 1.2rem;">
          Resume ↓
        </a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
scrollTo(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    const navHeight = 80; // fixed navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
}