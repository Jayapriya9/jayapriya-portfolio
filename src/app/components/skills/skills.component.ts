import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section id="skills" class="section-pad">
      <div appReveal>
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color:#06B6D4">Skills</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-10">What I work with</h2>
      </div>

      <div class="space-y-8">
        <div *ngFor="let group of skillGroups; let i = index" appReveal [class]="'reveal-delay-' + (i+1)">
          <h3 class="text-xs uppercase tracking-widest mb-4 font-semibold" style="color:#94A8BF">
            {{ group.title }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <span *ngFor="let skill of group.skills"
                  class="glass neon-hover px-4 py-2 text-sm font-medium cursor-default transition-colors"
                  style="color:#E5EDF5;">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillGroups = [
    {
      title: 'Core',
      skills: ['Angular', 'ASP.NET Core', 'Web API', 'SQL Server', 'Azure', 'REST APIs', 'CI/CD', 'Agile'],
    },
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'C#', 'SQL', 'HTML5', 'CSS3 / SCSS'],
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        'Angular 8–17+', 'RxJS', 'NgRx', 'Angular Material', 'PrimeNG', 'Bootstrap',
        'Components', 'Services', 'Routing', 'Reactive Forms', 'HTTP Client',
        'Dependency Injection', 'Standalone Components', 'Signals', 'Lazy Loading',
        '.NET Core', 'ASP.NET WebForms', 'MySQL', 'Azure App Services',
        'Jasmine / Karma', 'Git / GitHub', 'Azure DevOps', 'Visual Studio',
        'Postman', 'CI/CD Pipelines',
      ],
    },
  ];
}
