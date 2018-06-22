import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CECategoryDialogComponent } from './ce-category-dialog/ce-category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // create, edit category
  settingsCE: any;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {}

  // dialog
  openDialog(): void {
    let dialogRef = this.dialog.open(CECategoryDialogComponent, {
      maxWidth: '500px',
      data: { ...this.settingsCE }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Category is ', result);
    });
  }

  // create category
  createCategory() {
    this.settingsCE = {
      create: true,
      value: {
        name: '',
        image: ''
      }
    };
    this.openDialog();
  }

  // Current category
  currentCategory() {
    // this.router.navigate([`${this.router.url}/category`], {queryParams: {id: 'myIdNewOlasd-sdf-cdsc'}});
    this.router.navigate([`${this.router.url}/category`]);
  }

  
}
