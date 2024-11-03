const course = {id: 451, name: "Introduction to JavaScript"};
// The provided assignment group.
const ag = {
  id: 12345, name: "Fundamentals of JavaScript", course_id: 451, group_weight: 25, assignments: [
    {id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50},
    {id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150},
    {id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500}
  ]
};

const submissions = [
  {learner_id: 125, assignment_id: 1, submission: {submitted_at: "2023-01-25", score: 47}},
  {learner_id: 125, assignment_id: 2, submission: {submitted_at: "2023-02-12", score: 150}},
  {learner_id: 125, assignment_id: 3, submission: {submitted_at: "2023-01-25", score: 400}},
  {learner_id: 132, assignment_id: 1, submission: {submitted_at: "2023-01-24", score: 39}},
  {learner_id: 132, assignment_id: 2, submission: {submitted_at: "2023-03-07", score: 140}}
];

//Lets see how i'll call each Object I want
/* let scores = Object.values(LearnerSubmissions[1]);
let points = Object.values(AssignmentGroup.assignments);
let group = [scores , AssignmentGroup];
// console.log(scores);
console.log(group); */

// console.log(AssignmentGroup.assignments);


// Check if the assignment group belongs to the course
function confirmAssignmentGroup(courseInfo, assignmentGroup) {
  return courseInfo.id === assignmentGroup.course_id;
}
/* 
console.log(confirmAssignmentGroup(CourseInfo, AssignmentGroup));
console.log(CourseInfo.id);
console.log(AssignmentGroup.course_id); */

/* function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result); */

  /*
  [] = an array  {} = an Object AssignmentGroup = {object[array of{objects}]}  LearnerSumbmissions = [array of{objects{objects in an object}}]
  */

  const currentDate = new Date();
  const dueAssignments = [];

  for (let i = 0; i < ag.assignments.length; i++) {
    const assignment = ag.assignments[i];
    if (new Date(assignment.due_at) <= currentDate) {
        dueAssignments.push(assignment);
    }
}
// console.log(dueAssignments);


// Getting a list of each student from submissions

/* const student = submissions.reduce((accumulator, id) =>{
const {learner_id} = id;
if (!accumulator[learner_id]) {
  accumulator[learner_id] = [];
}
//Push the current object into an array with the id
accumulator[learner_id].push(id)
return accumulator
})

console.log(student);
 */

if (submissions[0].assignment_id === ag.assignments[0].id ){
  console.log("Works");
}

// submissions[0].mess = "Test"

console.log(submissions);

console.log(submissions[0].submission.score);