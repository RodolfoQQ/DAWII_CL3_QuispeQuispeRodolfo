import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AngularmaterialModule } from '../../angularmaterial/angularmaterial.module';
import { Character } from '../../service/models/Character';
import { RickandmortyService } from '../../service/rickandmorty.service';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [NgIf, AngularmaterialModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {

  humanos: Character[]=[]
  constructor(private serviceRandckmotry:RickandmortyService){}

  ngOnInit(): void {
    this.listarhumanosporespeciehumana();
  }

  listarhumanosporespeciehumana(): void {
    this.serviceRandckmotry.humanosporespecie().subscribe(data => {

      this.humanos = data;
    });
  }



}
