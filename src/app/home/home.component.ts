import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { purchaseComponent } from '../purchase/purchase.component';
import { appService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: appService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    debugger;
    this.service.findPrice(new Date(new Date().setDate(new Date().getDate()-2)))
      .subscribe(ent => {
        if (ent.value.length == 0) {
          alert('Não foi possivel recuperar a cotação atual do dolar');
        }
        else {
          this.entity.price = ent.value[0].cotacaoCompra;
          this.entity.real = ent.value[0].cotacaoCompra;
          this.calculator('real');
        }
      },
        err => {
          alert('Oops ocorreu um erro');
        }
      );
  }
  calculator(tipo: String) {
    if (tipo == 'dollar') {
      this.entity.real = this.entity.dollar * this.entity.price;
    }
    else {
      this.entity.dollar = this.entity.real / this.entity.price;
    }
  }
  purchase() {
    var dialog = this.dialog.open(purchaseComponent);
    dialog.componentInstance.entity.dollar = this.entity.dollar;
    dialog.componentInstance.entity.message = "R$ "+this.entity.dollar.toFixed(2) +" POR $ "+ this.entity.dollar.toFixed(2);
    dialog.componentInstance.close = () => {
      dialog.close();
    }

  }

  public entity = {
    real: 1,
    dollar: 1,
    price: 0
  }

}
