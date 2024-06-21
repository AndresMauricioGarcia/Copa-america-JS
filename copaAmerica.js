const copaAmerica2024 = {
    year: 2024,
    host_country: "Estados Unidos",
    teams: [
        // Grupo A 
        {
            name: "Argentina",
            times_won: 15,
            group: "A",
            players: [
                { name: "Lionel Messi", position: "delantero", game_score: 8.41 },
                { name: "Nicolás Otamendi", position: "defensa", game_score: 7.25 },
                { name: "Emiliano Martínez", position: "portero", game_score: 7.10 }
            ]
        },
        {
            name: "Canada",
            times_won: 0,
            group: "A",
            players: [
                { name: "Jayden Nelson", position: "delantero", game_score: 6.76 },
                { name: "Kamal Miller", position: "defensa", game_score: 6.77 },
                { name: "Milan Borjan", position: "portero", game_score: 6.91 }
            ]
        },
        {
            name: "Chile",
            times_won: 2,
            group: "A",
            players: [
                { name: "Alexis Sánchez", position: "delantero", game_score: 7.02 },
                { name: "Paulo Díaz", position: "defensa", game_score: 7.33 },
                { name: "Brayan Cortés", position: "portero", game_score: 6.95 }
            ]
        },
        {
            name: "Peru",
            times_won: 2,
            group: "A",
            players: [
                { name: "Gianluca Lapadula", position: "delantero", game_score: 6.81 },
                { name: "Aldo Corzo", position: "defensa", game_score: 6.73 },
                { name: "Pedro Gallese", position: "portero", game_score: 6.83 }
            ]
        },
        // Grupo B
        {
            name: "Ecuador",
            times_won: 0,
            group: "B",
            players: [
                { name: "Kevin Rodriguez", position: "delantero", game_score: 6.81 },
                { name: "Félix Torres", position: "defensa", game_score: 7.09 },
                { name: "Alexander Domínguez", position: "portero", game_score: 7.06 }
            ]
        },
        {
            name: "Jamaica",
            times_won: 0,
            group: "B",
            players: [
                { name: "Demarai Gray", position: "delantero", game_score: 7.30 },
                { name: "Amari'i Bell", position: "defensa", game_score: 6.70 },
                { name: "Andre Blake", position: "portero", game_score: 6.65 }
            ]
        },
        {
            name: "Mexico",
            times_won: 0,
            group: "B",
            players: [
                { name: "Uriel Antuna", position: "delantero", game_score: 7.39 },
                { name: "Jorge Sánchez", position: "defensa", game_score: 6.80 },
                { name: "Guillermo Ochoa", position: "portero", game_score: 6.86 }
            ]
        },
        {
            name: "Venezuela",
            times_won: 0,
            group: "B",
            players: [
                { name: "Darwin Machís", position: "delantero", game_score: 6.67 },
                { name: "Miguel Navarro", position: "defensa", game_score: 7.13 },
                { name: "Rafael Romo", position: "portero", game_score: 6.91 }
            ]
        },
        
        // Grupo C
        {
            name: "Bolivia",
            times_won: 1,
            group: "C",
            players: [
                { name: "Victor Abrego", position: "delantero", game_score: 6.33 },
                { name: "José Sagredo", position: "defensa", game_score: 7.22 },
                { name: "Guillermo Viscarra", position: "portero", game_score: 7.73 }
            ]
        },
        {
            name: "Panamá",
            times_won: 0,
            group: "C",
            players: [
                { name: "José Fajardo", position: "delantero", game_score: 7.19 },
                { name: "Michael Murillo", position: "defensa", game_score: 6.95 },
                { name: "Orlando Mosquera", position: "portero", game_score: 7.09 }
            ]
        },
        {
            name: "Uruguay",
            times_won: 15,
            group: "C",
            players: [
                { name: "Darwin Núñez", position: "delantero", game_score: 7.03 },
                { name: "Ronald Araújo", position: "defensa", game_score: 7.03 },
                { name: "Sergio Rochet", position: "portero", game_score: 7.12 }
            ]
        },
        {
            name: "Estados Unidos",
            times_won: 0,
            group: "C",
            players: [
                { name: "Jesús Ferreira", position: "delantero", game_score: 7.07 },
                { name: "Bryan Reynolds", position: "defensa", game_score: 6.74 },
                { name: "Matt Turner", position: "portero", game_score: 6.98 }
            ]
        },
        
        // Grupo D
        {
            name: "Brasil",
            times_won: 9,
            group: "D",
            players: [
                { name: "Raphinha", position: "delantero", game_score: 7.28},
                { name: "Danilo", position: "defensa", game_score: 7.27 },
                { name: "Alisson", position: "portero", game_score: 7.02 }
            ]
        },
        {
            name: "Colombia",
            times_won: 1,
            group: "D",
            players: [
                { name: "Luis Díaz", position: "delantero", game_score: 7.19 },
                { name: "Yerry Mina", position: "defensa", game_score: 6.84 },
                { name: "Camilo Vargas", position: "portero", game_score: 6.72 }
            ]
        },
        {
            name: "Costa Rica",
            times_won: 0,
            group: "D",
            players: [
                { name: "Anthony Contreras", position: "delantero", game_score: 6.68 },
                { name: "Juan Pablo Vargas", position: "defensa", game_score: 7.15 },
                { name: "Kevin Chamorro", position: "portero", game_score: 6.65 }
            ]
        },
        {
            name: "Paraguay",
            times_won: 2,
            group: "D",
            players: [
                { name: "Miguel Almirón", position: "delantero", game_score: 6.95 },
                { name: "Gustavo Gómez", position: "defensa", game_score: 7.25 },
                { name: "Carlos Coronel", position: "portero", game_score: 6.92 }
            ]
        },
    ]
};

// 2. Mostrar todos delanteros con su respectiva puntuación.

function mostrarDelanteros(copa) {
    const delanteros = [];
    
    copa.teams.forEach(team => {
        team.players.forEach(player => {
            if (player.position === "delantero") {
                delanteros.push(player);
            }
        });
    });

    delanteros.forEach(delantero => {
        console.log(`Jugador: ${delantero.name}\nPosición: ${delantero.position}\nPuntuación: ${delantero.game_score}\n`);
    });
}

// 3. Mostrar los porteros del Grupo B.
function mostrarPorterosGrupoB(copa) {
    const porterosGrupoB = [];
    
    copa.teams.forEach(team => {
        if (team.group === "B") {
            team.players.forEach(player => {
                if (player.position === "portero") {
                    porterosGrupoB.push(player);
                }
            });
        }
    });

    porterosGrupoB.forEach(portero => {
        console.log(`Jugador: ${portero.name}\nPosición: ${portero.position}\nPuntuación: ${portero.game_score}\n`);
    });
}

// 4. Mostrar la información de los defensas cuyo país empiece por la letra C.
function mostrarDefensasPorPais(copa) {
    const defensasPorPais = [];
    
    copa.teams.forEach(team => {
        if (team.name.startsWith("C")) {
            team.players.forEach(player => {
                if (player.position === "defensa") {
                    defensasPorPais.push(player);
                }
            });
        }
    });

    defensasPorPais.forEach(defensa => {
        console.log(`Jugador: ${defensa.name}\nPosición: ${defensa.position}\nPuntuación: ${defensa.game_score}\n`);
    });
}
// 5. Mostrar la información de los 5 mejores jugadores calificados.
function mostrarMejoresJugadores(copa) {
    const jugadores = [];
    
    copa.teams.forEach(team => {
        team.players.forEach(player => {
            jugadores.push(player);
        });
    });

    // Ordenar los jugadores por su puntuación en orden descendente
    jugadores.sort((a, b) => b.game_score - a.game_score);

    // Tomar los primeros 5 jugadores
    const mejoresJugadores = jugadores.slice(0, 5);

    // Imprimir la información con el formato solicitado
    mejoresJugadores.forEach(jugador => {
        console.log(`Jugador: ${jugador.name}\nPosición: ${jugador.position}\nPuntuación: ${jugador.game_score}\n`);
    });
}
// Mostrar en un array con los 10 defensas de menor puntuación.
function obtenerDefensasMenorPuntuacion(copa) {
    const defensas = [];
    
    copa.teams.forEach(team => {
        team.players.forEach(player => {
            if (player.position === "defensa") {
                defensas.push(player);
            }
        });
    });

    //orden decendente 
    defensas.sort((a, b) => b.game_score - a.game_score);

    // primeros 10 defensas
    const menoresDefensas = defensas.slice(0, 10);

    const formatoDefensas = menoresDefensas.map(defensa => {
        return `Jugador: ${defensa.name}\nPosición: ${defensa.position}\nPuntuación: ${defensa.game_score}\n`;
    });

    return formatoDefensas;
}
// Verifica que  es un array
// const menoresDefensas = obtenerDefensasMenorPuntuacion(copaAmerica2024);
// console.log(Array.isArray(menoresDefensas));  

// 7. Calcular la puntuación promedio de cada selección.
function calcularPuntuacionPromedio(copa) {
    const puntuacionesPromedio = [];

    copa.teams.forEach(team => {
        const totalPuntuacion = team.players.reduce((sum, player) => sum + player.game_score, 0);
        const promedio = totalPuntuacion / team.players.length;
        puntuacionesPromedio.push({ team: team.name, promedio: promedio.toFixed(2) });
    });

    return puntuacionesPromedio;
}

// 8. Mostrar las selecciones que hayan ganado al menos una vez el torneo.
function mostrarSeleccionesGanadoras(copa) {
    const seleccionesGanadoras = copa.teams.filter(team => team.times_won > 0);
    
    seleccionesGanadoras.forEach(team => {
        console.log(`Selección: ${team.name}\nVeces Ganadas: ${team.times_won}\n`);
    });
}
function calcularYActualizarPuntuacionesPromedio(copa) {
    const equiposActualizados = copa.teams.map(team => {
        // Calcular la puntuación promedio
        const totalPuntuacion = team.players.reduce((sum, player) => sum + player.game_score, 0);
        const promedio = totalPuntuacion / team.players.length;

        // Crear una copia del equipo y agregar la puntuación promedio
        const equipoActualizado = Object.assign({}, team, { promedio_puntuacion: promedio.toFixed(2) });

        return equipoActualizado;
    });

    // Mostrar los equipos con la puntuación promedio utilizando Object.entries()
    equiposActualizados.forEach(team => {
        console.log(`Selección: ${team.name}`);
        Object.entries(team).forEach(([key, value]) => {
            if (key !== 'players') {
                console.log(`${key}: ${value}`);
            }
        });
        console.log('\n');
    });
}
Menu
function mostrarMenu() {
    console.log("\n--- Menú ---");
    console.log("1. Mostrar Delanteros");
    console.log("2. Mostrar Porteros Grupo B");
    console.log("3. Mostrar Defensas Por País");
    console.log("4. Mostrar Defensas Por País");
    console.log("5. Mostrar Mejores Jugadores");
    console.log("6. Obtener Defensas Menor Puntuacion");
    console.log("7. Calcular Puntuacion Promedio");
    console.log("8. Mostrar Selecciones Ganadoras");
    console.log("9. Calcular y Actualizar Puntuaciones Promedio");
    console.log("0. Salir");
}

function main() {
    const copaAmerica2024 = "Datos de Copa America 2024"; // Ejemplo de datos, cambiar según sea necesario
    let opcion;
    
    while (opcion !== '0') {
        mostrarMenu();
        opcion = prompt("Seleccione una opción:");

        switch(opcion) {
            case '1':
                mostrarDelanteros(copaAmerica2024);
                break;
            case '2':
                mostrarPorterosGrupoB(copaAmerica2024);
                break;
            case '3':
                mostrarDefensasPorPais(copaAmerica2024);
                break;
            case '4':
                mostrarDefensasPorPais(copaAmerica2024);
                break;
            case '5':
                mostrarMejoresJugadores(copaAmerica2024);
                break;
            case '6':
                obtenerDefensasMenorPuntuacion(copaAmerica2024);
                break;
            case '7':
                calcularPuntuacionPromedio(copaAmerica2024);
                break;
            case '8':
                mostrarSeleccionesGanadoras(copaAmerica2024);
                break;
            case '9':
                calcularYActualizarPuntuacionesPromedio(copaAmerica2024);
                break;
            case '0':
                console.log("Saliendo del menú.");
                break;
            default:
                console.log("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

main();