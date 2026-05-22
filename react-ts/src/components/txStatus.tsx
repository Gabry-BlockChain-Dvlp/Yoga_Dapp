type Props = {
  isPending?: boolean;
  isConfirming?: boolean;
  isSuccess?: boolean;
  error?: any;
  txHash?: `0x${string}` | null;
};

export const TxStatus = ({ isPending, isConfirming, isSuccess, error, txHash }: Props) => {
  const visible = !!(isPending || isConfirming || isSuccess || error);
  if (!visible) return null;

  let title = '';
  let emoji = 'ℹ️';
  if (isPending) {
    title = 'Transazione inviata — in attesa di firma';
    emoji = '⏳';
  } else if (isConfirming) {
    title = 'Transazione in conferma';
    emoji = '🔄';
  } else if (isSuccess) {
    title = 'Transazione confermata';
    emoji = '✅';
  } else if (error) {
    title = 'Errore nella transazione';
    emoji = '❌';
  }

  const txLink = txHash ? `https://etherscan.io/tx/${txHash}` : undefined;

  return (
    <div className="tx-toast" role="status" aria-live="polite">
      <div className="tx-toast-inner">
        <div className="tx-emoji">{emoji}</div>
        <div className="tx-content">
          <div className="tx-title">{title}</div>
          {txHash && (
            <a className="tx-link" href={txLink} target="_blank" rel="noreferrer">
              Visualizza su explorer
            </a>
          )}
          {error && <div className="tx-error">{String(error?.message ?? error)}</div>}
        </div>
      </div>
    </div>
  );
};

export default TxStatus;
