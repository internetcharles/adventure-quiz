
const tavern = {
    id: 'tavern',
    title: 'The Ugly Sorceror\'s Tavern',
    image: 'http://placekitten.com/200/300',
    description: `You enter the bar and survey the room. You're fancying a drink, so you approach the barmaid, who happens to be an Orc. What do you say?`,
    options: [{
        id: 'nervous',
        description: `
        "Ah, haha, hey, how's it goin? It's crazy, never seen an orc barmaid before, haha... How long have you worked here? Haha...
        `,
        result: `
            She stops shining a mug and looks up at you in disgust. "I'm not a barmaid, you son of a bitch, I own this goddamn tavern." She smashes the mug over your head. You sustain 60 damage.
        `,
        hp: -60,
        gold: 0,
    }, {
        id: 'goblin',
        description: 'Speak loudly about how you killed it during your last quest.',
        result: `
            You turn your back to the orc and pretend to be speaking to someone across the tavern.
            "YEAH SO I DID JUST DID A CYCLONE ATTACK WITH MY SWORD AND WIPED OUT THE GOBLIN NEST. EVEN THE GOBLINS WERE IMPRESSED"
            You turn around, to find the orc woman squinting at you.
            "Who are you yelling at? There's no one else here."
        `,
        hp: 0,
        gold: 0,
    }, {
        id: 'crypto',
        description: `Talk about cryptocurrency.`,
        result: `
        You say, "Do you accept OrcCoin? Ha, have you even HEARD of it? Let's just say I bought a lot of it... enough to buy you a drink, lady."
        "You might wanna check the news," she says.
        You pull out your phone and see that OrcCoin was a total scam. You've lost all your gold.
        `,
        hp: 0,
        gold: -50,
    }]
};


const shrine = {
    id: 'shrine',
    title: 'An Old Shrine',
    image: 'http://placekitten.com/200/300',
    description: `You come across the ruins of a shrine. A priestess is kneeling before the bust of an old orc warrior. What do you say?`,
    options: [{
        id: 'brazen',
        description: `
        "Hey, if you like that statue so much, you should hang out with me. I'm practically its spitting image!"
        `,
        result: `
            "You're right... because it's YOUR memorial." She stabs you.
        `,
        hp: -100,
        gold: 0,
    }, {
        id: 'prayer',
        description: '"Ah, will you let me join you in prayer."',
        result: `
            She turns and nods. You approach and kneel beside her, looking up at the orc. "Give me your hand," she says. You oblige, and raise your palm in her direction.
            "YOU SHOULDN'T HAVE DONE THAT, I'M A VAMPIRE!" 
            She bites your hand. You're now a vampire. You gain 50 HP.
        `,
        hp: 50,
        gold: 0,
    }, {
        id: 'theft',
        description: `Sneak by her and grab some of the tribute left on the grave..`,
        result: `
        You succeed in sneaking by the priestess and steal 100 gold. There was also a pair of Levi's jeans left at the altar. You take those too.
        `,
        hp: 0,
        gold: 100,
    }]
};

const castle = {
    id: 'castle',
    title: 'The Queen\'s Castle',
    image: 'http://placekitten.com/200/300',
    description: `You enter the throne room of the queen herself! She sits on a large golden chair at the end of a long roll of carpet. What do you say?`,
    options: [{
        id: 'hattip',
        description: `
        "A tip of the hat to m'lady. *tip hat*"
        `,
        result: `
            "Now this is a true gentleman!" she says. "A man of culture."
            You smile, seeing that your chivalry has finally paid off!
            However, her smile turns to a sneer.
            "Kill him," she says.
            You're dead, buddy.
        `,
        hp: -100,
        gold: 0,
    }, {
        id: 'brazen',
        description: '"Hey, you need anyone killed?"',
        result: `
            She shakes her head. "No, but thank you for asking. No one ever asks. I like the cut of your jib, so I'm gonna keep you on retainer," she says.
            "Ah, sick!" you say. You're now the queen's bounty hunter. You receive 5000 gold.
        `,
        hp: 0,
        gold: 5000,
    }, {
        id: 'brazen',
        description: `"Oh, man. That king of yours sure made a big mistake getting killed by that boar and leaving you single! How about we share a glass of mead?"`,
        result: `
        Yeah, it doesn't work. You're incapacitated by a royal knight and thrown into the moat. You lose 50 HP.
        `,
        hp: -50,
        gold: 0,
    }]
};

const bridge = {
    id: 'bridge',
    title: 'Under a Wooden Bridge',
    image: 'http://placekitten.com/200/300',
    description: `You stumble under a small wooden bridge to find a troll with a hunched back. "Ah, why not?" you figure.`,
    options: [{
        id: 'whatever',
        description: `
        "I figure we might as well get together."
        `,
        result: `
            The troll turns. "Oh, just because I'm a dirty bridge troll means I'll just get with anybody? How dare you, sir? I'm a dignified bridge troll, and frankly, you REEK of desperation. Now away with you!"
            Yikes. You lose 50 HP. Get it together.
        `,
        hp: -50,
        gold: 0,
    }, {
        id: 'compliment',
        description: '"Ah, hello there. Might I say you have wondrous posture?"',
        result: `
            She shakes her head. "Oh yeah, nice one. My back is hunched at a ninety degree angle. Get out of here with your fake flattery."
            You leave.
        `,
        hp: 0,
        gold: 0,
    }, {
        id: 'brazen',
        description: `"Hey there, is there room for two under this bridge?"`,
        result: `
        The bridge troll turns and beckons your forward. You share a can of beans in silent. It's a nice night.
        You're replenished by the beans and gain 50 hp.
        `,
        hp: 50,
        gold: 0,
    }]
};

const locations = [
    tavern,
    shrine,
    castle,
    bridge,
];

export default locations;