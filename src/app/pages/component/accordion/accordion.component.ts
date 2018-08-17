import { Component } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'ngbd-accordion-basic',
	templateUrl: 'accordion.component.html'
})


export class NgbdAccordionBasic {
   beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };
  
  chartData = [
    
    { data: [40, 25, 35], label: 'Account A'},
    
  ];

  chartLabels = ['Normal', 'Alert', 'Alarm'];
  


  chartData1 = [
    { data: [80, 15, 35],label: 'Health',fill: false},
    
   
  ];

  chartLabels1 = ['Normal', 'Alert', 'Alarm'];

  chartData2 = [
    
    { data: [0,1, 3, 4], label: 'Present Value', fill: false },
   
  ];

  chartLabels2 = ['','Normal', 'Alert', 'Alarm'];

  myColors = [
    {
      backgroundColor: '#6c6cff',
      borderColor: 'rgb(230,230,250)',
      pointBackgroundColor: 'rgb(230,230,250)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    // ...colors for additional data sets
  ];

  myColors2 = [
    {
      backgroundColor: '#6c6cff',
      borderColor: '#6c6cff',
      pointBackgroundColor: 'rgb(230,230,250)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
    // ...colors for additional data sets
  ];

  // chartData3 = [
    
  //   { data: [2761477, 1324110, 959574], label: 'PV', fill: false },
   
  // ];

  // chartLabels3 = ['Rome','Milan','Naples'];

}

