import { Component } from '@angular/core';
import { ActionsService } from './services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public actions: any;
  constructor( private actionsService: ActionsService ) {
    this.actionsService.getActions().subscribe(
      response => this.actions = response
    )
  }
}
