

import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { dataUri } from '@rxweb/reactive-form-validators';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})



export class DataComponent implements OnInit, AfterViewInit {
  
  apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
 
  displayedColumns = ['id', 'employee_name', 'employee_salary', 'employee_age','profile_image']; // Replace with your column names
 


  // apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // displayedColumns = ['userId', 'id', 'title', 'body'];  

  dataSource = new MatTableDataSource<any>();
  dial: any;

 
  constructor(private apiService: ApiServiceService,public dialog: MatDialog) { }
   
  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
    
  
    @Component({
      selector: 'app-dialog',
      templateUrl: './dialog.component.html',
      styleUrl: './dialog.component.css'
    })

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
   
    this.apiService.getData(this.apiUrl)
    .subscribe(response => {
      if (response.hasOwnProperty('data')) {
        const responseData = response.data; // Assuming "data" contains employee information

        // Check if "status" and "message" exist and filter accordingly
        if (Array.isArray(responseData) && responseData.length > 0) { // Check if "data" is an array and not empty
          const filteredData = responseData.filter(
            (item: any) => item.hasOwnProperty('id') // Filter objects with "id" (assuming employee data)
          );
          this.dataSource.data = filteredData;
        } else {
          console.error('Unexpected data format:', responseData);
        }
        this.displayedColumns = Object.keys(this.dataSource.data[0]); // Update displayed columns
      } else {
        console.error('Unexpected API response:', response);
      }
    }, error => {
      console.error('Error fetching data:', error);
    });



  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 


}

function openDialog() {
  throw new Error('Function not implemented.');
}
