const form = document.getElementById('result-form');
const resultDiv = document.getElementById('result');

// Sample data - Hapa tunatumia data ya mfano kwa ajili ya majaribio.
//hapa ndo utaingiza data za wanafunzi wote
const studentData = {
  "240242459857": { name: "Raymond Fanuel", marks: "80" },
  "67890": { name: "Jane Smith", marks: "95" },
  "11223": { name: "Mark White", marks: "70" },
};

form.addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent form submission from reloading page.
  
  const studentId = document.getElementById('student-id').value;
  
  // Check if the student ID exists in the data
  if (studentData[studentId]) {
    const student = studentData[studentId];
    resultDiv.innerHTML = `<p>Jina: ${student.name}</p><p>Matokeo: ${student.marks}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Hii namba ya usajili haipo!</p>`;
  }
});

function clearResults() {
  document.getElementById('result').innerHTML = '';
}
