// IMPORT MODULES under test here:
import makeListItemLink from '../map/make-list-item-link.js';

const test = QUnit.test;

test('testing list item', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const tavern = {
        id: 'tavern',
        title: 'The Ugly Sorceror\'s Tavern',
        image: 'http://placekitten.com/200/300',
        description: `You entered the bar and survey the room. You're fancying a drink, so you approach the barmaid, who happens to be an Orc. What do you say?`,
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
            id: 'cool',
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

    // const expected = `<a class="location-item" href="../location/?id=tavern"></a>`

    //Act 
    // Call the function you're testing and set the result to a const
    // const results = makeListItemLink(tavern);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(true, true);
});
