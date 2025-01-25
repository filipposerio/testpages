const lContenuti = [
    {
        sezione: 'home',
        titolo: 'Cambiamento climantico',
        immagine: 'immagini/contenuti/hand-4455338_1280.webp',
        altimg: 'Mano che mantiene il globo in segno di protezione',
        //testo: '<p>Gestione responsabile delle risorse<br>Piani per la riduzione delle proprie emissioni<br>Strategia per il contraso al cambiamento climatico<br>Continuo impegno verso la cultura<br>Il Gruppo Intesa da anni ha intrapreso un percorso virtuoso di riduzione generale dei consumi di carta e di utilizzo di materiali a basso impatto ambientale. </p>'
        testo: "<p>Il Gruppo Intesa da anni ha intrapreso un percorso virtuoso di riduzione generale dei consumi di carta e di utilizzo di materiali a basso impatto ambientale.<br>La tutela dell'ambiente e dell'attenzione ai cambiamenti climatici sono dimensioni chiave della responsabilità del Gruppo </p>",
        imgfooter: 'immagini/esg/ESG_cambiamento_climatico.png',
        altimgfooter:  "Obiettivi ONU 7 13 e 17"
    },
    {
        sezione: 'cultura',
        titolo: 'Comunità e cultura',
        immagine: 'immagini/contenuti/books-1617327_1280.jpg',
        altimg: 'immagine di una libreria ordinata e piena di libri',
        testo: "<p>Il Gruppo Intesa sostiene opere di carattere sociale e culturale.<br>Valorizza e contribuisce alla tutela del patrimonio artistico attraverso partnership con musei e istituzioni pubbliche e private nazionali e internazionali.<br>Promuove l’inclusione educativa e l’occupabilità giovanile in collaborazione con scuole e atenei</p>",
        imgfooter: 'immagini/esg/ESG_comunità_e_cultura.png',
        altimgfooter:  "Obiettivi ONU 1 3 4 11 e 17"
    },
    {
        sezione: 'inclusione',
        titolo: 'Inclusione Finanziaria',
        immagine: 'immagini/contenuti/ai-generated-8109142_1280.webp',
        altimg: 'Generata dalla AI, inclusione e comunità ',
        testo: '<p>Intesa Sanpaolo garantisce un’offerta di prodotti e servizi per l’inclusione finanziaria e l’accesso al credito, quali leve di inclusione sociale per consentire alle persone di migliorare la propria condizione e di poter esercitare appieno i propri diritti di cittadinanza.</p>',
        imgfooter: 'immagini/esg/ESG_inclusione_finanziaria.png',
        altimgfooter:  "Obiettivi ONU 1 3 4 5 8 9 11 e 17"
    },
    {
        sezione: 'innovazione',
        titolo: 'Innovazione e  cybersecurity',
        immagine: 'immagini/contenuti/internet-3484137_1280.jpg',
        altimg: 'Internet, Touch Screen, Cybersecurity',
        testo: '<p>Il Gruppo attribuisce importanza strategica alla protezione delle informazioni dei clienti e contribuisce attivamente alla resilienza cibernetica del Sistema Paese<br>Sono state estese la digitalizzazione dei processi di concessione del credito e la disponibilità di prodotti su app e internet banking<br>Promuove e sostiene i processi di innovazione di imprese e startup</p>',
        imgfooter: 'immagini/esg/ESG_innovazione_e_cybersecurity.png',
        altimgfooter:  "Obiettivi ONU 9 e 17"

    },
    {
        sezione: 'condotta',
        titolo: 'Integrità nella condotta',
        immagine: 'immagini/contenuti/domino-665547_1280.jpg',
        altimg: 'Domino, mano , interrompere',
        testo: '<p>Intesa Sanpaolo è impegnata a contribuire alla lotta contro la corruzione, sostenendo le Linee Guida dell’OCSE (Organizzazione per la Cooperazione e lo Sviluppo Economico)</p>',
        imgfooter: 'immagini/esg/ESG_integrità_e_condotta.png',
        altimgfooter:  "Obiettivi ONU 16"
    },
    {
        sezione: 'investimenti',
        titolo: 'Investimenti e assicurazioni sostenibili',
        immagine: 'immagini/contenuti/growth-4518406_1280.jpg',
        altimg: 'Piantina che cresce',
        testo: '<p>Il Gruppo Assicurativo Intesa Sanpaolo Vita integra i fattori ESG nelle diverse aree di business in cui opera in conformità con quanto richiesto dalla normativa e in coerenza con gli obiettivi definiti<br>Ha integrato i fattori ESG nel proprio processo di investimento nella convinzione che questi elementi, oltre a favorire uno sviluppo economico e sociale sostenibile, possano contribuire positivamente ai risultati finanziari dei portafogli dei clienti, riducendone al contempo i rischi.</p>',
        imgfooter: 'immagini/esg/ESG_investimenti_e_assicurazioni_sostenibili.png',
        altimgfooter:  "Obiettivi ONU 8 13 e 17"
    },
    {
        sezione: 'benessere',
        titolo: 'Salute e benessere',
        //immagine: 'immagini/contenuti/balance-110850_1280.jpg',
        immagine: 'immagini/contenuti/health-3961686_1280.jpg',
        altimg: 'Paroliere con scritta Health, Salute',
        testo: "<p>Continua il percorso per garantire la migliore esperienza professionale per le persone del Gruppo<br>Intesa Sanpaolo ha da tempo adottato un Sistema di Gestione della Salute e Sicurezza sul Lavoro conforme ai più avanzati standard internazionali<br>Intesa Sanpaolo adotta un modello integrato di welfare aziendale</p>",
        imgfooter: 'immagini/esg/ESG_salute_e_benessere.png',
        altimgfooter:  "Obiettivi ONU 3 e 8"
    },
    {
        sezione: 'cliente',
        titolo: 'Soddisfazione del cliente',
        immagine: 'immagini/contenuti/smileys-5776137_1280.webp',
        altimg: 'Faccine, Emozioni, Smartphone, Persona',
        testo: '<p>Il dialogo con la clientela rappresenta un impegno costante per il Gruppo, al fine di mantenere la relazione su un livello di eccellenza, massimizzandone la soddisfazione e riducendo la probabilità e rilevanza di reclami e contenziosi.</p>',
        imgfooter: 'immagini/esg/ESG_oddisfazione_del_cliente.png',
        altimgfooter:  "Obiettivo ONU 3"
    },
    {
        sezione: 'transizione',
        titolo: 'Transizione sostenibile',
        //immagine: 'immagini/contenuti/hands-4087018_1280.jpg',
        immagine: 'immagini/contenuti/energy-saving-7462464_1280.webp',
        altimg: 'Transizione energetica, Mani, Lampadina, Verde',
        testo: "<p>Intesa Sanpaolo è impegnata a supportare le imprese clienti nello sviluppo di una cultura aziendale orientata alla sostenibilità e delle competenze ESG necessarie per una transizione economica sostenibile non solo da un punto di vista finanziario.<br>L’impegno di Intesa Sanpaolo per il supporto alla transizione ESG si realizza anche attraverso l’emissione di bond dedicati al finanziamento di progetti di natura sociale e ambientale.<br>Il Gruppo offre finanziamenti per ridurre la dipendenza energetica, strumenti per mitigare l’aumento dei costi delle materie prime</p>",
        imgfooter: 'immagini/esg/IT_Loghi_SDGs.png',
        altimgfooter:  "Obiettivi ONU 7 12 13 e 17"
    },
    {
        sezione: 'tutela',
        titolo: 'Tutela del lavoro',
        immagine: 'immagini/contenuti/laptop-3196481_1280.jpg',
        altimg: 'Ufficio, Mano, Contratto',
        testo: '<p>Per Intesa Sanpaolo, impegnata da sempre a sostenere la crescita dell’economia reale in Italia, la tutela dell’occupazione è un tema prioritario per garantire la solidità economica nel medio-lungo termine.</p>',
        imgfooter: 'immagini/esg/ESG_tutela_del_lavoro.png',
        altimgfooter:  "Obiettivo ONU 8"
    },
    {
        sezione: 'valore',
        titolo: 'Valore e solidità',
        immagine: 'immagini/contenuti/rocks-1869970_1280.jpg',
        altimg: 'Roccia, Pietre, solido',
        testo: '<p>Intesa Sanpaolo si è dimostrata in grado di di realizzzare notevoli risultati, generando valore per tutti gli stakeholder.</p>',
        imgfooter: 'immagini/esg/ESG_valore_e_solidità.png',
        altimgfooter:  "Obiettivo ONU 8"
    },
    {
        sezione: 'persone',
        titolo: 'Valorizzazione delle persone',
        immagine: 'immagini/contenuti/people-1979261_1280.jpg',
        altimg: 'Persone,  Ambiente di lavoro,',
        testo: "<p>Il Gruppo prevede espressamente la non tolleranza di qualsiasi forma di discriminazione, rende esplicito l’impegno alla formazione e sensibilizzazione sulle tematiche Diversity, Equity & Inclusion (D&EI)<br>Integra l’impegno nei confronti delle coppie dello stesso genere ) e una maggiore attenzione all’utilizzo di un linguaggio sempre più inclusivo e rispettoso.<br>Nel 2023 ha aggiunto uno per l’equilibrio per genere nelle nuove nomine all’interno delle posizioni senior.</p>",
        imgfooter: 'immagini/esg/ESG_valorizzazione_delle_persone.png',
        altimgfooter:  "Obiettivi ONU  4 5 8 10 e 17"
    }
];