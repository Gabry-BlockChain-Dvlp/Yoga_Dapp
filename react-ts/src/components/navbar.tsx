import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";

export function Navbar() {
    const { address, isConnected } = useAccount();
    const { data: balance } = useBalance({
        address,
    });

    return (
        <nav className="app-navbar sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="app-brand">
                        <span className="app-brand-icon">🧘</span>
                        <span className="app-brand-title">Yoga DApp</span>
                    </div>

                    {/* Right side - Balance + Connect Button */}
                    <div className="flex items-center gap-4">
                        {isConnected && balance && (
                            <div className="app-balance-card hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl">
                                <span className="text-sm">Balance:</span>
                                <span className="font-mono font-semibold">
                                    {`${formatEther(balance.value).slice(0, 6)} ${balance.symbol}`}
                                </span>
                            </div>
                        )}
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
