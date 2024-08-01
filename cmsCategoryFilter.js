const students = document.querySelectorAll('.student');
const studentCriterias = document.querySelectorAll('.criteria_field');
const decorations = document.querySelectorAll('.criteria-dec');

const defaultStatus = 'Active Student';

function filterStudents(status) {
  students.forEach((student) => {
    const studentStatus = student.getAttribute('status');
    if (studentStatus === status || status === '') {
      student.style.display = 'flex';
    } else {
      student.style.display = 'none';
    }
  });
}

filterStudents(defaultStatus);

decorations[0].style.opacity = 1;

studentCriterias.forEach((criteria, index) => {
  criteria.addEventListener('click', (e) => {
    decorations.forEach((dec, decIndex) => {
      if (index === decIndex) {
        dec.style.opacity = 1;
      } else {
        dec.style.opacity = 0;
      }
    });
  });

  const criteriaInput = criteria.querySelector('input');
  criteriaInput.addEventListener('change', () => {
    const selectedStatus = criteriaInput.value;
    filterStudents(selectedStatus);
  });
});
