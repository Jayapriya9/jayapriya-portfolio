import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreeSceneService } from './three-scene.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent,
    SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent,
  ],
  template: `
    <canvas #bgCanvas id="bg-canvas"></canvas>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>
    <footer class="relative z-10 text-center text-sm py-8 border-t border-white/5"
            style="color: rgba(148,168,191,0.6)">
      © 2026 Jayapriya Singh — Built with Angular & Three.js
    </footer>
  `,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private three: ThreeSceneService) {}

  ngAfterViewInit(): void {
    this.three.init(this.canvasRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.three.destroy();
  }
}
