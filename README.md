# Il compitino / The task

Questo progetto e' stato generato utilizzando [Nx](https://nx.dev).

Lo scopo e' creare un ambiente dove sviluppare una serie di funzionalita' al fine di validare le competenze tecniche in diversi punti dello stack e su diverse tecnologie.

This project is generated using [Nx](https://nx.dev).

The aim is to create an environment that enable the development of a set of features. The purpose is to validate the technical skill of the candidate in various points the stack.

## Il progetto / The project

Il progetto immaginario e' un applicazione per un azienda di logistica che ha la necessita' di gestire magazzini e merce permettendo il tracciamento degli stessi.
Sara' possibile creare nuovi magazzini e prodotti dando la possibilita' di indicare quale prodotto si trova in quale magazzino
Si potra' anche muovere un prodotto da magazzino a magazzino.
Ogni pordotto ha una serie di tipologie.

The made up project is an application for a logistic company that has the needs to manage warehouses and items.
It will be possible to create warehouses and items giving the possibility to indicate in witch warehouse one item is located.
The user will be able to move an item from one warehouse to another.
Every item has a typology taken from a list of typologies.

## Regole / Rules

E' possibile installare qualunque nuova dipendenza se lo si ritiene necessario. Questo progetto ha gia presenti `react-router-dom` e `framer-motion` due librerie che vengono utilizzate come standard nei nostri progetti.

It's possible to install any new dependency if it's needed. This project already uses `react-router-dom` and `framer-motion`, those two libraries are considered a standard for our projects.

## Sviluppo / Development

Per avviare il progetto, `yarn start` fara' avviare sia la parte server che quella, vai a http://localhost:4200.
Ovviamente e' possibile usare liberamente la cli di NX per generare componenti e avviare i progetti come meglio si crede.

In order to start the project use `yarn start`. This will spin up the api and the development server for the react application. This will be aviable at http://localhost:4200.
Feel free to use the NX cli to create new projects and libraries if they are needed.

## Task Frontend

Il progetto in cui sviluppare e' `web-ui`.
Si è liberi di utilizzare qualunque design o design system.

- Sviluppare una pagina che mostra la lista dei magazzini.
- Sviluppare una pagina che permette di creare un nuovo magazzino.
- Sviluppare una pagina che mostra la lista degli elementi.
- Dare la possibilita' di eliminare elementi.
- Sviluppare una pagina che permette di vedere il dettaglio di un elemento e se ed a quale magazzino e' assegnato dando la possibilita' di navigare al dettaglio di quel magazzino.
- Sviluppare una pagina che permette di vedere il dettaglio di un magazzino e permette di aggiungere elementi, creandone di nuovi o muovendoli da quelli gia presenti in altri magazzini.

The main project is `web-ui`.
Feel free to use witch design and/or design system you prefer.

- Develop a page that shows the list of warehouses.
- Develop a page that enable the cration of a new warehouse.
- Develop a page that show the list of all items.
- Give the user the possibility of deleting one or more items.
- Develop a page to see the detail of on item. Moreover show the warehouse where the item is placed given the possibility to navigate to that warehouse detail page.
- Develop a page that show the detail of a warehouse giving to the user the ability to add items, creating new ones or moving them from other warehouses.

## Task Backend

Il progetto in cui sviluppare e' `api`
Seguendo lo standard proposto da NestJs implmentare delle rest api per rendere disponibili le seguenti funzionalità:

- Dare la possibilità all'utente di importare massivamente una lista di elementi tramite l'upload di un file csv.
- Dare la possibilità di esportare la lista di magazzini in csv.
- Aggiungere la possibilità di creare un ordine con uno o piu elementi. Un ordine dovrà avere anche un indirizzo di spedizione, un email di contatto e una data di creazione. Un ordine dovrà possedere anche l'indicazione della data di evasione.
- Dare la possibilità di indicare un ordine come evaso.
- Creare un cronjob che ogni ora controlla gli ordini che non sono stati evasi da piu di una giornata e simula l'invio di un email che notifica la cosa.
- Dare la possibilità di eliminare un ordine.
- Una volta evaso un ordine gestire la rimozione degli elementi tramite un evento.

The main project is `api`
Using as a reference the NestJs documentation develop a set of rest api to enable the following features:

- Enable the user to import massively a list of items throught the upload of a csv file.
- Make the warehouse list exportable using a csv file.

TODO
