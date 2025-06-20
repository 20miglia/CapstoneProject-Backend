import React from 'react'
import { Button, Container, Accordion, Card, Row, Col, Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css';
import scacchiera from '../assets/Scacchiera.png'
import Re from '../assets/Re.png'
import Regina from '../assets/Regina.png'
import Torre from '../assets/Torre.png'
import Alfiere from '../assets/Alfiere.png'
import Cavallo from '../assets/Cavallo.png'
import Pedone from '../assets/Pedone.png'


function Home() {



    return (
        <>
            <Container className='d-flex justify-content-center align-items-center'>
                <Button as={Link} to="/matcharea" className='mt-5 matchButton'>"Sei un giocatore esperto? <br /> Registrati e organizza o partecipa al tuo prossimo match!"</Button>
            </Container>

            <Container className='d-flex justify-content-center'>
                <Row className='mt-3 gx-5 gy-5 justify-content-center'>
                    <Col className='set' xs={12} md={4} lg={4}>
                        <Accordion className='accord'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='sw'>Storia ed Evoluzione degli Scacchi</Accordion.Header>
                                <Accordion.Body>
                                    La storia degli scacchi è un viaggio affascinante che attraversa secoli e continenti, evolvendosi da un antico gioco di strategia fino alla sua forma moderna.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='sw'>Le Origini: India Antica (VI secolo d.C.)</Accordion.Header>
                                <Accordion.Body>
                                    Gli scacchi, come li conosciamo oggi, hanno le loro radici in India, dove nel VI secolo d.C. emerse un gioco chiamato Chaturanga. Il nome, che significa "quattro divisioni dell'esercito", si riferiva alle unità militari rappresentate dai pezzi: fanteria, cavalleria, elefanti e carri, oltre a un re e un generale. Questo gioco era giocato su una scacchiera 8x8 e presentava già due caratteristiche fondamentali degli scacchi moderni: pezzi con poteri diversi e la vittoria legata alla messa fuori gioco del re avversario.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='sw'>Diffusione in Persia e nel Mondo Islamico (VII-IX secolo d.C.)</Accordion.Header>
                                <Accordion.Body>
                                    Dal suo luogo d'origine, il Chaturanga si diffuse in Persia, dove fu adattato e divenne noto come Shatranj. Con la conquista islamica della Persia nel VII secolo, il gioco fu adottato dal mondo arabo e islamico, che ne riconobbe i benefici intellettuali e strategici. Fu in questo periodo che vennero introdotti i termini "scacco" (dall'arabo shah, re) e "scacco matto" (da shah mat, il re è indifeso). Lo Shatranj si diffuse ampiamente, diventando un'attività intellettuale e culturale di prestigio.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='sw'>Arrivo in Europa e Trasformazione (VIII-XV secolo d.C.)</Accordion.Header>
                                <Accordion.Body>
                                    Lo Shatranj raggiunse l'Europa attraverso la conquista moresca della Spagna intorno all'VIII secolo d.C. e si diffuse poi nel resto del continente. In Europa, il gioco subì significative trasformazioni. Una delle modifiche più importanti fu l'introduzione della regina nel XV secolo (che prima era un pezzo molto più debole, la "fers" o "consigliere"), che rivoluzionò il gioco aumentandone notevolmente le possibilità strategiche e la dinamicità. Anche il movimento dell'alfiere (che prima si muoveva di due case in diagonale saltando un pezzo) divenne quello che conosciamo oggi. Le regole moderne degli scacchi emersero in Italia e Spagna all'inizio del XV secolo.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='sw'>Sviluppo Moderno e Competizione Organizzata (dal XIX secolo ad oggi)</Accordion.Header>
                                <Accordion.Body>
                                    Nel corso dei secoli successivi, gli scacchi si radicarono profondamente nella cultura europea, diventando un simbolo di intelligenza e pensiero strategico. La teoria degli scacchi iniziò a svilupparsi con la pubblicazione di libri sulle aperture, i mediogioco e i finali.
                                    <br />
                                    <br />
                                    Il XIX secolo vide la nascita del gioco competitivo moderno. I primi tornei europei iniziarono a svolgersi e figure come Howard Staunton, Paul Morphy e Adolf Andersson divennero famose. In questo periodo, Jaques of London disegnò il classico set di pezzi Staunton, che è ancora il modello più utilizzato oggi.
                                    <br />
                                    <br />
                                    Il XX secolo ha visto un'ulteriore professionalizzazione del gioco, con la fondazione della Federazione Internazionale degli Scacchi (FIDE) e l'organizzazione di campionati mondiali. L'avvento dei computer ha rivoluzionato lo studio e la pratica degli scacchi, con programmi sempre più potenti capaci di sconfiggere i migliori giocatori umani, come dimostrato dalla vittoria di Deep Blue su Garry Kasparov nel 1997.
                                    <br />
                                    <br />
                                    Oggi, gli scacchi sono giocati da milioni di persone in tutto il mondo, sia a livello amatoriale che professionale, e continuano a essere un campo fertile per lo studio della strategia, della logica e dell'intelligenza artificiale.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col xs={12} md={4} lg={4}>
                        <Figure>
                            <Figure.Image
                                width={401}
                                src={scacchiera} />

                            <Figure.Caption className='text-center'>
                                "Disposizione iniziale dei pezzi sulla scacchiera."
                            </Figure.Caption>
                        </Figure>
                    </Col>


                    <Col className='set' xs={12} md={4} lg={4}>
                        <Accordion className='accord'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='sw'>Obiettivo del Gioco</Accordion.Header>
                                <Accordion.Body>
                                    L'obiettivo del gioco è quello di dare "scacco matto" al re avversario. Si ha lo scacco matto quando il re avversario viene messo nella condizione di essere inevitabilmente catturato (ovvero si trova “sotto scacco") ed in cui, anche muovendo, gli sarebbe comunque impossibile sfuggire alla cattura. <br /> <br />
                                    Esistono tre modi con cui un Re può sottrarsi ad uno scacco: <br />1. muovendosi e togliendosi dallo scacco; <br />2. bloccando lo scacco con l'interposizione di un proprio pezzo; <br />3. infine, catturando il pezzo avversario che lo minaccia. <br /> <br /> Se un Re non può attuare nessuna di queste difese, si ha lo scacco matto e la partita ha termine. A questo punto, il Re non viene materialmente catturato o tolto dalla scacchiera, ma la partita viene semplicemente dichiarata finita.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='sw'>Patta!</Accordion.Header>
                                <Accordion.Body>
                                    Ci sono poi occasioni in cui una partita di scacchi non si conclude con un vincitore, ma con una patta. <br /> <br /> Sono 5 i casi per cui una partita di scacchi può finire in parità: <br />
                                    1. La partita si conclude con uno stallo, quando il giocatore a cui tocca muovere non può eseguire alcuna mossa legale ed il suo re NON si trova sotto scacco. <br />
                                    2. I giocatori possono semplicemente accordarsi per la patta e smettere di giocare. <br />
                                    3. Non ci sono abbastanza pezzi sulla scacchiera per poter forzare lo scacco matto (per esempio: un Re ed un Alfiere contro un Re). <br />
                                    4. Un giocatore può dichiarare la patta nel momento in cui la medesima posizione si ripresenta per la terza volta nel corso della partita (non necessariamente per tre volte consecutive). <br />
                                    5. Sono state giocate 50 mosse consecutive senza che uno dei due giocatori abbia spostato un pedone o catturato un pezzo.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='sw'>Come si Muovono i Pezzi?</Accordion.Header>
                                <Accordion.Body>
                                    Ciascuno dei 6 diversi tipi di pezzi muove diversamente. I pezzi non possono passare ‘attraverso’ gli altri pezzi (benchè il cavallo possa saltarli), nè possono occupare una casa già occupata da un altro pezzo del proprio stesso colore. Tuttavia possono prendere il posto di un pezzo avversario, che in questo caso viene catturato. I pezzi sono generalmente spostati in posizioni da cui possono: - catturare altri pezzi - difendere i propri pezzi in caso di cattura oppure controllare case importanti della scacchiera.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='sw'>Mosse Speciali</Accordion.Header>
                                <Accordion.Body>
                                    PROMOZIONE
                                    <br />
                                    I pedoni hanno un’altra abilità speciale: se un pedone raggiunge il lato opposto della scacchiera, esso può trasformarsi in qualsiasi altro pezzo (la cosiddetta "promozione"). NOTA: quando un pedone va in "promozione si trasforma in uno quasiasi dei pezzi, anche se già presente sulla scacchiera. Il pedone viene in genere promosso a Donna, che è il pezzo più forte, ma questa non è una regola. Solo i pedoni possono essere promossi.
                                    <br />
                                    <br />
                                    EN PASSANT
                                    <br />
                                    Altra regola sui pedoni è la così detta cattura "en passant', espressione francese che in italiano viene detta "al varco”. Se un pedone alla sua prima mossa muove di due case e così facendo si ferma accanto ad un pedone avversario (superando la casa su cui quest'ultimo avrebbe potuto catturarlo) l’altro pedone ha la possibilità di catturare comunque il primo pedone, mentre (per così dire) quest’ultimo gli passa accanto. Occorre notare che questa cattura speciale deve essere effettuata nel turno immediatamente successivo al ’passaggio'; perchè dopo non sarà più possible effettuarla.
                                    <br />
                                    <br />
                                    ARROCCO
                                    <br />
                                    Un’altra regola speciale è chiamata arrocco. Questa mossa “composta” consente di realizzare due obiettivi importanti in un unica mossa: portare il Re a sicuro e far uscire la Torre dall'angolo in cui si trova. In base a questa regola, un giocatore può muovere il proprio Re di due caselle di lato e spostare anche la Torre verso cui il Re si e mosso, per posizionarla accanto al Re ma sul lato opposto. Ad ogni modo perché si possa arroccare devono essere rispettate le seguenti condizioni: 1) deve essere la prima mossa del Re, 2) deve essere la prima mossa di quella Torre, 3) non ci deve essere alcun pezzo tra il Re e la Torre, 4) il Re non deve essere sotto scacco, né può attraversare una casa in cui si troverebbe sotto scacco. Quando si esegue I’arrocco, nel caso in cui il Re va a finire più vicino all’angolo della scacchiera, si ha l’arrocco corto, mentre se realizzato sull altro lato, attraversando la casa precedentemente occupata dalla donna, si ha l’arrocco lungo. In entrambi i casi il Re si muove sempre di due case.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='sw'>Quattro Semplici Cose che Ogni Scacchista Dovrebbe Sapere!</Accordion.Header>
                                <Accordion.Body>
                                    1. PROTEGGI IL TUO RE <br />
                                    Porta il tuo Re vicino all'angolo della scacchiera (Arrocco), dove in genere è più sicuro. È consigliabile arroccare il prima possibile. Ricorda che non è importante quanto tu sia prossimo a dare scacco matto al tuo avversario, se il tuo Re subisce il matto per primo!
                                    <br />
                                    <br />
                                    2. NON REGALARE I PEZZI <br />
                                    Non perdere i tuoi pezzi sbadatamente! Ogni pezzo è prezioso e non è possibile vincere una partita senza avere i pezzi sufficienti per dare matto. C'è un sistema semplice che la maggior parte dei giocatori usa per tenere il conto del valore relativo di ogni pezzo: <br />
                                    Il Pedone vale 1 punto <br />
                                    Il Cavallo vale 3 punti <br />
                                    L'Alfiere vale 3 punti <br />
                                    La Torre vale 5 punti <br />
                                    La Donna vale 9 punti <br />
                                    Il Re ha valore non calcolabile, perchè vale la partita stessa. <br />
                                    Alla fine della partita questi punti non significano nulla - è solo un metodo che puoi usare per prendere decisioni durante le partite e che ti aiuta a sapere quando catturare, cambiare o fare altre mosse.
                                    <br />
                                    <br />
                                    3. CONTROLLA IL CENTRO <br />
                                    Dovresti cercare di controllare il centro con i tuoi pezzi ed i tuoi pedoni. Se controlli il centro, avrai più spazio per muovere i tuoi pezzi ed il tuo avversario avrà più difficoltà a trovare delle buone case per i propri pezzi. Nell'esempio di partita, il bianco effettua delle buone mosse per controllare il centro, mentre il nero trascura questo principio basilare.
                                    <br />
                                    <br />
                                    4. Usa tutti i pezzi <br />
                                    In questo esempio vediamo come  il bianco ha portato in gioco tutti i pezzi! I tuoi pezzi non servono a granché se rimangono fermi nelle loro case di partenza. Cerca di sviluppare tutti i pezzi in modo da averne di più a disposizione quando attacchi il Re. Un attacco condotto con solo uno o due pezzi è destinato a fallire contro un avversario minimamente esperto.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='sw'>Iniziamo una Partita!</Accordion.Header>
                                <Accordion.Body>
                                    All’inizio della partita, la scacchiera viene disposta in modo che ogni giocatore abbia una casa bianca (o di colore chiaro) nell' angolo inferiore destro. I pezzi sono disposti sempre nello stesso ordine. La seconda riga orizzontale (o traversa) viene occupata dai pedoni. Sulla prima riga, invece, partendo dai due angoli opposti, vengono prima collocate le torri, seguite dai cavalli, dagli alfieri e infine, dalla donna, la quale occupa sempre una casa del proprio colore (donna bianca su casa bianca e donna nera su casa nera). Il Re viene posizionato nell'ultima casa rimasta libera.
                                    <br />
                                    <br />
                                    Il giocatore con i pezzi bianchi muove sempre per primo. Per questo motivo in genere i giocatori tirano a sorte per chi terrà il Bianco. A questo punto, il Bianco farà la sua mossa, seguita da quella de Nero: muoverà poi di nuovo il Bianco e poi ancora il Nero... e cosi via fino alia fine della partita.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
   
            </Container>


           <Container className='d-flex justify-content-center px-5 mb-5'>
                <Row className='mt-3 mx-3 gx-5 gy-5 justify-content-center'>
                    <Col xs={12} sm={12} md={6} lg={4} >
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Re} />
                            <Accordion className='piece' >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"Il Re: il Cuore del Gioco"</Accordion.Header>
                                    <Accordion.Body>
                                        Il Re è il pezzo più importante, ma è anche il pezzo più debole ed ha bisogno di attenta protezione. Contro di lui si rivolgono gli attacchi dell'avversario e la sua "cattura" determina la fine della partita. Può muoversi solo di una casa alla volta, nelle 8 direzioni - avanti, indietro, ai 2 lati e in obliquo. Ricordati che il Re non deve mai mettersi sotto scacco, vale a dire su una casa in cui potrebbe essere catturato. Questo significa anche che i due Re non possono mai venire a contatto.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Regina} />
                            <Accordion className='piece'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"L'Importanza della Regina"</Accordion.Header>
                                    <Accordion.Body>
                                        La Regina è il pezzo più potente. Può muoversi in qualsiasi direzione - in avanti, indietro (colonna), a destra e a sinistra (traversa) o lungo le diagonali - seguendo una linea retta e di quante case vuole, ma solo fino a che non incontra un pezzo del proprio schieramento (dato che non può passarci attraverso). Inoltre, come per tutti gli altri pezzi, se la donna cattura un pezzo avversario, la sua mossa termina sulla casa del pezzo catturato.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Torre} />
                            <Accordion className='piece'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"La Torre: Controllo e Forza"</Accordion.Header>
                                    <Accordion.Body>
                                        La Torre può muoversi di quante case vuole, ma solo lungo le colonne e le traverse (in avanti, indietro e di lato a destra o a sinistra). Le due torri sono pezzi estremamente forti quando si proteggono a vicenda e lavorano insieme!
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={4}>
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Alfiere} />
                            <Accordion className='piece'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"L'Alfiere: Spirito Obliquo"</Accordion.Header>
                                    <Accordion.Body>
                                        L'Alfiere può muoversi di quante case vuole, avanti e indietro, ma solo in diagonale. Ciascun alfiere comincia su una casa di colore diverso (bianco o nero), e rimare sempre sulle case di quel colore. Come le torri, gli alfieri lavorano bene in coppia perché coprono i propri punti deboli e possono attaccare le case di entrambe i colori.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={4} >
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Cavallo} />
                            <Accordion className='piece'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"Il Cavallo Salta e Sorprende"</Accordion.Header>
                                    <Accordion.Body>
                                        I Cavalli si muovono in modo molto diverso dagli altri pezzi. Il movimento del Cavallo si può spiegare ricorrendo alla figura della *L* della "Y" o della T", comunque lo si impari è importante ricordarsi che il Cavallo, partendo da una casa chiara arriverà su di una casa scura e viceversa. Qui si preferisce dire che il Cavallo fa un passo di Torre e subito dopo un passo di Alfiere o viceversa. Ad ogni modo il Cavallo si sposta in tutte le case distanti due passi, ma di colore diverso rispetto alla casa di partenza. I cavalli sono anche gli unici pezzi che possono scavalcare tutti gli altri.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={4} >
                        <Card style={{width: '18rem' }}>
                            <Card.Img src={Pedone} />
                            <Accordion className='piece'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='sx'>"Il Pedone Sogna la Corona"</Accordion.Header>
                                    <Accordion.Body>
                                        I Pedoni hanno la particolarità di muoversi e di catturare in due modi diversi: si muovono in avanti, ma catturano in diagonale. I pedoni possono solo avanzare e di una sola casa per volta. Quando un pedone si muove per la prima volta può però avanzare anche di due case. I pedoni catturano solo sulle case poste immediatamente davanti a loro in diagonale. Non possono mai indietreggiare né catturare all'indietro. Se un altro pezzo è collocato direttamente davanti a pedone quest'ultimo non può muovere. Infine i pedoni alla particolarità di essere gli unici promossi a qualsiasi altro pezzo quando raggiungono l'estremità opposta della scacchiera.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
                </Row>


            </Container>







        </>
    )
}

export default Home
