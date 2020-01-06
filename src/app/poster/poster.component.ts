import { Component } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent {

    items: Array<any> = []

    constructor() {
      this.items = [
        { name: 'assets/images/thumb7.png' },
        { name: 'assets/images/thumb2.png' },
        { name: 'assets/images/thumb3.png' },
        { name: 'assets/images/thumb8.png' },
        { name: 'assets/images/thumb9.png' },
        { name: 'assets/images/thumb10.png' },
        { name: 'assets/images/thumb7.png' },
        { name: 'assets/images/thumb2.png' },
        { name: 'assets/images/thumb3.png' },
        { name: 'assets/images/thumb8.png' },
        { name: 'assets/images/thumb9.png' },
        { name: 'assets/images/thumb10.png' },
      ]
    }
  }

