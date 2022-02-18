import React from "react";

export default function Home() {
    return (
        <div className="main-div">
            <hr/>
            <h3>Yu-Gi-Oh! Trading Card Game</h3>
            <hr/>
            <p><b><em>Yu-Gi-Oh!</em> Trading Card Game</b> es un juego de cartas coleccionables de origen japonés desarrollado y publicado por Konami. 
            Está basado en el juego ficticio de Duelo de Monstruos creado por el mangaka Kazuki Takahashi, 
            que es el principal argumento que se desarrolla en su popular manga Yu-Gi-Oh! y en las series creadas por Nihon Ad Systems Yu-Gi-Oh! Duel Monsters, 
            Yu-Gi-Oh! Duel Monsters GX, Yu-Gi-Oh! 5D's, Yu-Gi-Oh! Zexal, "Yu-Gi-Oh! ARC-V" y "Yu-Gi-Oh VRAINS".
            Yu-Gi-Oh! Trading Card Game, a menudo abreviado como Yu-Gi-Oh! TCG, fue el primero lanzado por Konami en 1999. 
            Fue nombrado el juego de cartas coleccionables con cartas más vendidas en el mundo por el Libro Guinness de récords mundiales.</p>
            <br/>
            <p>Las cartas y las reglas del juego de ficción son enteramente creadas para seguir la trama de la historia, 
            y no son introducidas al juego real de cartas sin previas modificaciones. Konami ha producido la mayoría de las cartas 
            nombradas por Takahashi, con los poderes que él les da. 
            Las reglas del juego de cartas coleccionables son muy distintas de las del juego de ficción. 
            Son más coherentes y equilibradas y no cambian como lo hacen en los contextos de ficción.</p>
            <br/>
            <p>Konami actualmente es el fabricante y distribuidor de Yu-Gi-Oh! TCG, además de ejecutar torneos regionales y nacionales 
            y continúa lanzando nuevas cartas para Yu-Gi-Oh! TCG. Se puede tener hasta 3 copias de la misma carta en el deck, 
            excepto si las reglas vigentes del juego lo impiden.</p>
            <hr/>
            <h6>DESCRIPCIÓN DEL JUEGO:</h6>
            <hr/>
            <p>Yu-Gi-Oh! es un juego de cartas de monstruos en el que cada jugador roba cartas de sus respectivas barajas (Decks) y toman turnos en los que se juegan 
            las cartas en la mesa (conocida como Campo). Cada jugador comienza con un número determinado de LP (Life Points) traducido como Puntos de Vida (8000, según las reglas oficiales), 
            y un mazo de cartas llamado Deck que debe contener un mínimo de 40 cartas y un máximo de 60, así como la posibilidad de tener un Side Deck de apoyo entre 0 a 15 cartas
            y un Deck Extra entre 0 a 15 cartas. La partida termina si se cumple una de las siguientes condiciones:
                <ol>
                    <li>Los LP de un jugador se reducen a 0.</li>
                    <li>Que uno o ambos jugadores no tengan cartas en el Deck y deban robar una carta.</li>
                    <li>Un jugador se rinde, para esto, se debe colocar la mano encima del Deck por diez segundos.</li>
                    <li>Un jugador gana por el efecto de una carta. (Ejemplo, "Exodia, el prohibido" , "Tablero del Destino" o "Cuenta Atrás Final")</li>
                </ol>   
            </p>
            <br/>
            <p>Se produce un Duelo por turnos en el que los jugadores usan cartas que representan monstruos, Cartas Mágicas y Cartas de Trampa para combatir a sus adversarios. 
            Los jugadores pueden Invocar a los monstruos ya sea en Posición de Ataque boca arriba (vertical) o en Posición de Defensa boca abajo (horizontal), 
            y cada monstruo en Posición de Ataque puede atacar una vez por turno a menos que haya un efecto que designe otra cosa. 
            Tras atacar y destruir con éxito un monstruo del adversario, el jugador del turno puede infligir daño a los LP del adversario si el ataque (ATK) de su monstruo 
            es superior al ataque (ATK) del monstruo adversario en Posición de Ataque. Si el monstruo atacado está en Posición de Defensa, se compara el ATK del monstruo 
            en ataque y la DEF del monstruo en defensa. 
            Si el ATK es superior a la DEF lo destruye pero sin infligir daño al adversario, a menos que el efecto de alguna carta permita infligir la 
            diferencia entre la DEF del monstruo destruido y el ATK del monstruo que lo destruyó.</p>
        </div>
    )
}