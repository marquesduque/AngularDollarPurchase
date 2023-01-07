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
    this.db.list().subscribe((res)=>{
      debugger;
      this.list=res;
    });
  }


  select(selected: any): void {
    this.selected = selected;
  }

  delete(flight: any): void {
    if (confirm('Are you sure?')) {
      // this.db.delete(flight).subscribe(() => {
      //     this.feedback = {type: 'success', message: 'Delete was successful!'};
      //     setTimeout(() => {
      //       this.search();
      //     }, 1000);
      //   },
      //   err => {
      //     this.feedback = {type: 'warning', message: 'Error deleting.'};
      //   }
      // );
    }
  }
}
