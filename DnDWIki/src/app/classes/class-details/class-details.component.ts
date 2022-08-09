import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClassExpression } from 'typescript';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ClassService) { }
  currentClassName: any;
  currentClassDetails: any;
  classLevelInfo: any;
  imageUrl: any;
  backstory: any;

  ngOnInit(): void {
    this.currentClassName = this.route.snapshot.paramMap.get("name");
    this.SelectClassImage(this.currentClassName);
    this.SelectClassBackstory(this.currentClassName);
    this.service.ReturnClassDetails(this.currentClassName).subscribe(data => {
       this.currentClassDetails = data 
      });

    this.service.ReturnClassLevelInfo(this.currentClassName).subscribe( data =>{
      this.classLevelInfo = data
      });
  }

  SelectClassBackstory(name: string){
    switch(name) {
      case "barbarian":
        this.backstory = "People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt. Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.";
        break;
      case "wizard":
        this.backstory = "Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study. Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.";
        break;
      case "bard":
        this.backstory = "In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers. The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.";
        break;
        case "cleric":
        this.backstory = "Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes. Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.";
        break;
        case "druid":
        this.backstory = "Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines. Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.";
        break;
        case "fighter":
        this.backstory = "Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.";
        break;
        case "monk":
        this.backstory = "Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.";
        break;
        case "paladin":
        this.backstory = "A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god. Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.";
        break;
        case "ranger":
        this.backstory = "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes. Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.";
        break;
        case "rogue":
        this.backstory = "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.";
        break;
        case "sorcerer":
        this.backstory = "Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways. The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can’t name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby’s birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality. Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.";
        break;
        case "warlock":
        this.backstory = "A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf. The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock’s being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.";
        break;
      default:
        this.backstory = null;
    }
  }

  SelectClassImage(name: string){
    switch(name) {
      case "barbarian":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png";
        break;
      case "wizard":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png";
        break;
      case "bard":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/369/420/618/636272705936709430.png";
        break;
        case "cleric":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/371/420/618/636272706155064423.png";
        break;
        case "druid":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/346/420/618/636272691461725405.png";
        break;
        case "fighter":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png";
        break;
        case "monk":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/489/420/618/636274646181411106.png";
        break;
        case "paladin":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/365/420/618/636272701937419552.png";
        break;
        case "ranger":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/367/420/618/636272702826438096.png";
        break;
        case "rogue":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png";
        break;
        case "sorcerer":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png";
        break;
        case "warlock":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/375/420/618/636272708661726603.png";
        break;
      default:
        this.imageUrl = null;
    }
  }

}
