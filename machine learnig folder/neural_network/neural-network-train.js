const brain = require('brain.js');

const likes = [
  { Children: 1, Education: 0, Women: 0, Health: 0},
  { Children: 0, Education: 1, Women: 0, Health: 0}, 
  { Children: 0, Education: 0, Women: 1, Health: 0},
  { Children: 0, Education: 0, Women: 0, Health: 1},
  { Children: 1, Education: 1, Women: 0, Health: 0},
  { Children: 1, Education: 0, Women: 1, Health: 0},
  { Children: 1, Education: 0, Women: 0, Health: 1},
  { Children: 1, Education: 1, Women: 0, Health: 0},
  { Children: 0, Education: 1, Women: 1, Health: 0},
  { Children: 0, Education: 1, Women: 0, Health: 1},
  { Children: 1, Education: 0, Women: 0, Health: 1},
  { Children: 0, Education: 1, Women: 0, Health: 1},
  { Children: 0, Education: 0, Women: 1, Health: 1},
  { Children: 1, Education: 0, Women: 1, Health: 0},
  { Children: 0, Education: 1, Women: 1, Health: 0},
  { Children: 0, Education: 0, Women: 1, Health: 1},

];

const recommendation = [
    { Children: 1 },
    { Education: 1 },
    { Women: 1 },
    { Health: 1 },
    { Children: 1, Education: 1 },
    { Children: 1, Women: 1},
    { Children: 1, Health: 1},
    { Children: 1, Education: 1 },
    { Education: 1, Women: 1 },
    { Education: 1, Health: 1 },
    { Children: 1, Health: 1 },
    { Education: 1, Health: 1 },
    { Women: 1, Health: 1 },
    { Children: 1, Women: 1},
    { Education: 1, Women: 1},
    { Women: 1, Health: 1}
    
];

const trainingData = [];

for (let i = 0; i < likes.length; i++) {
    trainingData.push({
        input: likes[i],
        output: recommendation[i]
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

net.train(trainingData);

//const result1 = net.run({ Children: 0, Education: 1, Women: 0, Health: 0})
//const result1 = net.run({Education: 1})
var likes1 = 'Education';
const result1 = net.run({[likes1]:1})

 //console.log("value of result1 is ",result1);

function suggestions(likes) {
    //console.log("value of likes is ",likes);
    //const result = net.run(({ [likes1]: 1 }));
    const result = net.run(likes);
    //const result = net.run(({Education: 1}));
    //console.log("value of result sd",result);
    let highestValue = 0;
    let highestNgo = '';
    for (let recommendation in result) {
        if (result[recommendation] > highestValue) {
            highestValue = result[recommendation];
            highestNgo = recommendation;
        }
    }
    
    return highestNgo;
}

console.log(suggestions({'Education': 1}));
console.log(suggestions({ Children: 1, Education: 0, Women: 1}))

