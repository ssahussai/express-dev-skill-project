const devskills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'JavaScript'},
    {skill: 'DOM Manipulation'},
    {skill: 'NodeJS'},
    {skill: 'Express'},
    {skill: 'JQuery'}
];

module.exports = {
    getAll,
    getOne 
};

function getAll() {
    return devskills;
}

function getOne(id) {
    return devskills[id];
}