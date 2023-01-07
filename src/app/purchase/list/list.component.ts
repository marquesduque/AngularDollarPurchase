import { Component, OnInit } from '@angular/core';
import { purchaseService } from '../purchase.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html'
})
export class listComponent implements OnInit {

  selected!: any;
  list!: any;


  constructor(private db: purchaseService) {
  }

  ngOnInit() {
    this.search();
  }
  search() {
    this.db.list().subscribe((res) => {
      this.list = res;
    });
  }

  select(selected: any): void {
    this.selected = selected;
  }

  delete(item: any): void {
    if (confirm('Tem certesa que deseja excluir este item?')) {

      this.db.delete(item.id).subscribe(() => {
        this.search();
      },
        err => {
        }
      );
    }
  }
}
