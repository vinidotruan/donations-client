import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ActionsService } from '../services/actions.service';
import { Action } from '../shared/models/actions';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  public action: Action | undefined;

  constructor(
    private actionsService: ActionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'));
    this.actionsService
      .getAction(id)
      .subscribe((response: any) => (this.action = response));
  }
}
