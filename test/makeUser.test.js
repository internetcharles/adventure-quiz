// IMPORT MODULES under test here:
import makeUser from '../make-user.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const newForm = new FormData();

    newForm.set('name', 'dani');
    newForm.set('clothes', 'yeezy');

    const expected = {
        name: 'dani',
        clothes: 'yeezy',
        HP: 100,
        gold: 50,

    };

    //Act 
    // Call the function you're testing and set the result to a const
    const results = makeUser(newForm);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});
