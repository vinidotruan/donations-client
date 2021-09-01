import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionsService } from './services/actions.service';
import { AuthenticationsService } from './services/authentications.service';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => FormPage', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%' }), 
        { optional: true }
      ),        
      group([
        query(':enter',[
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('HomePage => ProfilePage', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%' }), 
        { optional: true }
      ),        
      group([
        query(':enter',[
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('ProfilePage => *', [
      query(':enter, :leave', 
        style({ position: 'fixed',  width: '100%' }), { optional: true }
      ),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }), 
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('FormPage => *', [
      query(':enter, :leave', 
        style({ position: 'fixed',  width: '100%' }), { optional: true }
      ),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }), 
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', 
          style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})

export class AppComponent {
  public actions: any;

  constructor(
    private actionsService: ActionsService,
    private authenticationService: AuthenticationsService
  ) {
    this.actionsService.getActions().subscribe(
      response => this.actions = response
    );
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
