import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import { appService } from '../app.service';
import { purchaseService } from './purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class purchaseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: appService,
    private db: purchaseService,
    private router: Router) {
  }
  close = () => { }
  ngOnInit() {
  }

  continuar() {
    if (this.entity.name == '') {
      this.alert("Oops", "O campo nome é obrigatório");
    }
    else if (this.entity.zipcode == '') {
      this.alert("Oops", "O campo cep é obrigatório");
    }
    else {
      this.service.findZipCode(this.entity.zipcode)
        .subscribe(ent => {
          this.entity.address = ent.logradouro + ' - ' + ent.cidade + '/' + ent.estado;
        },
          err => {
            this.alert('ATENÇÃO', 'Informe um CEP válido!')
          }
        );
    }
  }
  save() {
    this.db.save( {
      zipcode: this.entity.zipcode,
      name: this.entity.name,
      address: this.entity.address,
      dollar: '$'+this.entity.dollar.toFixed(2)
    }).subscribe(
      () => {
        this.alert('Parabêns', 'purchase realizada com sucesso');
        this.router.navigate(['/list'])
      });
    this.close();
  }

  alert(titulo: string, descricao: string) {
    swal.fire({
      title: titulo,
      text: descricao,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-primary"
      }
    });
  }

  public entity = {
    zipcode: '',
    name: '',
    address: '',
    dollar: 0,
    message: ''
  }
}
