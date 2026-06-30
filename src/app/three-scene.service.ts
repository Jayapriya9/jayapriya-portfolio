import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThreeSceneService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animId = 0;
  private mouseX = 0;
  private mouseY = 0;
  private items: CodeItem[] = [];
  private W = 0;
  private H = 0;

  private snippets = [
    '@Component({})', '@Injectable()', '@NgModule({})', 'NgRx Store',
    'Observable<T>', 'switchMap(()=>)', 'catchError(err)', 'BehaviorSubject',
    'MatTableDataSource', 'ReactiveFormsModule', 'HttpClient', 'RouterModule',
    'ChangeDetectionStrategy', 'AsyncPipe', 'standalone: true',
    '[ApiController]', '[HttpGet]', '[HttpPost]', 'IActionResult',
    'async Task<T>', 'await _repo.SaveAsync()', 'builder.Services',
    'app.UseRouting()', 'AddDbContext<>()', 'IConfiguration',
    'ILogger<T>', 'ModelState.IsValid', '[Authorize]', 'ServiceLifetime',
    'SELECT * FROM', 'INNER JOIN', 'Azure.Deploy()', 'StoredProcedure',
    'SQL Server', 'Azure App Services', 'IQueryable<T>',
    'interface IUser', 'public async Task', 'private readonly',
    'return Ok(result)', 'constructor(private)', 'export class',
  ];

  init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.createItems();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    this.animate();
  }

  private resize(): void {
    this.W = this.canvas.width  = window.innerWidth;
    this.H = this.canvas.height = window.innerHeight;
  }

  private createItems(): void {
    this.items = this.snippets.map(text => ({
      text,
      x:     Math.random() * this.W,
      y:     Math.random() * this.H,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.38,
      alpha: 0.04 + Math.random() * 0.10,
      size:  10 + Math.random() * 5,
      color: Math.random() > 0.5 ? '#3B82F6' : '#06B6D4',
      depth: 0.3 + Math.random() * 0.7,
    }));
  }

  private animate = (): void => {
    this.animId = requestAnimationFrame(this.animate);
    const ctx = this.ctx;
    const W = this.W, H = this.H;

    ctx.fillStyle = 'rgba(10,14,39,0.18)';
    ctx.fillRect(0, 0, W, H);

    this.items.forEach(it => {
      const px = this.mouseX * 18 * it.depth;
      const py = this.mouseY * 10 * it.depth;
      ctx.save();
      ctx.globalAlpha = it.alpha;
      ctx.font = `${it.size}px 'Courier New', monospace`;
      ctx.fillStyle = it.color;
      ctx.fillText(it.text, it.x + px, it.y + py);
      ctx.restore();
      it.x += it.vx;
      it.y += it.vy;
      if (it.x > W + 150) it.x = -150;
      if (it.x < -150)    it.x = W + 150;
      if (it.y > H + 20)  it.y = -20;
      if (it.y < -20)     it.y = H + 20;
    });

    const vg = ctx.createRadialGradient(W/2, H/2, H*0.3, W/2, H/2, H*0.85);
    vg.addColorStop(0, 'rgba(10,14,39,0)');
    vg.addColorStop(1, 'rgba(10,14,39,0.75)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  };

  private onMouseMove = (e: MouseEvent): void => {
    this.mouseX = (e.clientX / this.W) * 2 - 1;
    this.mouseY = (e.clientY / this.H) * 2 - 1;
  };

  private onResize = (): void => { this.resize(); };

  destroy(): void {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
  }
}

interface CodeItem {
  text: string;
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; size: number;
  color: string; depth: number;
}