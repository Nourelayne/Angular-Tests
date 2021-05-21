import { TestBed,  ComponentFixture } from "@angular/core/testing"
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component";


describe("HeroService", ()=>{
    let mockMessageService;

    beforeEach(()=>{
          mockMessageService = jasmine.createSpyObj(["add"]);
          let fixture: ComponentFixture<HeroesComponent>;
          let mockHeroService;
          let HEROES;

          HEROES = [
            {id:1, name: 'SpiderDude', strength: 8},
            {id:2, name: 'Wonderful Woman', strength: 24},
            {id:3, name: 'SuperDude', strength: 55}
          ]
      
          mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
      
           TestBed.configureTestingModule({
                declarations: [
                      HeroesComponent,
                      HeroComponent
                ],
                providers: [
                  {provide: HeroService, useValue: mockHeroService}
                ],
                //schemas: [NO_ERRORS_SCHEMA]
           });
           fixture = TestBed.createComponent(HeroesComponent);
          })

          
    })