// dashboard.js
import { auth, firestore } from './firebaseConfig.js';

// Gerar chave de ativação
document.getElementById('generateKeyForm').addEventListener('submit', (event) => {
  event.preventDefault();
  generateActivationKey(auth.currentUser.uid).then((key) => {
    document.getElementById('activationKey').innerText = key;
  });
});

// Gerar email e senha
document.getElementById('generateCredentialsForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('userEmail').value;
  const password = document.getElementById('userPassword').value;
  createUser(email, password);
});

const generateActivationKey = async (affiliateId) => {
  const key = generateRandomKey();
  await firestore.collection('activationKeys').add({
    affiliateId,
    key,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  return key;
};

const generateRandomKey = () => {
  return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
    return (Math.random() * 16 | 0).toString(16);
  });
};

const createUser = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User created:', userCredential.user);
      document.getElementById('generatedEmail').innerText = email;
      document.getElementById('generatedPassword').innerText = password;
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
};
