import { Injectable } from '@angular/core';
import { Play } from '../domain/play';

@Injectable()
export class PlayService{
    private PLAYS: Play[] = [
        { id: 1, title: 'Hamlet' },
        { id: 2, title: 'The Tempest' },
        { id: 3, title: 'Othello' },
        { id: 4, title: 'Macbeth' },
        { id: 5, title: 'Henry III' }
    ];

    public getPlays(): Play[]{
        return this.PLAYS;
    }

    add(play:Play){
        this.PLAYS.push(play);
        console.log(this.PLAYS);
    }
}