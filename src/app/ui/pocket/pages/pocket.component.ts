import { Component, OnInit } from '@angular/core';

import { PocketSandbox } from '../pocket.sandbox';


@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.scss']
})
export class PocketComponent implements OnInit {

  constructor(public pocketSandbox: PocketSandbox) { }

  ngOnInit(): void {
    this.pocketSandbox.getS()
  }

}
