import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  public actions: any;
  constructor( private actionsService: ActionsService ) {
    this.actionsService.getActions().subscribe(
      response => this.actions = response
    )
  }

  ngOnInit(): void {
  }

}
