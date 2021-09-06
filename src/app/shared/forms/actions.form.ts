import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class ActionsForm {
  public form: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  public createForm = (): FormGroup => {
    return this.formBuilder.group({
      name: new FormControl('TESTE ANGULAR', Validators.required),
      contact: new FormControl('TESTE ANGULAR', Validators.required),
      categories: new FormControl([], Validators.required),
      localization: new FormControl('TESTE ANGULAR', Validators.required),
      postalCode: new FormControl('TESTE ANGULAR', Validators.required),
      description: new FormControl('TESTE ANGULAR'),
      image: new FormControl(''),
      createdAt: new FormControl(new Date()),
    });
  };

  get name() {
    return this.form.get('name');
  }
  get contact() {
    return this.form.get('contact');
  }
  get categories() {
    return this.form.get('categories');
  }
  get localization() {
    return this.form.get('localization');
  }
  get postalCode() {
    return this.form.get('postalCode');
  }
  get description() {
    return this.form.get('description');
  }
  get image() {
    return this.form.get('image');
  }
}
