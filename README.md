# React con Context API: Gestione Post

## Descrizione 

In questo esercizio si realizza una semplice app React che sfrutta la Context API per gestire e condividere dati relativi a una lista di post.

### Passaggi principali:

1. **Creazione del Context**
   - Si crea un file dedicato per definire il Context.
   - Si esporta il Context stesso e un Provider, che contiene un array statico di post (dati iniziali).

2. **Setup in App.jsx**
   - Si importa il Provider e si wrappa l’intera applicazione con esso, così che i dati siano disponibili in tutta la gerarchia di componenti.

3. **Struttura dei componenti**
   - `App.jsx` contiene il Provider e rende visibile la pagina principale.
   - `PostsPage.jsx` gestisce la pagina dei post, includendo un titolo e il componente `PostsList.jsx`.
   - `PostsList.jsx` consuma il Context per recuperare la lista dei post e mappa i dati per creare una card per ogni post.
   - `PostCard.jsx` rappresenta ogni singolo post visualizzandone i dettagli.

4. **Bonus**
   - In `App.jsx` si effettua una chiamata API per recuperare una lista di categorie, integrandola nella gestione dello stato o Context.
