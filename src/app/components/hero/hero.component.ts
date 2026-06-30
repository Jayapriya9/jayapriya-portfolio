import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective , NgFor],
  template: `
 <section class="relative flex items-center min-h-screen" style="padding-top: 120px;">
  <div class="section-pad w-full">
    <div class="flex flex-col md:flex-row items-center justify-between gap-12">

      <!-- LEFT: Text content -->
      <div appReveal class="flex-1">
        <!-- Avatar -->
  <!-- Avatar + Name/Title row -->
<div style="display:flex; align-items:center; gap:20px; margin-bottom:24px; flex-wrap:wrap;">

  <div style="width:88px; height:88px; border-radius:16px;
              border:2px solid rgba(59,130,246,0.4);
              box-shadow:0 0 30px rgba(59,130,246,0.3);
              overflow:hidden; background:#121b2e; flex-shrink:0;
              position:relative;">
    <img src="assets/profileimage.png" alt="Jayapriya Singh"
         style="width:100%;height:100%;object-fit:cover;"/>
    <div style="position:absolute; bottom:4px; right:4px;
                width:12px; height:12px; border-radius:50%;
                background:#28c840; border:2px solid #0a0e27;"></div>
  </div>

  <div>
    <p style="font-size:1.1rem; font-weight:700; margin:0 0 2px; color:#E5EDF5;">
      Jayapriya Singh
    </p>
    <p style="font-size:0.85rem; font-weight:600; margin:0;
              color:#06B6D4; letter-spacing:0.04em;">
      FULL-STACK DEVELOPER
    </p>
  </div>

</div>

        <h1 class="font-display font-bold leading-tight mb-6"
            style="font-size: clamp(2.4rem, 5vw, 4.2rem); max-width: 600px;">
          Building
          <span style="background:linear-gradient(90deg,#3B82F6,#06B6D4);
                       -webkit-background-clip:text;
                       -webkit-text-fill-color:transparent;
                       background-clip:text;">
            reliable, high-performance
          </span>
          web applications.
        </h1>

        <p class="mb-10 leading-relaxed"
           style="color:#94A8BF; font-size:1.1rem; max-width:500px;">
          4+ years of expertise in <strong style="color:#E5EDF5">Angular</strong> &
          <strong style="color:#E5EDF5">ASP.NET Core</strong> — delivering scalable,
          enterprise-grade full-stack solutions for global clients.
        </p>

        <div class="flex flex-wrap gap-4 mb-10">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a (click)="scrollTo('contact')" class="btn-outline" style="cursor:pointer">Get in Touch</a>
          <a href="assets/Jayapriya_Singh_Resume.pdf" download class="btn-outline">Download Resume ↓</a>
        </div>

        <div class="flex flex-wrap gap-3">
          <span *ngFor="let t of techs"
                class="text-xs font-semibold px-3 py-1.5 rounded-full"
                style="background:rgba(59,130,246,0.1);
                       border:1px solid rgba(59,130,246,0.2);
                       color:#94A8BF;">{{ t }}</span>
        </div>
      </div>

    <!-- RIGHT: Stats card -->
<div appReveal style="flex:1; min-width:280px; max-width:420px;
                       display:grid; grid-template-columns:1fr 1fr; gap:16px;">
  <div *ngFor="let stat of stats"
       class="glass neon-hover"
       style="padding:20px; display:flex; flex-direction:column; gap:10px;">
    <span style="font-size:1.6rem">{{ stat.icon }}</span>
    <div>
      <p style="font-size:1.6rem; font-weight:700; margin:0;
                background:linear-gradient(90deg,#3B82F6,#06B6D4);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
                background-clip:text;">
        {{ stat.value }}
      </p>
      <p style="font-size:0.85rem; color:#94A8BF; margin:4px 0 0;">{{ stat.label }}</p>
    </div>
  </div>
</div>

    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       style="color:rgba(148,168,191,0.5); font-size:0.75rem; letter-spacing:0.1em;">
    <span>SCROLL</span>
    <div style="width:1px; height:40px; background:linear-gradient(#3B82F6,transparent);"></div>
  </div>
</section>
  `,
})
export class HeroComponent {
  techs = ['Angular 17+', 'ASP.NET Core', 'TypeScript', 'C#', 'SQL Server', 'Azure', 'Web API', 'RxJS'];

  stats = [
    { icon: '⚡', value: '4+',         label: 'Years of Experience' },
    { icon: '🚀', value: '7',          label: 'Projects Delivered' },
    { icon: '📈', value: '40%',        label: 'Avg. Performance Gains' },
    { icon: '🏆', value: 'Full-Stack', label: 'ASP.NET Core + Angular' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  }
}
