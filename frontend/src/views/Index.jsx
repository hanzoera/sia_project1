import '../styles/account_form.css'

function Index() {

    return (
        <>
            { console.log('Login/Register page loaded.') }
            <div>
                The winner takes it all.
            </div>
            <form method="post">
                <h1>Login</h1>
                <p>Welcome back! Sign in to your account.</p>
                {/* NOTED: Form Safety Validation */}
                <label htmlFor="first_name" className="required">First Name</label>
                <input type="text" name="first_name" id="first_name" required/>
                <label htmlFor="first_name" className="required">Last Name</label>
                <input type="text" name="last_name" id="last_name" required/>
                <label htmlFor="email" className="required">Email</label>
                <input type="email" name="email" id="email" />
            </form>
        </>
    );
}

export default Index