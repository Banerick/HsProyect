import { Injectable } from '@angular/core';

@Injectable()
export class InfoClaseService {
  public clases: any;
  constructor() {

    this.clases = [
    {
      name: 'Druid',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/f/fa/Malfurion_Stormrage%28621%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/b/ba/Shapeshift%28185%29.png',
      text: 'Shapeshifting protectors of the wild, with powerful Taunt minions and adaptable Choose One effects, druids are also able to accelerate their rate of mana accumulation, allowing them to access high-mana-cost cards earlier than their opponents. Druids are a versatile class, capable of using the forces of nature and primal rage to crush their enemies or empower their allies.'
    },
    {
      name: 'Hunter',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/a/a0/Rexxar%28484%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/0/0a/Steady_Shot%28481%29.png',
      text: 'Trackers and huntsmen, with a synergy with Beasts, a selection of bows, and a supply of cunning deadly traps, hunters never miss their mark. Whether unleashing their Beasts upon the enemy or sniping them from afar, hunters possess relentless and immediate damage capabilities.'
    },
    {
      name: 'Mage',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/3/3c/Jaina_Proudmoore%28320%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/1/1b/Fireblast%28677%29.png',
      text: 'Masters of arcane, fire and frost, mages wield formidable single-target and area of effect damage spells, and can freeze enemies in their tracks. Mages have a strong spell-synergy, capable of turning minor incantations into devastating Fireballs, and can employ a range of magical Secrets to redirect enemy effects, render themselves immune, or stop the deadliest foe or spell in its tracks.'
    },
    {
      name: 'Paladin',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/4/4d/Uther_Lightbringer%28257%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/8/84/Reinforce%28248%29.png',
      text: 'Stalwart champions of the Light, wielding sturdy weapons and gifting the recruits of their order with Divine Shields and a range of powerful Blessings. Paladins can also have a range of spells to heal themselves or smite their enemies, weaken foes, and Secrets to protect vulnerable targets'
    },
    {
      name: 'Priest',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/8/80/Anduin_Wrynn%28110%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/6/60/Lesser_Heal%28126%29.png',
      text: 'Devout healers with powerful restorative abilities, capable of sustaining themselves and their allies while sweeping away enemies, priests boast a range of healing synergies, but can also rely on their darker abilities to manipulate and destroy enemies, peering into or even seizing control of their opponents\' minds.'
    },
    {
      name: 'Rogue',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/a/a4/Valeera_Sanguinar%282%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/2/2a/Dagger_Mastery%28201%29.png',
      text: 'Subtle and evasive assassins, using flurries of swift sharp strikes to slice and incapacitate enemies, rogues prefer to wield light daggers, laced with deadly poisons. Rogues prefer to assault their opponents in rapid bursts of activity, activating Combos to gain powerful additional effects.'
    },
    {
      name: 'Shaman',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/4/4b/Thrall%28319%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/3/36/Totemic_Call%28316%29.png',
      text: 'Masters of the elements, shamans command the service of mighty elementals, and even the Elemental Lords themselves. Shamans can Overload their mana in order to rise to the needs of the moment, with their attacks producing varying potency. Shamans can also summon Totems to boost their powers.'
    },
    {
      name: 'Warlock',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/0/0a/Gul%27dan%28618%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/f/f9/Life_Tap%2820%29.png',
      text: 'Calling nightmarish Demons to their aid, warlocks are willing to sacrifice their own life, cards, and even their own minions to overwhelm their enemies. Regarding their own lifeblood as nothing more than a currency, warlocks readily trade away their Health to draw additional cards, but must often pay a terrible price for the services of the infernal beings with whom they consort.'
    },
    {
      name: 'Warrior',
      image: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/c/c5/Garrosh_Hellscream%28635%29.png',
      power: 'https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/9/9b/Armor_Up%21%28253%29.png',
      text: 'These lords of war use heavy weaponry and deadly attacks to slam and devastate the battlefield. While their skill with armor and shields allows them to soak up the mightiest of blows, their gladiatorial bloodlust brings synergy with Enrage and on-damage effects, sending their minions charging at the enemy.'
    }
  ];
  }

}
