import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section id="experience" class="section-pad">
      <div appReveal>
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color:#06B6D4">Experience</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-10">Where I've been</h2>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 top-0 bottom-0 w-px"
             style="background:linear-gradient(#3B82F6,#06B6D4,transparent); margin-left:7px;"></div>

        <div class="space-y-10 pl-10">
          <div *ngFor="let job of jobs; let i = index"
               appReveal [class]="'reveal-delay-' + (i+1)">
            <!-- Dot -->
            <div class="absolute"
                 style="width:16px;height:16px;border-radius:50%;
                        background:linear-gradient(135deg,#3B82F6,#06B6D4);
                        margin-left:-9px; margin-top:4px;
                        box-shadow:0 0 12px rgba(59,130,246,0.6);">
            </div>

            <div class="glass neon-hover p-6">
              <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 class="font-display font-bold text-lg">{{ job.role }}</h3>
                <span class="text-sm" style="color:#94A8BF">{{ job.period }}</span>
              </div>
              <p class="text-sm font-semibold mb-4" style="color:#06B6D4">{{ job.org }}</p>
              <ul class="space-y-2">
                <li *ngFor="let pt of job.points"
                    class="text-sm leading-relaxed flex gap-2" style="color:#94A8BF">
                  <span style="color:#3B82F6;flex-shrink:0;margin-top:2px">▸</span>
                  <span>{{ pt }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div appReveal class="mt-14 reveal-delay-3">
        <h3 class="text-xs uppercase tracking-widest mb-4 font-semibold" style="color:#94A8BF">Education</h3>
        <div class="glass neon-hover p-6 max-w-xl">
          <h4 class="font-display font-bold text-lg mb-1">University Institute of Technology, RGPV</h4>
          <p class="text-sm mb-2" style="color:#94A8BF">Jun 2017 — May 2021</p>
          <p class="text-sm" style="color:#94A8BF">
            B.Tech in Mechanical Engineering (Extensive Software Development Experience) — CGPA: 7.54/10
          </p>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  jobs = [
    {
      role: 'Software Engineer',
      org: 'MPOnline Limited, Bhopal',
      period: 'Jan 2025 — Present',
      points: [
        'Led development of enterprise web apps using C#, ASP.NET Core, ASP.NET WebForms, Web API, and SQL Server.',
        'Improved application performance by 40% through efficient API design, query optimization, and business logic enhancements.',
        'Integrated Angular UI modules with backend services using lazy loading, reactive forms, and dependency injection.',
        'Deployed and maintained applications on Azure App Services with high availability and auto-scaling.',
      ],
    },
    {
      role: 'Senior System Engineer',
      org: 'Infosys, Indore',
      period: 'Jan 2022 — Dec 2024',
      points: [
        'Designed and developed a dynamic Account Opening Web Application for a U.S.-based banking client, accelerating onboarding by 50%.',
        'Engineered responsive, scalable UI components improving page performance and UX by 40%.',
        'Re-architected REST API caching mechanisms — 35% reduction in response times and 15% reduction in server costs.',
        'Collaborated in Agile Scrum team using Git, JIRA, and CI/CD pipelines for automated deployments.',
      ],
    },
  ];
}
