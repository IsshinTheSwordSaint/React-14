import { useState } from 'react';

function Form2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [walidacja, setWalidacja] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateForm(eEmail, ePassword) {
    const emailOK = eEmail.includes("@");
    const passwordOK = ePassword.length >= 8;

    if (!emailOK) {
      setEmailError('Nie zawiera @');
    } else {
      setEmailError('');
    }

    if (!passwordOK) {
      setPasswordError('Hasło musi zawierać co najmniej 8 znaków');
    } else {
      setPasswordError('');
    }

    setWalidacja(emailOK && passwordOK);
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateForm(value, password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateForm(email, value);
  };

  return (
    <div>
      <h1>Formularz rejestracji</h1>
      <form>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter your email"
        /><br />

        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter your password"
        /><br />

        <button type="submit" disabled={!walidacja}>
          Zarejestruj
        </button>

        <p>{emailError}</p>
        <p>{passwordError}</p>
      </form>
    </div>
  );
}

export default Form2;