import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance, useChainId } from "wagmi";
import { formatEther } from "viem";
import "../assets/NavBar.css";

const NETWORK_NAMES: Record<number, string> = {
    11155111: "Sepolia",
};

function NetworkIcon() {
    return (
        <span className="app-network-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        </span>
    );
}

export function Navbar() {
    const { address, isConnected } = useAccount();
    const chainId = useChainId();
    const networkName = chainId ? NETWORK_NAMES[chainId] ?? `Chain ${chainId}` : undefined;
    const { data: balance } = useBalance({
        address,
    });

    return (
        <nav className="app-navbar">
            <div className="app-navbar-inner">
                <div className="app-navbar-row">
                    <div className="app-brand">
                        <img className="app-brand-icon" src="/YogaLogo.svg" alt="Yoga DApp" />
                        <span className="app-brand-title">Yoga DApp</span>
                    </div>

                    <div className="app-navbar-actions">
                        {isConnected && (
                            <div className="app-wallet-status">
                                {networkName && (
                                    <div className="app-network-badge" title={`Rete: ${networkName}`}>
                                        <NetworkIcon />
                                        <span className="app-network-dot" aria-hidden="true" />
                                        <span className="app-network-name">{networkName}</span>
                                    </div>
                                )}
                                {balance && (
                                    <div className="app-balance-card">
                                        <span className="app-balance-label">Saldo:</span>
                                        <span className="app-balance-value">
                                            {`${formatEther(balance.value).slice(0, 6)} ${balance.symbol}`}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
