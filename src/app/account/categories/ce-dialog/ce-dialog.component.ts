import { Component, OnInit, Inject } from '@angular/core';

// fol dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ce-dialog',
  templateUrl: './ce-dialog.component.html',
  styleUrls: ['./ce-dialog.component.scss']
})
export class CEDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CEDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public settings: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.settings);
  }

}
