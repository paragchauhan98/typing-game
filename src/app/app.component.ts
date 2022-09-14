import { FormatWidth, getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import {locale, lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText=''
   events?:Number
   randomText=lorem.sentence()
  

  
  onInput(value:any){
  this.enteredText=value.target.value
  }
  compare(randomLetter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending'
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'

  }

  

}