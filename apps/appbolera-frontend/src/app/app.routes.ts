import { Route } from '@angular/router';
import { Home } from './home/home';
import { NewGameModal } from './content/newgame/new-game-modal'
import { ScorerModal } from './content/scorer/scorer-modal';

export const appRoutes: Route[] = [
    {path: "", component:Home},
    {path: "new-game", component:NewGameModal},
    {path: "scorer-modal", component:ScorerModal}
];
