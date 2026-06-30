import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RevealDirective],
  template: `
    <section id="about" class="section-pad">

      <div appReveal>
        <p class="text-sm font-semibold tracking-widest uppercase mb-2" style="color:#06B6D4">About</p>
        <h2 class="font-display text-3xl md:text-4xl font-bold mb-10">Who I am</h2>
      </div>

      <div style="display:flex; flex-direction:row; align-items:flex-start;
                  gap:48px; flex-wrap:wrap;">

        <!-- LEFT: paragraph + tech badges -->
        <div appReveal style="flex:1; min-width:280px;">
          <p style="color:#94A8BF; font-size:1.08rem; line-height:1.8; margin-bottom:2rem;">
            I'm a full-stack developer with 4+ years of experience building enterprise-grade
            web applications. My core stack is
            <strong style="color:#E5EDF5">Angular</strong> on the front-end and
            <strong style="color:#E5EDF5">ASP.NET Core / Web API</strong> on the back-end,
            with <strong style="color:#E5EDF5">SQL Server</strong> and
            <strong style="color:#E5EDF5">Azure</strong> for data and cloud &mdash;
            end-to-end ownership from UI to deployment, with a focus on clean architecture,
            performance, and scalability.
          </p>

          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <span *ngFor="let t of techs"
                  style="background:rgba(59,130,246,0.1);
                         border:1px solid rgba(59,130,246,0.2);
                         color:#94A8BF; font-size:0.8rem; font-weight:600;
                         padding:6px 14px; border-radius:999px;">
              {{ t }}
            </span>
          </div>
        </div>

        <!-- RIGHT: IDE Code Block with word-by-word typewriter -->
        <div appReveal style="flex:1; min-width:300px; max-width:480px;">
          <div style="background:#0d1117; border-radius:14px; overflow:hidden;
                      border:1px solid rgba(255,255,255,0.08);
                      box-shadow:0 0 40px rgba(59,130,246,0.12);">

            <div style="background:#161b22; padding:12px 16px;
                        display:flex; align-items:center; gap:8px;
                        border-bottom:1px solid rgba(255,255,255,0.06);">
              <div style="width:12px;height:12px;border-radius:50%;background:#ff5f57;"></div>
              <div style="width:12px;height:12px;border-radius:50%;background:#febc2e;"></div>
              <div style="width:12px;height:12px;border-radius:50%;background:#28c840;"></div>
              <span style="font-size:12px;color:#94A8BF;margin-left:12px;
                           font-family:'Courier New',monospace;">developer.ts</span>
              <div style="margin-left:auto;width:10px;height:10px;border-radius:50%;
                          background:#28c840;box-shadow:0 0 6px #28c840;"></div>
            </div>

            <div style="padding:24px; font-family:'Courier New',monospace;
                        font-size:13px; line-height:2; overflow-x:auto; min-height:380px;">
              <div *ngFor="let line of completedLines" [innerHTML]="line"></div>
              <div [innerHTML]="currentLineHtml"></div>
              <span style="color:#e6edf3;" class="blink-cursor">&#9612;</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class AboutComponent implements OnInit, OnDestroy {
  techs = ['Angular', 'ASP.NET Core', 'Web API', 'SQL Server', 'Azure', 'TypeScript', 'C#'];

  // Each line broken into colored "tokens" (words/symbols)
  private codeLines: string[][] = [
    [`<span style="color:#6e7681;">//`, `Jayapriya`, `Singh`, `&mdash;`, `Full-Stack`, `Developer</span>`],
    [``],
    [`<span style="color:#ff7b72;">import</span>`, `<span style="color:#e6edf3;">{</span>`, `<span style="color:#e6edf3;">FullStackDeveloper</span>`, `<span style="color:#e6edf3;">}</span>`, `<span style="color:#ff7b72;">from</span>`, `<span style="color:#a5d6ff;">'jayapriya.dev'</span><span style="color:#e6edf3;">;</span>`],
    [``],
    [`<span style="color:#ff7b72;">const</span>`, `<span style="color:#79c0ff;">developer</span>`, `<span style="color:#e6edf3;">=</span>`, `<span style="color:#ff7b72;">new</span>`, `<span style="color:#ffa657;">FullStackDeveloper</span><span style="color:#e6edf3;">({</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">name</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#a5d6ff;">'Jayapriya Singh'</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">role</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#a5d6ff;">'Full-Stack Developer'</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">stack</span><span style="color:#e6edf3;">: [</span>`, `<span style="color:#a5d6ff;">'Angular'</span><span style="color:#e6edf3;">,</span>`, `<span style="color:#a5d6ff;">'ASP.NET Core'</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#a5d6ff;">'SQL Server'</span><span style="color:#e6edf3;">,</span>`, `<span style="color:#a5d6ff;">'Azure'</span><span style="color:#e6edf3;">],</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">experience</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#ffa657;">4</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">projects</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#ffa657;">7</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">focus</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#a5d6ff;">'Scalable enterprise apps'</span><span style="color:#e6edf3;">,</span>`],
    [`<span style="color:#e6edf3;">&nbsp;&nbsp;</span><span style="color:#79c0ff;">status</span><span style="color:#e6edf3;">:</span>`, `<span style="color:#a5d6ff;">'Open to opportunities'</span>`],
    [`<span style="color:#e6edf3;">});</span>`],
    [``],
    [`<span style="color:#ff7b72;">await</span>`, `<span style="color:#79c0ff;">developer</span><span style="color:#e6edf3;">.</span><span style="color:#d2a8ff;">launchPortfolio</span><span style="color:#e6edf3;">();</span>`],
    [``],
    [`<span style="color:#6e7681;">//`, `&#128640;`, `Let's`, `build`, `something`, `great`, `together!</span>`],
  ];

  completedLines: string[] = [];
  currentLineHtml = '';

  private lineIndex = 0;
  private wordIndex = 0;
  private timer: any;

  ngOnInit(): void {
    this.typeNextWord();
  }

  private typeNextWord(): void {
    const lines = this.codeLines;

    if (this.lineIndex >= lines.length) {
      // Pause, then restart loop
      this.timer = setTimeout(() => {
        this.completedLines = [];
        this.currentLineHtml = '';
        this.lineIndex = 0;
        this.wordIndex = 0;
        this.typeNextWord();
      }, 4500);
      return;
    }

    const currentLine = lines[this.lineIndex];

    // Empty line — push instantly, move to next line
    if (currentLine.length === 1 && currentLine[0] === '') {
      this.completedLines = [...this.completedLines, ''];
      this.lineIndex++;
      this.wordIndex = 0;
      this.timer = setTimeout(() => this.typeNextWord(), 220);
      return;
    }

    if (this.wordIndex < currentLine.length) {
      // Build up current line word by word
      this.currentLineHtml = currentLine.slice(0, this.wordIndex + 1).join(' ');
      this.wordIndex++;
      this.timer = setTimeout(() => this.typeNextWord(), 110); // speed per word
    } else {
      // Line complete — push to completed, move to next line
      this.completedLines = [...this.completedLines, this.currentLineHtml];
      this.currentLineHtml = '';
      this.lineIndex++;
      this.wordIndex = 0;
      this.timer = setTimeout(() => this.typeNextWord(), 180); // pause between lines
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}