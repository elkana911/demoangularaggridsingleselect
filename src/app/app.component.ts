import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularaggridsingleselect';

  rowData = [];
  gridApi;
  gridOptions: GridOptions;

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];


  ngOnInit() {
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    // https://www.ag-grid.com/javascript-grid-properties
    this.gridOptions = {
      // enable sorting on all columns by default
      defaultColDef: {
        sortable: true,
        filter: true,
      },
      pagination: true,
      domLayout: "print",
      rowSelection: 'single',
      onGridReady: this.onGridReady,
      onRowSelected: this.onRowSelected,
      onRowDoubleClicked: this.onDoubleClicked
    }

    // this.myGrid.setDomLayout("print");
    // fetch('https://api.myjson.com/bins/15psn9')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
  }

  onDoubleClicked(row){
    console.log('double click ' + JSON.stringify(row.data));
  }
  onRowSelected(event) {
    if (event.node.selected) {
      console.log('You picked ' + JSON.stringify(event.node.data));
      //  this.selectedNodes.push(event.node);
    }

  }

}
