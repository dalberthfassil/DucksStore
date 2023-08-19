import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-yes-no-question-dialog',
  templateUrl: './yes-no-question-dialog.component.html',
  styleUrls: ['./yes-no-question-dialog.component.css'],
})
export class YesNoQuestionDialogComponent {
  constructor(public dialogRef: MatDialogRef<YesNoQuestionDialogComponent>) {}
  cancel() {
    this.dialogRef.close(false);
  }
  accept() {
    this.dialogRef.close(true);
  }
}
