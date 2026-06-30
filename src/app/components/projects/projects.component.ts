import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

interface Project {
  title: string; org: string; points: string[]; tags: string[]; gradient: string; icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section id="projects" class="section-pad">
      <div appReveal>
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color:#06B6D4">Projects</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-10">Project Work</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div *ngFor="let p of projects; let i = index"
             appReveal
             [class]="'glass neon-hover overflow-hidden reveal-delay-' + ((i % 2) + 1)"
             style="transition: transform 0.3s ease, box-shadow 0.3s ease;">
          <div class="h-1 w-full" [style.background]="p.gradient"></div>
          <div class="p-6">
            <div class="flex items-start gap-3 mb-3">
              <span style="font-size:1.6rem">{{ p.icon }}</span>
              <div>
                <h3 class="font-display font-bold text-lg leading-tight">{{ p.title }}</h3>
                <p class="text-xs font-semibold uppercase tracking-widest mt-1" style="color:#06B6D4">
                  {{ p.org }}
                </p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li *ngFor="let pt of p.points"
                  class="text-sm leading-relaxed flex gap-2" style="color:#94A8BF">
                <span style="color:#3B82F6; margin-top:2px; flex-shrink:0">▸</span>
                <span>{{ pt }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of p.tags"
                    class="text-xs font-semibold px-3 py-1 rounded-full"
                    style="background:rgba(59,130,246,0.1);
                           border:1px solid rgba(59,130,246,0.2);
                           color:#94A8BF;">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MPPSC Recruitment Portal', icon: '🏛️',
      org: 'MP Online Ltd. — MPPSC',
      points: [
        'Built call letter generation, recruitment application forms, and objection modules.',
        'Implemented candidate registration, eligibility validation, and result tracking.',
      ],
      tags: ['ASP.NET Core', 'Web API', 'Angular', 'SQL Server'],
      gradient: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
    },
    {
      title: 'DHS Counselling System', icon: '🏥',
      org: 'MP Online Ltd. — Directorate of Health Services',
      points: [
        'Built end-to-end counselling workflows — registration, choice filling, seat allotment.',
        'Integrated online payment processing into the counselling flow.',
      ],
      tags: ['Angular', 'ASP.NET Core', 'Web API', 'SQL Server', 'Azure'],
      gradient: 'linear-gradient(90deg,#06B6D4,#3B82F6)',
    },
    {
      title: 'RVSKVV Recruitment Forms', icon: '🎓',
      org: 'MP Online Ltd. — RVSKVV',
      points: [
        'Built dynamic recruitment forms for multiple posts with post-specific eligibility fields.',
        'Implemented document uploads, validation rules, and responsive design for rural access.',
      ],
      tags: ['Angular', 'ASP.NET Core', 'Web API', 'SQL Server'],
      gradient: 'linear-gradient(90deg,#3B82F6,#818cf8)',
    },
    {
      title: 'TRC — Teachers Recruitment Counselling', icon: '📚',
      org: 'MP Online Ltd. — DPI',
      points: [
        'Built registration, document verification, choice/re-choice filling, and seat allotment workflows.',
        'Supported merit list publishing and allotment letter generation for statewide teacher recruitment.',
      ],
      tags: ['Angular', 'ASP.NET Core', 'Web API', 'SQL Server', 'Azure'],
      gradient: 'linear-gradient(90deg,#06B6D4,#818cf8)',
    },
    {
      title: 'Citizens Account Opening (CAO)', icon: '🏦',
      org: 'Infosys — U.S. Banking Client',
      points: [
        'Architected end-to-end digital onboarding — KYC, document upload, account verification.',
        'Cut onboarding cycle time by 30% while ensuring regulatory compliance.',
      ],
      tags: ['Angular 14+', 'TypeScript', 'REST APIs'],
      gradient: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
    },
    {
      title: 'Business Account Opening (BAO)', icon: '💼',
      org: 'Infosys — U.S. Banking Client',
      points: [
        'Extended onboarding platform for business/commercial customers with business-specific KYC.',
        'Reused and adapted shared Angular components from CAO to accelerate delivery.',
      ],
      tags: ['Angular 14+', 'TypeScript', 'REST APIs'],
      gradient: 'linear-gradient(90deg,#06B6D4,#3B82F6)',
    },
    {
      title: 'Fiduciary Account Opening (FAO)', icon: '⚖️',
      org: 'Infosys — U.S. Banking Client',
      points: [
        'Extended onboarding for fiduciary accounts — trusts, estates, and beneficiaries.',
        'Handled fiduciary-specific documentation, authorization, and verification requirements.',
      ],
      tags: ['Angular 14+', 'TypeScript', 'REST APIs'],
      gradient: 'linear-gradient(90deg,#818cf8,#06B6D4)',
    },
  ];
}
