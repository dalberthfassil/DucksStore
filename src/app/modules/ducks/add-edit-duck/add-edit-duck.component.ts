import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Colors, Ducks, Sizes } from 'src/app/core/modules/ducks.interface';

@Component({
  selector: 'app-add-edit-duck',
  templateUrl: './add-edit-duck.component.html',
  styleUrls: ['./add-edit-duck.component.css'],
})
export class AddEditDuckComponent {
  colors = Object.values(Colors);
  sizes = Object.values(Sizes);
  constructor(
    public dialogRef: MatDialogRef<AddEditDuckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ducks
  ) {}
  duckForm = new FormGroup({
    title: new FormControl(this.data.title || '', [Validators.required]),
    color: new FormControl(this.data.color || '', [Validators.required]),
    size: new FormControl(this.data.size || '', [Validators.required]),
    price: new FormControl(this.data.price || null, [Validators.required]),
    lot: new FormControl(this.data.lot || null, [Validators.required]),
  });

  getErrorMessage(): string {
    return !this.duckForm.valid ? 'ingrese un valor' : '';
  }
  private getDuckFromForm(): Ducks {
    return {
      id: 0,
      title: this.duckForm.value.title ?? '',
      color: this.duckForm.value.color ?? Colors.Black,
      size: this.duckForm.value.size ?? Sizes.Large,
      price: this.duckForm.value.price ?? 0,
      lot: this.duckForm.value.lot ?? 0,
      isErased: false,
    };
  }
  onSave() {
    if (this.duckForm.valid) {
      const newDuck = this.getDuckFromForm();
      this.dialogRef.close(newDuck);
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
}
