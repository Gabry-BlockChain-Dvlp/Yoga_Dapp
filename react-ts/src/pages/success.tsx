import { Link, useSearchParams } from "react-router-dom";
import "../assets/success.css";


const ETHERSCAN_TX_URL = "https://sepolia.etherscan.io/tx/";

export default function Success() {
  const [searchParams] = useSearchParams();

  const txHash = searchParams.get("tx");
  const productName = searchParams.get("product");
  const price = searchParams.get("price");
  const description = searchParams.get("description");

  const etherscanUrl = txHash ? `${ETHERSCAN_TX_URL}${txHash}` : null;

  if (!txHash) {
    return (
      <div className="success-page">
        <div className="success-card">
          <h1>Nessun acquisto da mostrare</h1>
          <p>Apri questa pagina dopo un acquisto completato dalla galleria.</p>
          <Link className="success-back" to="/">
            Torna alla galleria
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-card">
        <p className="success-badge">Acquisto completato</p>
        <h1>Grazie per il tuo ordine!</h1>

        <dl className="success-details">
          {productName && (
            <>
              <dt>Prodotto</dt>
              <dd>{productName}</dd>
            </>
          )}
          {description && (
            <>
              <dt>Descrizione</dt>
              <dd>{description}</dd>
            </>
          )}
          {price && (
            <>
              <dt>Prezzo pagato</dt>
              <dd>{price} ETH</dd>
            </>
          )}
          <dt>Hash transazione</dt>
          <dd className="success-hash">{txHash}</dd>
        </dl>

        {etherscanUrl && (
          <div className="success-explorer-container">
          <a
            className="success-explorer"
            href={etherscanUrl}
            target="_blank"
            rel="noreferrer"
          >
              Visualizza su Etherscan (Sepolia)
            </a>
          </div>
        )}

        <Link className="success-back" to="/">
          Continua lo shopping
        </Link>
      </div>
    </div>
  );
}
