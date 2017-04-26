import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));


  // BuzzFizz

  it('should return empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buzzFizz = fixture.componentInstance.buzzFizz;
    expect(buzzFizz(1)).toEqual('')
  })

  it('should return Buzz if the number module 3 is 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buzzFizz = fixture.componentInstance.buzzFizz;
    expect(buzzFizz(3)).toEqual('Buzz')
  })

  it('should return Fizz if the number module 5 is 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buzzFizz = fixture.componentInstance.buzzFizz;
    expect(buzzFizz(5)).toEqual('Fizz')
  })

  it('should return BuzzFizz if the number module 3 & 5 is 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buzzFizz = fixture.componentInstance.buzzFizz;
    expect(buzzFizz(15)).toEqual('BuzzFizz')
  })


});
