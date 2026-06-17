
let currentLocation = "";

const locations = {
garden:{
duration:"3-4 min",
content:`<h2>📍 Public Garden / Back Bay</h2>
<h3>Look At</h3><ul><li>Public Garden</li><li>Lagoon</li><li>Back Bay skyline</li></ul>
<h3>Key Points</h3><ul>
<li>Boston began as the Shawmut Peninsula.</li>
<li>Much of Back Bay was tidal marsh and open water.</li>
<li>Back Bay was filled between 1857 and 1882.</li>
<li>Gravel arrived by rail from Needham.</li>
<li>The project addressed growth and public health concerns.</li>
<li>The Public Garden is recognized as America's first public botanical garden.</li>
<li>Everything between here and the Prudential was once water.</li>
</ul>
<h3>Audience Question</h3><p>How many people thought Back Bay had always been land?</p>
<h3>Transition</h3><p>We're about to walk through one of the largest urban planning projects in nineteenth-century America.</p>`},
commonwealth:{
duration:"1-2 min",
content:`<h2>📍 Commonwealth Avenue</h2>
<h3>Look At</h3><ul><li>Boulevard</li><li>Brownstones</li><li>The Mall</li></ul>
<h3>Key Points</h3><ul>
<li>Back Bay was carefully planned.</li>
<li>Designers drew inspiration from European boulevards.</li>
<li>Notice the consistent setbacks and tree-lined median.</li>
<li>This was intended to be one of Boston's most prestigious neighborhoods.</li>
</ul>`},
copley:{
duration:"5-6 min",
content:`<h2>📍 Copley Square</h2>
<h3>Trinity Church</h3><ul>
<li>Completed in 1877.</li>
<li>Designed by Henry Hobson Richardson.</li>
<li>Richardsonian Romanesque is named after him.</li>
<li>Voted America's most important building by architects in 1885.</li>
</ul>
<h3>Hancock Tower</h3><ul>
<li>Completed in 1976.</li>
<li>Designed by Henry Cobb of I. M. Pei & Partners.</li>
<li>Initially controversial.</li>
<li>Glass panels detached and had to be replaced.</li>
<li>Nicknamed the world's tallest plywood building.</li>
</ul>
<h3>Question</h3><p>Which building here caused more controversy when it was built?</p>`},
library:{
duration:"3-4 min",
content:`<h2>📍 Boston Public Library</h2>
<ul>
<li>Opened in 1895.</li>
<li>Designed by Charles Follen McKim.</li>
<li>Beaux-Arts masterpiece.</li>
<li>Inscription: "Free to All."</li>
<li>First large free municipal library in the United States.</li>
</ul>
<h3>Bonus Fact</h3><p>Massachusetts General Hospital hosted the first public demonstration of surgical anesthesia in 1846.</p>`},
prudential:{
duration:"3-4 min",
content:`<h2>📍 Prudential Center</h2>
<ul>
<li>Completed in 1964.</li>
<li>Built over former Boston & Albany Railroad yards.</li>
<li>One of the largest private construction projects in the U.S. at the time.</li>
<li>Helped redefine Boston's skyline.</li>
</ul>
<h3>Closing Thought</h3><p>Boston has spent nearly four centuries solving problems, reinventing itself, and arguing every step of the way.</p>`}
}
const facts=[
"Everything between the Public Garden and the Prudential was once water.",
"Back Bay was filled using gravel brought by rail from Needham.",
"The Public Garden is recognized as America's first public botanical garden.",
"Trinity Church was voted America's most important building by architects in 1885.",
"The Boston Public Library was the first large free municipal library in the United States."
];
const questions=[
"How many people thought Back Bay had always been land?",
"What do you think Boston's biggest industry is today?",
"Would you have supported filling an entire bay to create new land?"
];
const fillers=[
"Talk about the Needham gravel trains that filled Back Bay.",
"Compare Trinity Church and Hancock Tower.",
"Discuss why Back Bay was considered a public health problem."
];

function showLocation(id){
currentLocation=id;
document.getElementById("content").innerHTML=`<p><strong>Estimated Time:</strong> ${locations[id].duration}</p>${locations[id].content}`;
}
function randomFact(){
const item=facts[Math.floor(Math.random()*facts.length)];
document.getElementById("content").innerHTML=`<h2>🎲 Crosswalk Fact</h2><p>${item}</p>`;
}
function randomQuestion(){
const item=questions[Math.floor(Math.random()*questions.length)];
document.getElementById("content").innerHTML=`<h2>❓ Audience Question</h2><p>${item}</p>`;
}
function emergencyFiller(){
const item=fillers[Math.floor(Math.random()*fillers.length)];
document.getElementById("content").innerHTML=`<h2>🚨 Emergency Filler</h2><p>${item}</p>`;
}
function crosswalkMode(){
const fact=facts[Math.floor(Math.random()*facts.length)];
const question=questions[Math.floor(Math.random()*questions.length)];
document.getElementById("content").innerHTML=`<h2>🚦 Crosswalk Mode</h2><h3>Fact</h3><p>${fact}</p><h3>Question</h3><p>${question}</p>`;
}
function copyCurrent(){
const text=document.getElementById("content").innerText;
navigator.clipboard.writeText(text);
alert("Copied!");
}
