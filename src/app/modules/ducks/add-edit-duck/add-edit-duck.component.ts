import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Colors, Ducks, Sizes } from 'src/app/core/modules/ducks.interface';

@Component({
  selector: 'app-add-edit-duck',
  templateUrl: './add-edit-duck.component.html',
  styleUrls: ['./add-edit-duck.component.css'],
})
export class AddEditDuckComponent implements OnInit {
  colors = Object.values(Colors);
  sizes = Object.values(Sizes);
  constructor(
    public dialogRef: MatDialogRef<AddEditDuckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ducks
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
  duckForm = new FormGroup({
    title: new FormControl(
      { value: this.data?.title || '', disabled: !!this.data },
      [Validators.required]
    ),
    color: new FormControl(
      { value: this.data?.color || '', disabled: !!this.data },
      [Validators.required]
    ),
    size: new FormControl(
      { value: this.data?.size || '', disabled: !!this.data },
      [Validators.required]
    ),
    price: new FormControl(
      { value: this.data?.price || null, disabled: false },
      [Validators.required]
    ),
    lot: new FormControl({ value: this.data?.lot || null, disabled: false }, [
      Validators.required,
    ]),
  });

  getErrorMessage(): string {
    return !this.duckForm.valid ? 'ingrese un valor' : '';
  }
  private getDuckFromForm(): Ducks {
    return {
      id: this.data.id ?? 0,
      title: this.duckForm.value.title ?? this.data.title,
      color: this.duckForm.value.color ?? this.data.color,
      size: this.duckForm.value.size ?? this.data.size,
      price: this.duckForm.value.price ?? this.data.price,
      lot: this.duckForm.value.lot ?? this.data.lot,
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
