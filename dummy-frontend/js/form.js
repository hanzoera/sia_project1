const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Collect the form data and convert to a plain object
    const formData = new FormData(this);
    const payload = Object.fromEntries(formData.entries());

    try {
        // Send form data to the backend using fetch()
        const res = await fetch('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        
        // Parse the response only if it's JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const raw = await res.text();
            console.error('Non-JSON response:', raw);
            throw new Error('Expected JSON response from server');
        }

        const result = await res.json();
        console.log('Server Response:', result);

        // Show success or error message from server
        if (!res.ok) {
            Swal.fire('Error!', result.msg || 'Something went wrong.', 'error');
        } else {
            Swal.fire('Success!', result.msg || 'You are registered!', 'success');
            this.reset();
        }
    } catch (err) {
        console.error('Error submitting form:', err);
        Swal.fire('Error!', 'Could not connect to the server.', 'error');
    }
});