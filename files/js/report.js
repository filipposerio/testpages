const lFrasi=
[
    {
        anno : "2023",
        testo : "I risultati economici e patrimoniali ottenuti nel 2023 confermano la capacità di Intesa Sanpaolo di generare una solida "+
" redditività e di essere un modello di riferimento per la sostenibilità riconosciuto, tra l’altro, dal posizionamento ai vertici nei "+
" principali indici e classifiche: è l’unica Banca italiana presente nei Dow Jones Sustainability Indices (World e Europe), prima "+
" banca europea e seconda al mondo nell’indice 2024 di Corporate Knights ‘‘Global 100 Most Sustainable Corporations in"+
" the World’’, inclusa nel Leadership level di CDP; "
    },
    {
        anno : "2022",
        testo : "Il 2022 è stato catatterizzsto da contesti complessi segnati dal conflitto Russia-Ucraina, il cui impatto ha coinvolto "+
"in modo diretto e indiretto famiglie, imprese ed economie. In tale contesto, Intesa Sanpaolo, oltre a dimostrare di essere "+
"pienamente in grado di operare con successo anche in situazioni complesse e di avere solide basi per il futuro, continua "+
"ad essere un modello di riferimento per la sostenibilità con impegni sociali e ambientali ben definiti"
    },
    {
        anno : "2021",
        testo : "Nonostante uno scenario globale segnato dall’emergenza sanitaria da COVID-19, Intesa Sanpaolo ha portato a termine "+
"con successo il Piano d’Impresa 2018-2021, attraverso una strategia fondata su sostenibilità e radicamento nei territori, "+
"confermando la propria solidità patrimoniale e la capacità di creare valore di lungo termine per tutti gli stakeholder"
    },
    {
        anno : "2020",
        testo : "Nel contesto di emergenza straordinaria che ha caratterizzato il 2020 Intesa Sanpaolo, avvalendosi di una forte solidità "+
"finanziaria, ha confermato la capacità di assolvere al proprio ruolo di acceleratore sociale supportando il Paese nel gestire "+
"l’impatto di una fortissima crisi sanitaria, economica e sociale come parte attiva, attraverso una strategia che ha visto "+
"la sostenibilità come un tema centrale. In questo contesto, si è concretizzata l’unione con il Gruppo UBI Banca, che ha "+
"contribuito a rafforzare il ruolo di Intesa Sanpaolo per la crescita sostenibile e inclusiva, anche grazie alla condivisione di "+
"valori aziendali comuni alle due realtà."
    },
    {
        anno : "2019",
        testo : "Nel 2019 l’impegno del Gruppo nell’ambito della sostenibilità è stato ulteriormente rafforzato con l’adesione "+
"a tre importanti iniziative delle Nazioni Unite, che si inquadrano nell’ambito del raggiungimento degli Obiettivi "+
"di Sviluppo Sostenibile (UN Sustainable Development Goals). "+
"Il Gruppo Intesa Sanpaolo è uno dei pochi gruppi finanziari europei ad avere aderito a tutte le principali  "+
 "iniziative delle Nazioni Unite relative al proprio business nel campo della sostenibilità"
    },
    {
        anno : "2018",
        testo : "Con il Piano di Impresa 2018-2021 Intesa Sanpaolo conferma l’obiettivo di essere una Banca leader in Europa, "+
"orientata alla creazione di valore sostenibile nel tempo e alla sua distribuzione a tutti gli stakeholder. Il Piano "+
"fa leva su solide basi e può contare sul contributo essenziale delle nostre persone e su una piattaforma "+
"digitale all’avanguardia. In linea con le richieste che pervengono dagli stakeholder sui temi di sostenibilità, il "+
"Gruppo punta anche a rafforzare la leadership nella Corporate Social Responsibility e a diventare un punto di "+
"riferimento per la società."
    }


]
function generateBilanciTimeline(dati) {
    // Funzione per generare dinamicamente la griglia dei bilanci
    // intervallo di tempo dal 2018 2023
    // viene creato dinamicamente il link al bilancio di ciascun anno
    //  e accanto un testo che lo identifica.
    // ricevein ingresso l'arrayi di oggetti JSON con le sintesi di ciascun anno
    const bilanciContainer = document.getElementById("reporttime"); // Il contenitore principale per i bilanci
    // Anni dei bilanci da generare (dal 2000 al 2023)
    // creaiamo un vettore anni con l'intervallo 2018 2023
    const anni = [];
    for (let i = 2023; i >= 2018; i--) {
        anni.push(i); // aggiunge un elemento all'array
    }

    // Aggiungiamo gli elementi dinamicamente attrverso un CICLO foreach sull'intervallo di anni appena creato
    anni.forEach((anno, index) => {
        // in questa funzione creaimo dinamicamente la sezione dei bilanci/report di sostenibilità
        //utilizziamo per questa sezione il file di sitle timeline.css
        // Creiamo un elemento div e aggiungiamo la classe TContainer del file timeline.css
        console.log(anno)
        const Tcontainer = document.createElement("div");
        Tcontainer.classList.add("Tcontainer");
        console.log(anno % 2)
        // stabiliamo se il container deve essere posto a destra oppure a sinistra
        // aggiungendo la classe left oppure la classe rigth
        // grazie alle media queries di css,in uno schemro per smartphone verranno 
        // comunque scritti uno sotto l'altro
        if ((anno % 2) > 0) {
            Tcontainer.classList.add("left");
        }
        else {
            Tcontainer.classList.add("right");
        }
        // aggiungiamo un div per il content che conterrà il link e il testo del report
        const Tcontent = document.createElement("div");
        Tcontent.classList.add("content")
        // aggiungiamo un div per il link al report e lo appendiamo al contenitore
        const Treport = document.createElement("div");
        const link = document.createElement("a");
        link.href = `bilanci/${anno}.pdf`;
        link.innerHTML = `<h1>DCNF ${anno}</h1>`;
        Tcontent.appendChild(link)
        //aggiungiamo un testo in corsivo (em) per la sintesi e lo appendiamo al contenitore
        const par = document.createElement("em");
        //console.log(dati)
        //leggiamo il testo corrispondente all'anno 
        par.textContent = dati[index].testo == undefined ? "nessun testo" : dati[index].testo
        Tcontent.appendChild(par)
        //colleghiamo i div appena creati
        Tcontent.appendChild(Treport)
        Tcontainer.appendChild(Tcontent)

        // Aggiungiamo l'item alla griglia
        bilanciContainer.appendChild(Tcontainer);

    });
}

// chiamiamo la funzione passando il contenuto del file frasi.js dove è definita la 
// costante lFrasi dichiarata all'inizio di questo file
generateBilanciTimeline(lFrasi);