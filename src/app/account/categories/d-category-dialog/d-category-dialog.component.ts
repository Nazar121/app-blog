import { Component, OnInit, Inject } from '@angular/core';

// for dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-d-category-dialog',
  templateUrl: './d-category-dialog.component.html',
  styleUrls: ['./d-category-dialog.component.scss']
})
export class DCategoryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public settings: any
  ) { }

  // close dialog
  closeDialog(res?): void {
    this.dialogRef.close(res);
  }

  ngOnInit() {
  }

}
