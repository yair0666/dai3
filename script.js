document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const submitButton = document.getElementById('submit');
    const messageDiv = document.getElementById('message');

    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (name) {
            const message = generateMessage(name);
            messageDiv.textContent = message;
        } else {
            alert('Por favor, ingresa tu nombre.');
        }
    });

    function generateMessage(name) {
        const moodMessages = {
            feliz: [
                "¡Qué bueno saber que estás feliz, sigue así!",
                "Te amo",
                "Tú puedes con todo, ¡no hay nada que te detenga cuando estás feliz!",
                "Estoy seguro de que hoy será un gran día porque estás feliz.",
                "Tu felicidad es contagiosa, iluminas el día de todos a tu alrededor.",
                "Los días felices son los mejores para enfrentar nuevos desafíos. ¡A por todas!",
                "En tus momentos de felicidad, el universo conspira a tu favor.",
                "No hay límite para lo que puedes lograr cuando estás lleno/a de alegría.",
                "La felicidad es el ingrediente secreto para una vida plena y exitosa.",
                "Recuerda que la felicidad está en las pequeñas cosas, disfrútalas al máximo.",
                "La felicidad es un viaje, no un destino. ¡Disfruta cada momento!",
                "Tu sonrisa es tu mayor superpoder, úsalo para conquistar el mundo.",
                "La vida es más hermosa cuando la vives con una sonrisa en el rostro.",
                "Las oportunidades son infinitas cuando estás lleno/a de felicidad.",
                "Que la felicidad te acompañe en cada paso que des, mi amor.",
                "El secreto de la felicidad está en vivir en el presente y apreciar lo que tienes.",
                "Cada día es una nueva oportunidad para encontrar la felicidad en las cosas simples.",
                "La felicidad no es algo que encuentres, es algo que creas dentro de ti.",
                "Hoy es un buen día para ser feliz. ¡No dejes que nada te quite esa sonrisa!",
                "Tu felicidad es mi mayor alegría, te amo más de lo que puedas imaginar.",
                "Siempre estaré aquí para celebrar tus momentos de felicidad contigo."
            ],
            triste: [
                "No importa cómo te sientas, siempre estoy aquí para ti.",
                "Te amo",
                "Recuerda que los días tristes también pasan, ¡sigue adelante con fuerza!",
                "La tristeza es solo un capítulo, tu historia es mucho más que eso.",
                "A veces las lágrimas son necesarias para limpiar el alma y sanar el corazón.",
                "Tu tristeza es temporal, pero tu fortaleza es eterna.",
                "La tristeza nos recuerda lo importante que es sentir y estar vivos.",
                "En los momentos de tristeza es cuando más crecemos y aprendemos sobre nosotros mismos.",
                "Tu tristeza es como una nube pasajera, pronto dará paso a un cielo despejado.",
                "No estás solo/a, siempre estaré aquí para abrazarte y consolarte.",
                "Recuerda que detrás de cada nube gris siempre hay un rayo de sol esperando brillar.",
                "Las lágrimas son el agua que riega el jardín del crecimiento personal.",
                "La tristeza es solo un invitado temporal, no dejes que se convierta en tu hogar.",
                "No temas a la tristeza, es parte de la vida y te hace más fuerte.",
                "La tristeza es un recordatorio de que eres humano/a, permítete sentir y sanar.",
                "Tu fuerza interior es más grande que cualquier tristeza que puedas enfrentar.",
                "No importa cuánto dure la noche, siempre habrá un amanecer lleno de esperanza.",
                "Los días tristes nos hacen apreciar aún más los días felices.",
                "Nunca subestimes el poder de tu propia luz para iluminar la oscuridad.",
                "La tristeza es solo un capítulo en tu historia, no permitas que defina tu final.",
                "Aunque estés triste, recuerda que siempre hay algo hermoso por lo que vale la pena vivir."
            ],
            masomenos: [
                "¡No te preocupes! Todos tenemos días así, pero recuerda que siempre hay una razón para sonreír.",
                "Te amo",
                
                "Incluso en los días más o menos, tienes el poder de hacer que todo sea especial.",
                "Mantén la cabeza en alto, pronto vendrán mejores días.",
                "A veces solo necesitas un pequeño descanso para recargar energías y volver a empezar.",
                "La vida es una montaña rusa de altibajos, disfruta del viaje.",
                "Recuerda que eres más fuerte de lo que crees, incluso en los momentos más difíciles.",
                "Tus días más o menos te preparan para apreciar aún más los días brillantes que vendrán.",
                "El equilibrio es clave en la vida, aprende a encontrar la paz en medio del caos.",
                "No te preocupes por el futuro, vive en el presente y confía en que todo saldrá bien.",
                "La vida está llena de altibajos, pero siempre hay algo bueno que encontrar en cada día.",
                "Nadie espera que seas perfecto/a, permítete sentir y aceptar tus días más o menos.",
                "Tómate un momento para respirar hondo y recordar que todo estará bien.",
                "Los días más o menos son parte del viaje, pero siempre encontrarás la fuerza para seguir adelante.",
                "Aprende a bailar bajo la lluvia y encontrar la belleza en los días grises.",
                "No importa lo que enfrentes, siempre habrá una luz al final del túnel.",
                "La vida está llena de altibajos, pero tu fortaleza es constante.",
                "Cada desafío que enfrentas te hace más fuerte y más sabio/a.",
                "Los días más o menos son solo una pausa en tu increíble viaje.",
                "Recuerda que cada nube tiene un borde plateado, busca la belleza en la oscuridad.",
                "Incluso en los días más o menos, tienes el poder de hacer una diferencia en el mundo.",
                "Confía en ti mismo/a, tienes todo lo que necesitas para superar cualquier obstáculo.",
                "La vida es un hermoso rompecabezas y cada día más o menos es una pieza más en su lugar.",
                "No te rindas, incluso los días más difíciles te están acercando a tus sueños.",
                "Recuerda que la vida es un viaje y los días más o menos son solo parte del camino.",
                "Tú eres más fuerte de lo que crees, incluso en tus días más o menos.",
                "Cada día es una nueva oportunidad para encontrar la belleza en lo cotidiano.",
                "La verdadera fuerza reside en levantarse cada vez que caes, incluso en los días más o menos.",
                "No permitas que los días más o menos te impidan ver la magia que te rodea.",
                "La vida está llena de momentos preciosos, incluso en los días más o menos.",
                "Tú eres el autor de tu propia historia, incluso en los días más o menos.",
                "No importa lo que te depare el día, siempre habrá algo bueno que descubrir.",
                "La vida es una montaña rusa emocional, disfruta del paseo."
                
            ]
        };

        const mood = prompt(`${name}, ¿cómo te sientes hoy? (feliz / triste / más o menos)`);

        if (mood && moodMessages[mood]) {
            const randomIndex = Math.floor(Math.random() * moodMessages[mood].length);
            const randomMessage = moodMessages[mood][randomIndex];
            return `${randomMessage} Recuerda que te quiero muchito, mi Dairita ❤️`;
        } else {
            return `¡No importa cómo te sientas! Siempre te apoyaré y estaré aquí para ti. Recuerda que te quiero muchito, mi Dairita ❤️`;
        }
    }
});
