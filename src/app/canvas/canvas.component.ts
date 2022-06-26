import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  x: number;
  y: number;
  length: Touch | null | number;

  touchList: any;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.length = 0;
    this.touchList = [];
  }

  ngOnInit(): void {
    const obj = document.getElementById('id');
    console.log(obj);
  }


  onMouseMove($event: MouseEvent) {
    this.x = $event.clientX;
    this.y = $event.clientY;
    // ontouchstart = (e) => {
    //   console.log(e);
    //
    // }
  }

  onTouch($event: TouchEvent) {
    console.log($event);

    this.touchList = $event.touches;
    let vibratePattern = 200;
    for(let i = 0; i < this.touchList.length; i++){
      vibratePattern += 100;
    }
    window.navigator.vibrate(vibratePattern);
  }
}
