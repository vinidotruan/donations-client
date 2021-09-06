import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionsService } from '../services/actions.service';
import { CategoriesService } from '../services/categories.service';
import { StorageService } from '../services/storage.service';
import { ActionsForm } from '../shared/forms/actions.form';
@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss'],
})
export class ActionFormComponent extends ActionsForm implements OnInit {
  public categoriesList: any;
  public imageUploadPorcentage: number | undefined = 0;

  constructor(
    private actionsService: ActionsService,
    private categoriesService: CategoriesService,
    private storageService: StorageService,
    protected formBuilder: FormBuilder
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories = (): void => {
    this.categoriesService.getCategories().subscribe((response) => {
      console.log(response);
      this.categoriesList = response;
    });
  };

  public upload = async (event: any): Promise<void> => {
    const uploadTask = this.storageService.upload(event);
    uploadTask.snapshotChanges().subscribe(async (response) => {
      const url = await response?.ref.getDownloadURL();
      this.form.patchValue({ image: url });
    });
    this.imageUploadPorcentage = await uploadTask
      .percentageChanges()
      .toPromise();
  };

  public submit = () => {
    this.actionsService.store(this.form.value).then(() => {
      alert('Success');
    });
  };
}
