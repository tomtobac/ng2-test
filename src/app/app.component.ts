import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  public buzzFizz(num: number): string {
    let str = '';
    if (num < 0 || num > 100) throw new Error('Number must be between 0 and 100')
    if (num % 3 == 0) str += 'Buzz'
    if (num % 5 == 0) str += 'Fizz'
    return str;
  }

}
