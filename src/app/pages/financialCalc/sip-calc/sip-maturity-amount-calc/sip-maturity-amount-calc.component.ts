import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SipListComponent } from '../sip-list/sip-list.component';
import { TableGeneratorComponent } from '../table-generator/table-generator.component';
import { CommaSeparatedPipe } from '../../comm.pipe';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';


class Calc {
  invested: number = 0
  earned : number = 0
  total : number = 0
  sip_amount: number = 2000
  invested_period_amount: number = 15
  expected_annual_returns: number = 15
  maturity_period: number = 15
  invested_period_multiplier : number = 0
  info = [
    {
      year: 0,
      invested: 0,
      earned: 0,
      total: 0,
    }
  ]

  calculator() {
    this.info = [{
      year: 0,
      invested: 0,
      earned: 0,
      total: 0,
    }]
    for (let i = 1; i <= this.maturity_period; i++) {

      this.invested = this.sip_amount * (12*(i <= this.invested_period_amount ? i : this.invested_period_amount ))
      this.earned = this.invested * (0.01 * this.expected_annual_returns)
      this.total = this.earned + this.invested
      let infoObj = {
        "year": i,
        "invested" : this.invested, 
        "earned" : this.earned,
        "total" : this.total, 
      }

      this.info.push(infoObj)
    }
  }
}



@Component({
  selector: 'app-sip-maturity-amount-calc',
  standalone: true,
  imports: [SipListComponent, TableGeneratorComponent , CommonModule, CommaSeparatedPipe , FormsModule , WidgetsModule ,SharedModule],
  providers: [Calc,CommaSeparatedPipe],
  templateUrl: './sip-maturity-amount-calc.component.html',
  styleUrl: './sip-maturity-amount-calc.component.scss'
})
export class SipMaturityAmountCalcComponent {

  constructor(public calc : Calc){}

  ngOnInit(){
    this.calc.calculator()
  }
}
