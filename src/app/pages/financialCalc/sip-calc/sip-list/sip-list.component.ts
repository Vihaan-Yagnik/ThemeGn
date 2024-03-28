import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sip-list.component.html',
  styleUrl: './sip-list.component.scss'
})
export class SipListComponent {
  info = [
    {
      icon : "fa-solid fa-money-bill", 
      text : " Maturity Amount Calculator"
    },
    {
      icon : "fa fa-calculator", 
      text : " Investment Period Calculator"
    },
    {
      icon : "fa-solid fa-money-bill", 
      text : " Monthly SIP Calculator"
    },
    {
      icon : "fa-solid fa-money-bill",
      text : " Advance Maturity Calculator"
    },
    {
      icon : "fa-solid fa-money-bill",
      text : " SWP Calculator"
    },
    {
      icon : "fa-solid fa-money-bill",
      text : " Advance SWP Calculator"
    },
    {
      icon : "fa-solid fa-money-bill",
      text : " STP Calculator"
    },
  ]
}
