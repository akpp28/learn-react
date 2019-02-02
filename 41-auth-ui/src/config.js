const apiUrl = 'http://localhost:8000';
const apiTokenAuthUrl = `${apiUrl}/users/api-token-auth/`;
const apiTokenVerifyUrl = `${apiUrl}/users/api-token-verify/`;
const apiUrlSignUp = `${apiUrl}/users/registration/`;
const apiUrlCreateNote = `${apiUrl}/notes/new/`;
const apiUrlgetAllNotes = `${apiUrl}/notes/`;

const jwtAuthHeaderPrefix = 'JWT';

export default {
    apiUrl,
    apiTokenVerifyUrl,
    apiTokenAuthUrl,
    apiUrlSignUp,
    apiUrlCreateNote,
    jwtAuthHeaderPrefix,
    apiUrlgetAllNotes,
};

