import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements AfterViewInit {

  displayedColumns: string[]= [];
  dataSource:any;
  
  constructor(private api:ApiService) { }
  
  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.api.getStudentData().subscribe(
      data => {
        for (const key of Object.keys(data[0])) {
          this.displayedColumns.push(key);
        }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
      )
  }

}
