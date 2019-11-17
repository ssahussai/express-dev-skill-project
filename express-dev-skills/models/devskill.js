const devskills = [
    {skill: 'HTML', learned: 'Proficient'},
    {skill: 'CSS', learned: 'Proficient'},
    {skill: 'JavaScript', learned: 'Ongoing'},
    {skill: 'DOM Manipulation', learned: 'Ongoing'},
    {skill: 'NodeJS', learned: 'Ongoing'},
    {skill: 'Express', learned: 'Ongoing'},
    {skill: 'JQuery', learned: 'Proficient'},
    {skill: 'Express Middleware', learned: 'Ongoing'},
    {skill: 'Mongoose', learned: 'Ongoing'},
    {skill: 'MongoDB', learned: 'Ongoing'}
];

module.exports = {
    getAll,
    getOne,
    create 
};

function getAll() {
    return devskills;
}

function getOne(id) {
    return devskills[id];
}

function create(devskill) {
    devskills.push(devskill);
}