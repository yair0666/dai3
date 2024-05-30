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
                "¡Ma alegra que estás feliz, gpi un abaso!",
                "Te amo",
                "Tú puedes con todo, ¡no hay nada que te detenga cuando estás feliz!",
                "Estoy seguro de que hoy será un gran día porque estás feliz.",
                "Tu felicidad es contagiosa, iluminas el día de todos a tu alrededor.",
                "Los días felices son los mejores para enfrentar nuevos desafíos. ¡Siuuu!",
                "En tus momentos de felicidad, el universo conspira a tu favor.",
                "No hay límite para lo que puedes lograr cuando estás llena de alegría.",
                "La felicidad es el ingrediente secreto para una vida plena y exitosa.",
                "Recuerda que la felicidad está en las pequeñas cosas, disfrútalas al máximo.",
                "La felicidad es un viaje, no un destino. ¡Disfruta cada momento!",
                "Tu sonrisa es tu mayor superpoder, úsalo para conquistar el mundo.",
                "La vida es más hermosa cuando la vives con una sonrisa en el rostro.",
                "Las oportunidades son infinitas cuando estás llena de felicidad.",
                "Que la felicidad te acompañe en cada paso que des, mi amor.",
                "El secreto de la felicidad está en vivir en el presente y apreciar lo que tienes.",
                "Cada día es una nueva oportunidad para encontrar la felicidad en las cosas simples.",
                "La felicidad no es algo que encuentres, es algo que creas dentro de ti.",
                "Hoy es un buen día para ser feliz. ¡No dejes que nada te quite esa sonrisa!",
                "Tu felicidad es mi mayor alegría, te amo más de lo que puedas imaginar.",
                "Siempre estaré aquí para celebrar tus momentos de felicidad contigo."
            ],
            triste: [
                "Siempre estaré aquí para ti sin importar lo que suceda.",
                "Te amo",
                "Triste y no me lo dices? Mya",
                "No estes triste y ya jajaja",
                "La tristeza es solo un capítulo, tu historia es mucho más que eso.",
                "A veces las lágrimas son necesarias para limpiar el alma y sanar el corazón.",
                "Tu tristeza es temporal, pero tu fortaleza es eterna.",
                "La tristeza nos recuerda lo importante que es sentir y estar vivos.",
                "En los momentos de tristeza es cuando más crecemos y aprendemos sobre nosotros mismos.",
                "Tu tristeza es como una nube pasajera, pronto dará paso a un cielo despejado.",
                "No estás sola, siempre estaré aquí para abrazarte y consolarte.",
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
                "No estes triste y ya ajajaj",
                "Y si te doy un besito se te quita?",
                "Y si te doy un abasito se te quita?",
                "Y si te pompo un elote se te quita?",
                "Y si te pompo unos chetos se te quita?",
                "Y si nos besamos 10 horas pa q se te olvide?",
                "Y si nos abasamos 10 horas pa q se te olvide?",
                "No mames preciosa que diria la HelloKitty pq estas asi.",
                "A la hellokitty no le gustaria verte asi, piensale padri",
                "Una altanera, preciosa y orgullosa no debe sentirse asi, pilas mi vida",
                "Y si vamos a criticar gente naca al parque pa que se te olvide?",
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
                "Pos estate felis y ya jaja",
                "Tómate un momento para respirar hondo y recordar que todo estará bien.",
                "Los días más o menos son parte del viaje, pero siempre encontrarás la fuerza para seguir adelante.",
                "Aprende a bailar bajo la lluvia y encontrar la belleza en los días grises.",
                "No importa lo que enfrentes, siempre habrá una luz al final del túnel.",
                "La vida está llena de altibajos, pero tu fortaleza es constante.",
                "Cada desafío que enfrentas te hace más fuerte y más sabio/a.",
                "Los días más o menos son solo una pausa en tu increíble viaje.",
                "Recuerda que cada nube tiene un borde plateado, busca la belleza en la oscuridad.",
                "Incluso en los días más o menos, tienes el poder de hacer una diferencia en el mundo.",
                "Confía en ti misma, tienes todo lo que necesitas para superar cualquier obstáculo.",
                "La vida es un hermoso rompecabezas y cada día más o menos es una pieza más en su lugar.",
                "No te rindas, incluso los días más difíciles te están acercando a tus sueños.",
                "Recuerda que la vida es un viaje y los días más o menos son solo parte del camino.",
                "Tú eres más fuerte de lo que crees, incluso en tus días más o menos.",
                "Cada día es una nueva oportunidad para encontrar la belleza en lo cotidiano.",
                "La verdadera fuerza reside en levantarse cada vez que caes, incluso en los días más o menos.",
                "No permitas que los días más o menos te impidan ver la magia que te rodea.",
                "La vida está llena de momentos preciosos, incluso en los días más o menos.",
                "No mames preciosa pues manda msj",
                "No importa lo que te depare el día, siempre habrá algo bueno que descubrir.",
                "Te digo algo? algo aajajaj"
                
            ]
        };

        const mood = prompt(`${name}, ¿cómo te sientes hoy? (feliz / triste / más o menos)`);

        if (mood && moodMessages[mood]) {
            const randomIndex = Math.floor(Math.random() * moodMessages[mood].length);
            const randomMessage = moodMessages[mood][randomIndex];
            return `${randomMessage} Recuerda que te quiero muchito, mi Dairita ❤️`;
        } else {
           
        }
    }
});
