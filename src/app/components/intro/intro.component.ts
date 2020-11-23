import { Component, Input, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/playService';
import { Play } from '../../domain/play';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.plays = this.playService.getPlays();
  }

  plays: Play[];

  public name: string = "";
}
