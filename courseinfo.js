//courseinfo.js
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
    { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
    { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }
  ]
};
//loop through learner submissions i< submissions.length
// match assignment_id with ag. assignments[i].id
//if match avg: {score/points possible}
//result[i].key2 = "this is my next key"

// second for loop assignment group. assignments.length j =0
//


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125, assignment_id: 1, submission:
      { submitted_at: "2023-01-25", score: 47 }
  },
  {
    learner_id: 125, assignment_id: 2, submission:
      { submitted_at: "2023-02-12", score: 150 }
  },
  {
    learner_id: 125, assignment_id: 3, submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132, assignment_id: 1, submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132, assignment_id: 2, submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


function getLearnerData(course, ag, submissions) {
  const unSortedId = [];
  const result = [];

try {
  // Compares assignmentgroup and course id#
  if (course.id !== ag.course_id) {
    console.log("Invalid input, course.id doesn't match this group")
    return;
  }
  // Exclude assignments not dued yet
  const currentDate = new Date();
  const dueAssignments = [];
  for (let i = 0; i < ag.assignments.length; i++) {
    const assignment = ag.assignments[i];
    if (new Date(assignment.due_at) <= currentDate) {
      dueAssignments.push(assignment);
    }
  }


  // Turn learner_id into a key
  for (let i = 0; i < submissions.length; i++) {
    unSortedId.push(submissions[i].learner_id);
  }
  const sortedId = [...new Set(unSortedId)];
  //Push each student into an Array of Objects
  for (let i = 0; i < sortedId.length; i++) {
    result.push({ id: sortedId[i], totalScore: 0, totalPoints: 0 });
  }
  // Add the submission score for each Learner
  for (let i = 0; i < submissions.length; i++) {
    for (let j = 0; j < dueAssignments.length; j++) {
      if (submissions[i].assignment_id === dueAssignments[j].id) {

        // Check if the submission is late  
        const submittedAt = new Date(submissions[i].submission.submitted_at);
        const dueAt = new Date(dueAssignments[j].due_at);
        const isLate = submittedAt > dueAt;
        if (isLate) { points = (submissions[i].submission.score*.9) / (dueAssignments[j].points_possible);}
        else { points = submissions[i].submission.score / dueAssignments[j].points_possible;}
       

        // Locate learners to assign points too
        for (let k = 0; k < result.length; k++) {
          
          if (result[k].id == submissions[i].learner_id) {
            // Assign the values to respective learners
            result[k][submissions[i].assignment_id] = points;
            if (isLate) {
              result[k].totalScore += (submissions[i].submission.score) * 0.9;
            } else { result[k].totalScore += submissions[i].submission.score; }

            result[k].totalPoints += dueAssignments[j].points_possible;
          }
        }
      }
    }
  }
  // Adding the Average weighted score
  let z = 0;
  while (z < result.length) {
    if (result[z].totalPoints > 0) {
      result[z].avg = parseFloat((result[z].totalScore / result[z].totalPoints).toFixed(2));
    } else {
      result[z].avg = 0; // In case there are no points possible
    }

    // Remove the extra fields 
    delete result[z].totalScore;
    delete result[z].totalPoints;
    z++
  }



} catch (error){
  console.log("Error 404, your data is incorrect, not my code :)", error);
}



  return result
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

