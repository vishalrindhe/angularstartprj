import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <h1>
      welcome {{name}}
      </h1>    
      
      <h1 class= text-success> vishal rindhe</h1>
      <button (click)="onClick($event)">greet</button>   
      t
      {{greeting}}
      
          `,
  styles: [`
  .text-success{color: green;}
  .text-danger{color: red;}
  .text-special{font-style: italic;}
   
   `]
})
export class TestComponent implements OnInit {
  
  public name="rindhe";
  public greeting ="";


  onClick(event){
    console.log(event)
    this.greeting = event.type;
  }
  ngOnInit(): void {
  }

}
 