import { Component, OnInit } from '@angular/core';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CECategoryDialogComponent } from '../ce-category-dialog/ce-category-dialog.component';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.category = {
      name: 'Angular 6',
      image: '',
      created: new Date().getTime()
    }
  }

  // dialog for delete category
  deleteCategoryDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'If, you delete this category, all the posts in this category will also be deleted.'
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      console.log('Delete category ', res);
      if ( res ) {
        this.deleteCategory();
      }
    });
  }

  // dialog for edit category
  openDialog(): void {
    let dialogRef = this.dialog.open(CECategoryDialogComponent, {
      maxWidth: '500px',
      data: {
        create: false,
        value: { ...this.category }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed.  Category is ', result);
    });
  }

  // edit category
  editCategory() {
    this.openDialog();
  }

  // delete category
  deleteCategory() {
    console.log('DELETE category ');
  }

}
