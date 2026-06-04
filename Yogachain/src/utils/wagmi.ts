import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "@wagmi/core/chains";
import { QueryClient } from "@tanstack/react-query";

export const wagmiConfig = getDefaultConfig({
    appName: "Yoga_DApp",
    chains: [sepolia],
    projectId: "1ae2ab8edeed47decd0600e5aec217e0",
    ssr: false,
});

export const queryClient = new QueryClient();