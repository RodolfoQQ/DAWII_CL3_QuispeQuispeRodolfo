import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [AngularmaterialModule,RouterOutlet],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css'
})
export class DasboardComponent {

  constructor(private router:Router, private activatroute:ActivatedRoute){}

  pregunta1(){
    this.router.navigate(['pregunta1'],{relativeTo:this.activatroute})
  }
  pregunta2(){
    this.router.navigate(['pregunta2'],{relativeTo:this.activatroute})
  }
}
