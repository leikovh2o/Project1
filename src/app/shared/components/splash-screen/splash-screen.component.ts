import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  options: AnimationOptions = {    
    path: '/assets/lottie/happy-halloween.json'  
  }; 

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

}
