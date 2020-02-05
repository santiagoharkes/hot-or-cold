export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getInitialState = () => ({
    actual: generateRandomNumber(),
    guess: undefined,
    allGuess: [],
    attempt: 0,
    feedbackMessage: "¿Podés adivinar?",
    feedbackColor: '#fff',
    feedbackCode: null,
    block: false,
})

export const getFeedback = (difBtw) => {
    let feedbackMessage;
    let feedbackColor;
    let feedbackCode;

    if (difBtw === 0) {
        feedbackColor = '#000';
        feedbackMessage = '¡Adivinaste! ¡Podés probar de nuevo!';
        feedbackCode = 'gano'
    } else if (difBtw < 4 && difBtw !== 0) {
        feedbackColor = '#ff5722';
        feedbackMessage = '¡¡Me quema!! ¡Ya lo tenés!';
        feedbackCode = 'casi'
    } else if (difBtw >= 4 && difBtw < 10) {
        feedbackColor = '#ff5722';
        feedbackMessage = 'Estás cerca... ¡Caliente!';
        feedbackCode = 'caliente'
    } else if (difBtw >= 10 && difBtw < 20) {
        feedbackColor = '#ffeb38';
        feedbackMessage = 'Mmm... tibio';
        feedbackCode = 'tibio'
    } else {
        feedbackColor = '#5bc0de';
        feedbackMessage = 'Brrr... es el Himalaya, ¡Súper frio!';
        feedbackCode = 'frio'
    } 

    return {
        feedbackMessage,
        feedbackColor,
        feedbackCode,
    }
}