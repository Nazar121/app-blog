import { Component, OnInit } from '@angular/core';

// dialog
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CECategoryDialogComponent } from '../ce-category-dialog/ce-category-dialog.component';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.scss']
})
export class CurrentPostComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  // dialog for delete post
  deleteCategoryDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      maxWidth: '400px',
      data: {
        message: 'If you delete this post, then you will not return it.'
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      console.log('Delete post ', res);
      if ( res ) {
        // this.deletePost();
      }
    });
  }

}
