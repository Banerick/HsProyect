import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expansiones',
  templateUrl: './expansiones.component.html',
  styleUrls: ['./expansiones.component.css']
})
export class ExpansionesComponent implements OnInit {
  expansiones: any;

  constructor() {
    this.expansiones = [
      {
        name: 'Kobolds and Catacombs',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/5/51/Kobolds_and_Catacombs_banner.jpg',
        text: 'This set consists of 135 collectible cards, along with the new Recruit keyword, legendary weapons for all classes, and offers the new Solo Adventures option of Dungeon Run. This expansion was deeply inspired by classic fantasy and dungeon crawling adventure games, with several references to games such as Dungeons and Dragons within the cards, and revolves around Kobolds and treasure. '
      },
      {
        name: 'Knights of the Frozen Throne',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/7/71/Knights_of_the_Frozen_Throne_banner.jpg',
        text: 'Set in the frozen wastes of Northrend, the expansions sees each of the nine classic heroes of Warcraft fall under the sway of the Lich King, becoming undead death knights in his service. The expansion features the introduction of a new card type in the form of the hero card, which replaces the player\'s hero portrait and Hero Power, as well as the Lifesteal keyword. Knights of the Frozen Throne is also the first expansion to feature a new type of free, optional single-player content in the form of Missions, which take the player through the halls of Icecrown and rewards card packs and a random legendary hero card. '
      },
      {
        name: 'Journey to Un\'Goro',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/d/dc/Journey_to_Un%27Goro_banner2.png',
        text: ' The expansion features the new Adapt mechanic, the new Quest card type, and adds the new Elemental minion type. Set in the primordial mists of Un\'Goro Crater, the expansion sees Elise Starseeker leading an expedition to explore the strange wonders of the region. The denizens of the region include dinosaurs, raging elementals and unusually active plants, many of whom have learned to adapt to the needs of the situation with impressive new powers. '
      },
      {
        name: 'Mean Streets of Gadgetzan',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/c/c7/Mean_Streets_of_Gadgetzan_banner2.jpg',
        text: 'Set in the bustling, lawless port city of Gadgetzan, the expansion features characters from the city\'s three ruling crime families - the brutish Grimy Goons, the assassins of the Jade Lotus, and the shadowy spellcasters of the Kabal. With their own minions, spells and weapons, each family is formed from an allegiance of three different Hearthstone classes, resulting in multi-class cards, usable by heroes of any of those three classes. '
      },
      {
        name: 'Whispers of the Old Gods',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/8/8c/Whispers_of_the_Old_Gods_banner.png',
        text: 'Featuring 134 new collectible cards, this sinister expansion revolves around the dark influence of the Old Gods, ancient and unspeakably evil creatures that have long lain hidden, imprisoned in the dark places of the world millennia ago. Despite their imprisonment, these shadowy beings\' influence can be felt in every corner of Azeroth, twisting and corrupting any who hear their maddening whispers. With an army of followers performing forbidden empowerment rituals, the tentacles of these massive horrors are growing rapidly toward the light, eager to bring their own kind of excitement to the sunlit kingdoms and merry taverns of Azeroth.'
      },
      {
        name: 'The Grand Tournament',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/5/58/The_Grand_Tournament.png/825px-The_Grand_Tournament.png',
        text: 'With more than 130 new cards, the expansion features a strong theme of Hero Power-related effects, as well as seeing the introduction of the first full new keyword since the game\'s release - Inspire - allowing minions to grant special effects each time the player uses their Hero Power. It also introduced a new non-keyword mechanic, Joust. '
      },
      {
        name: 'Goblins vs Gnomes',
        image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/7/71/Goblins_vs_Gnomes_banner.jpg',
        text: 'The second infusion of new cards to be added to the game, the expansion features 143 new cards (123 of which are collectible), with a strong mechanical theme, and introduced the Mech minion type, as well as debuting the long-awaited spectator mode. The expansion was debuted in an arena-only launch event on December 4th, 2014, with the full launch taking place on December 8th/9th/10th. '
      }
    ];
  }

  ngOnInit() {
  }

}
