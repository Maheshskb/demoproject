import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-buttons-radio',
	templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig] 
})
 
export class NgbdCarouselBasic{
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
  chartOptions = {
    responsive: true
  };

  chartData = [
    
    { data: [1.0, 1.39, 2.35, 1.2,1.98,1.01,2.21,1.01,1.48,1.5], label: 'Normal', fill: false },
    { data: [4.5, 4.5, 4.5, 4.5,4.5,4.5,4.5,4.5,4.5,4.5], label: 'Alert', fill: false },
    { data: [2.5, 2.5, 2.5, 2.5,2.5,2.5,2.5,2.5,2.5,2.5], label: 'Alarm', fill: false }
  ];

  chartData2 = [
    { data: [1.08, 1.39, 2.45, 4.92,3.98,4.71,1.21,3.81,1.48,2.9], label: 'Normal',fill: false },
    { data: [4.5, 4.5, 4.5, 4.5,4.5,4.5,4.5,4.5,4.5,4.5], label: 'Alert',fill: false },
    { data: [2.5, 2.5, 2.5, 2.5,2.5,2.5,2.5,2.5,2.5,2.5], label: 'Alarm',fill: false }
  ];

  chartData1 = [
    { data: [1.38, 1.39, 2.45, 4.2,1.98,4.01,1.21,3.81,1.48,2.9], label: 'Normal',fill: false },
    { data: [4.5, 4.5, 4.5, 4.5,4.5,4.5,4.5,4.5,4.5,4.5], label: 'Alert',fill: false },
    { data: [2.5, 2.5, 2.5, 2.5,2.5,2.5,2.5,2.5,2.5,2.5], label: 'Alarm',fill: false }
  ];
  
  chartLabels = ['0','1.5','2.0','2.5','3.0','3.5','4.5','5.0','5.5','6.0'];

  chartLabels1 = ['0','1.5','2.0','2.5','3.0','3.5','4.5','5.0','5.5','6.0'];

  chartLabels2 = ['0','1.5','2.0','2.5','3.0','3.5','4.5','5.0','5.5','6.0'];
  
  onChartClick(event) {
    console.log(event);
  }
}

