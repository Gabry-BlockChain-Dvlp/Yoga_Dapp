# YogaChain - Yoga DApp

YogaChain e una DApp sviluppata con React, TypeScript e Vite che permette di acquistare prodotti digitali legati allo yoga usando Ethereum sulla rete di test Sepolia.

L'applicazione mostra una galleria di prodotti, consente la connessione del wallet tramite RainbowKit e gestisce un flusso di checkout Web3: selezione prodotto, firma della transazione, attesa della conferma e riepilogo finale dell'acquisto.

## Funzionalita principali

- Connessione wallet con RainbowKit.
- Visualizzazione rete e saldo del wallet connesso.
- Catalogo prodotti con immagini caricate tramite gateway IPFS/Pinata.
- Acquisto di prodotti tramite transazione ETH su Sepolia.
- Monitoraggio dello stato della transazione.
- Link diretto a Etherscan Sepolia per verificare la transazione.
- Pagina di successo con riepilogo ordine, prezzo e hash transazione.

## Stack tecnologico

- React 19
- TypeScript
- Vite
- React Router
- Wagmi
- Viem
- RainbowKit
- TanStack React Query
- Tailwind CSS
- IPFS/Pinata per le immagini dei prodotti

## Struttura del progetto

```text
Yogachain/
|-- public/
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- assets/
|   |   |-- App.css
|   |   |-- index.css
|   |   |-- NavBar.css
|   |   |-- productCard.css
|   |   `-- success.css
|   |-- components/
|   |   |-- gallery.tsx
|   |   |-- navbar.tsx
|   |   |-- productCard.tsx
|   |   |-- products.tsx
|   |   |-- trnsLogic.tsx
|   |   `-- txStatus.tsx
|   |-- pages/
|   |   `-- success.tsx
|   `-- utils/
|       `-- wagmi.ts
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
|-- vercel.json
`-- vite.config.ts
```

## Logica dell'applicazione

### 1. Avvio dell'app

Il file `src/main.tsx` monta l'app React e la racchiude nei provider necessari:

- `WagmiProvider` per la connessione blockchain.
- `QueryClientProvider` per la gestione delle query asincrone.
- `RainbowKitProvider` per l'interfaccia di connessione wallet.

La configurazione Web3 si trova in `src/utils/wagmi.ts`, dove viene impostata la rete Sepolia e il `projectId` usato da RainbowKit.

### 2. Routing

Il file `src/App.tsx` definisce le rotte principali:

- `/` mostra la home con navbar, hero, galleria prodotti e stato transazione.
- `/success` mostra il riepilogo dopo una transazione confermata.

### 3. Catalogo prodotti

Il file `src/components/products.tsx` contiene l'elenco dei prodotti acquistabili. Ogni prodotto ha:

- `id`
- `name`
- `price`
- `description`
- `image`

Le immagini sono collegate a contenuti IPFS tramite un gateway Pinata.

### 4. Galleria e card prodotto

`Gallery` legge l'array dei prodotti e crea una `ProductCard` per ogni elemento.

Ogni card mostra:

- immagine del prodotto;
- nome;
- descrizione;
- prezzo in ETH;
- pulsante `Acquista`.

Quando l'utente clicca `Acquista`, il prodotto viene passato alla logica di checkout.

### 5. Connessione wallet

La `Navbar` usa gli hook di Wagmi:

- `useAccount` per leggere indirizzo e stato di connessione;
- `useChainId` per mostrare la rete corrente;
- `useBalance` per recuperare il saldo;
- `formatEther` per visualizzare il saldo in ETH.

Il componente `ConnectButton` di RainbowKit gestisce la connessione del wallet.

### 6. Checkout Web3

La logica di acquisto si trova nel custom hook `useCheckout`, dentro `src/components/trnsLogic.tsx`.

Il flusso e questo:

1. L'utente seleziona un prodotto.
2. `handleBuy` riceve prezzo e dati del prodotto.
3. `parseEther` converte il prezzo da stringa a valore blockchain.
4. `useSendTransaction` invia ETH al wallet destinatario configurato.
5. L'hash della transazione viene salvato nello stato.
6. `useWaitForTransactionReceipt` attende la conferma della transazione.
7. Quando la transazione e confermata, l'app apre la pagina `/success` con i dati dell'acquisto nella query string.

### 7. Stato della transazione

Il componente `TxStatus` mostra un toast temporaneo con lo stato del checkout:

- transazione in attesa;
- transazione in conferma;
- transazione confermata;
- errore nella transazione.

Quando e disponibile un hash, viene mostrato anche un link a Etherscan Sepolia.

### 8. Pagina di successo

La pagina `src/pages/success.tsx` legge i parametri dalla URL:

- `tx`
- `product`
- `price`
- `description`

Se la transazione e presente, mostra un riepilogo dell'ordine e un link a Etherscan. Se manca l'hash, mostra un messaggio di stato vuoto e un link per tornare alla galleria.

## Requisiti

- Node.js
- npm
- Un wallet compatibile, per esempio MetaMask
- ETH di test sulla rete Sepolia

## Installazione

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri l'URL mostrato dal terminale, di solito:

```text
http://localhost:5173
```

## Script disponibili

```bash
npm run dev
```

Avvia l'app in modalita sviluppo.

```bash
npm run build
```

Compila il progetto TypeScript e genera la build di produzione.

```bash
npm run preview
```

Avvia una preview locale della build.

```bash
npm run lint
```

Esegue ESLint sul progetto.

## Note sulla rete

L'app e configurata per usare Ethereum Sepolia. Per completare un acquisto e necessario:

- connettere il wallet;
- selezionare o aggiungere la rete Sepolia;
- avere ETH di test disponibili;
- firmare la transazione dal wallet.

Le transazioni possono essere controllate su:

```text
https://sepolia.etherscan.io
```

## Possibili miglioramenti futuri

- Spostare wallet destinatario e project id in variabili d'ambiente.
- Aggiungere controllo esplicito della rete prima dell'acquisto.
- Gestire la pagina di successo nella stessa scheda invece di aprirne una nuova.
- Salvare gli ordini in un database o smart contract dedicato.
- Aggiungere test automatici per componenti e flusso di checkout.
- Correggere eventuali problemi di encoding nei testi mostrati dall'interfaccia.

## Stato del progetto

Il progetto e una DApp dimostrativa per acquistare contenuti yoga tramite transazioni ETH su rete Sepolia. E pensato come base didattica per mostrare l'integrazione tra React, wallet Web3, IPFS e monitoraggio delle transazioni blockchain.
