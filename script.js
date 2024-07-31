document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('patient-form');
    const patientList = document.getElementById('patient-list');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const contact = document.getElementById('contact').value;
        
        addPatient(name, age, gender, contact);
        
        form.reset();
    });
    
    function addPatient(name, age, gender, contact) {
        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Age: ${age}, Gender: ${gender}, Contact: ${contact}`;
        patientList.appendChild(li);
    }
});
