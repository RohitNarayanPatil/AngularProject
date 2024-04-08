import { Component } from '@angular/core';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrl: './csv.component.css'
})
export class CsvComponent {
  exportCSV(): void {
    // Replace this data with your own
    const data = [
      ['Name', 'Age', 'Email'],
      ['Rohit Patil =', 25, 'Rohit@example.com'],
      [' Adnon bhoi', 25, 'adnon@example.com'],
      [' nora', 40, 'bob@example.com']
    ];
  
    // Convert data to CSV format
    const csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(",")).join("\n");
  
    // Create a link and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  } 
  // exportCSV(): void {
  //   // Generate CSV content
  //   let csvContent = "data:text/csv;charset=utf-8,";

  //   // Replace this data with your own
  //   let data = [
  //     ['Name', 'Age', 'Email'],
  //     ['John Doe', 30, 'john@example.com'],
  //     ['Jane Smith', 25, 'jane@example.com'],
  //     ['Bob Johnson', 40, 'bob@example.com']
  //   ];

  //   data.forEach(function(rowArray) {
  //     let row = rowArray.join(",");
  //     csvContent += row + "\r\n";
  //   });

  //   // Create a link and trigger download
  //   let encodedUri = encodeURI(csvContent);
  //   let link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", "data.csv");
  //   document.body.appendChild(link);
  //   link.click();
  // }
}
