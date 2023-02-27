// Question 1.

function InstagramPost(authorHandle, content, imageUrl, numOfViews, numOfLikes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageUrl = imageUrl;
    this.numOfViews = numOfViews;
    this.numOfLikes = numOfLikes;
}

// Question 2.

const post1 = new InstagramPost('@Kanyin_Cole', 'I really love Javascript!!!','https://post.com/kanyin.jpg',45, 32);
const post2 = new InstagramPost('@Ben_Arfa', 'Vote Peter Obi ✅','https://post.com/benarfa.jpg',409, 387);

console.log(post1);  // ---> Test Case
console.log(post2);  // ---> Test Case

// Question 3.

// a.

function createPerson(name, age, location){
    return {
        name: name,
        age: age,
        location: location,

    }
}

// b.

function createJambScores(eng, govt, lit, crk){
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    };
}

const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
const musaJambScores = createJambScores(70, 85, 82, 94);
musa.jambScore = musaJambScores;

console.log(musa); // ---> Test Case

//4. What are the different ways you can clone an object? Give examples for each of them.
/*
1.  Use the spread operator. Example: const copy1 = { ...data }
2.  Call the Object.assign() function. Example: const copy2 = Object.assign({}, data)
3.  Use JSON parsing. Example: copy3 = JSON.parse(JSON.stringify(data))
4.  Use the structuredClone() function. Example: copy4 = structuredClone(data)
*/


// 5.

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for(let [party, candidates] of Object.entries(presidentialCandidates)){
    console.log(`${candidates} is the presidential candidate of ${party}`);
}