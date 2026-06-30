import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="contact" class="section-pad">
      <div appReveal>
        <div class="glass neon-hover text-center py-16 px-6 relative overflow-hidden">
          <!-- Background glow blobs -->
          <div style="position:absolute;top:-60px;left:-60px;width:220px;height:220px;
                      background:radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%);
                      border-radius:50%;pointer-events:none;"></div>
          <div style="position:absolute;bottom:-60px;right:-60px;width:220px;height:220px;
                      background:radial-gradient(circle,rgba(6,182,212,0.15),transparent 70%);
                      border-radius:50%;pointer-events:none;"></div>

          <div class="relative z-10">
            <p class="text-sm font-semibold tracking-widest uppercase mb-4" style="color:#06B6D4">Contact</p>
            <h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's build something
              <span style="background:linear-gradient(90deg,#3B82F6,#06B6D4);
                           -webkit-background-clip:text;
                           -webkit-text-fill-color:transparent;
                           background-clip:text;">
                great
              </span>
            </h2>
            <p class="mb-8 text-lg" style="color:#94A8BF; max-width:480px; margin:0 auto 2rem;">
              Open to full-stack ASP.NET Core + Angular roles at top IT companies.
              Let's talk.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a href="mailto:jayapriyasingh@gmail.com" class="btn-primary">
                Email Me
              </a>
              <a href="https://linkedin.com/in/jayapriya-singh-2314551b4"
                 target="_blank" class="btn-outline">
                LinkedIn
              </a>
              <a href="assets/Resume_Jayapriya_fullstack.pdf" download class="btn-outline">
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {}
