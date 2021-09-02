import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(
    private actionsService: ActionsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'));
    this.actionsService.getAction(id).subscribe(
      (response: AngularFirestoreDocument) => {
        console.log(response)
      }
    )
  }

}
