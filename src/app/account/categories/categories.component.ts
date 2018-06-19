import { Component, OnInit } from '@angular/core';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CEDialogComponent } from './ce-dialog/ce-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // create, edit category
  settingsCE: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {}

  // dialog
  openDialog(): void {
    let dialogRef = this.dialog.open(CEDialogComponent, {
      maxWidth: '500px',
      data: { ...this.settingsCE }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);
    });
  }

  // create category
  createCategory() {
    this.settingsCE = {
      status: 'create',
      title: 'Create New Category',
      value: {
        name: '',
        image: ''
      }
    };
    this.openDialog();
  }

  // edit category
  editCategory(category) {
    this.settingsCE = {
      status: 'edit',
      title: 'Edit Current Category',
      value: {
        name: 'Angular 6',
        image: ''
      }
    };
    this.openDialog();
  }

}
