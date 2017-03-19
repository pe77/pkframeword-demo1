/// <reference path='../pk/PkGame.ts' />
/// <reference path='../pk/PkConfig.ts' />

module GameBase {
 
    export class Game extends Pk.PkGame {
 
        constructor() {
            super(new Config());

            // add default state
            this.state.add('Menu', GameBase.Menu);
            this.state.add('Main', GameBase.Main);
            
        }

 
    }

    class Config extends Pk.PkConfig
    {

        constructor()
        {
            super();

            this.loaderState = Loader;
            this.initialState = 'Menu';

        }
    }
    
 
} 