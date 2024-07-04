import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../service/jsonplaceholder.service';
import { Comments } from '../../service/models/coments';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  garfields:Comments[]=[];
  constructor(private serviceholder:JsonplaceholderService){}

  ngOnInit(): void {
    this.listartodoslosdominiosgarfields();
  }

  listartodoslosdominiosgarfields(){
    this.serviceholder.getFiltraComentPorGarfield().subscribe(
      data=>{
        this.garfields=data;
        console.log("datos -->" ,data)
      }
    )
  }





}
