import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
  set: any;
  type: any;
  rarity: any;
  class: any;

  constructor() {
    this.set = [
      {name: 'LOE',
        complete: 'League of Explorers'},
      {name: 'KARA',
        complete: 'One Night in Karazhan'},
      {name: 'TGT',
        complete: 'The Great Tournament'},
      {name: 'GVG',
        complete: 'Goblins Vs. Gnomes'},
      {name: 'OG',
        complete: 'Whisper of the Old Gods'},
      {name: 'GANGS',
        complete: 'Mean Streets of Gadgetzan'},
      {name: 'NAXX',
        complete: 'Curse of Naxxaramas'},
      {name: 'BRM',
        complete: 'Black Rock Mountain'},
      {name: 'CORE',
        complete: 'Basicas'},
      {name: 'EXPERT1',
        complete: 'Clasica'},
        ];
    this.rarity = ['COMMON', 'RARE', 'EPIC', 'LEGENDARY'];
    this.type = ['MINION', 'SPELL', 'HERO'];
    this.class = ['DRUID', 'MAGE', 'WARLOCK', 'PRIEST', 'ROGUE', 'WARRIOR', 'PALADIN', 'SHAMAN', 'HUNTER'];

  }

}
