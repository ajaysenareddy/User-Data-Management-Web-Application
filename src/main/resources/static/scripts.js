document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const usersTable = document.getElementById('usersBody');


    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(userForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email'),
            age: formData.get('age'),
            dob: formData.get('dob')
        };


        fetch('/api/users_details/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('User created:', data);
            userForm.reset();
            fetchUsers();
        })
        .catch(error => console.error('Error:', error));
    });


    function fetchUsers() {
        fetch('/api/users_details/')
        .then(response => response.json())
        .then(users => {
            console.log('Users:', users);
            usersTable.innerHTML = ''; // Clear previous data


            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.dob}</td>
                `;
                usersTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
    }

    fetchUsers();
});
