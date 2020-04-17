export default function makeUser(formData) { 
    const name = formData.get('name');
    const userClothes = formData.get('clothes');
    const userObject = {
        name: name,
        clothes: userClothes,
        HP: 100,
        gold: 50,
    };

    return userObject;
}