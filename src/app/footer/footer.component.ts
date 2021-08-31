import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('active', [
      state('true', style({ background: 'linear-gradient(55deg, #56E3DB, #7371FF)' })),
      state('false', style({ background: 'none' })),
      transition('false <=> true', animate('200ms ease-in-out', style({ background: 'none', transform: 'scale(1.5)' })))
    ])
  ]
})
export class FooterComponent implements OnInit {

  constructor( ) {}

  ngOnInit(): void {}
}