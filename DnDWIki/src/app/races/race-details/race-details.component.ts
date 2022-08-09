import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacesService } from '../races.service';


@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: RacesService) { }
  currentRace: string;
  imageUrl: string;
  introduction: string;
  physicalDescription: string;
  raceDetails: any;

  ngOnInit(): void {
    this.currentRace = this.route.snapshot.paramMap.get("name");
    this.GetImageUrl(this.currentRace);
    this.GetDescriptions(this.currentRace);
    this.service.ReturnRaceDetails(this.currentRace).subscribe(
      data => (this.raceDetails = data)
    );
  }

  GetImageUrl(name: string) {
    switch (name) {
      case "dragonborn":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/340/420/618/636272677995471928.png";
        break;
      case "dwarf":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png";
        break;
      case "elf":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/7/639/420/618/636287075350739045.png";
        break;
      case "gnome":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/334/420/618/636272671553055253.png";
        break;
      case "half-elf":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/481/420/618/636274618102950794.png";
        break;
      case "half-orc":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/466/420/618/636274570630462055.png";
        break;
      case "halfling":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/256/420/618/636271789409776659.png";
        break;
      case "human":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png";
        break;
      case "tiefling":
        this.imageUrl = "https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png";
        break;
    }
  }

  GetDescriptions(name: string) {
    switch (name) {
      case "dragonborn":
        this.introduction = "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.";
        this.physicalDescription = "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand. The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze.";
        break;
      case "dwarf":
        this.introduction = "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.";
        this.physicalDescription = "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk. Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.";
        break;
      case "elf":
        this.introduction = "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.";
        this.physicalDescription = "With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females. Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.";
        break;
      case "gnome":
        this.introduction = "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.";
        this.physicalDescription = "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around. A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels.";
        break;
      case "half-elf":
        this.introduction = "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.";
        this.physicalDescription = "To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents.";
        break;
      case "half-orc":
        this.introduction = "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human communities, sometimes form alliances. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.";
        this.physicalDescription = "Half-orcs exhibit a blend of orcish and human characteristics, and their appearance varies widely. Grayish skin tones and prominent teeth are the most common shared elements among these folk. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former prisoner or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries.";
        break;
      case "halfling":
        this.introduction = "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.";
        this.physicalDescription = "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds. Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors. Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.";
        break;
      case "human":
        this.introduction = "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.";
        this.physicalDescription = "With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century.";
        break;
      case "tiefling":
        this.introduction = "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.";
        this.physicalDescription = "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple. ";
        break;
    }

  }

}
