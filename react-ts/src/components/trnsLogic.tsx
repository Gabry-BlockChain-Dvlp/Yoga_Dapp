import { useState } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";

const GIANNI_WALLET = "0x8146766B3fAA13D5F937960BcA92d66EfbE2c85B";

export const useCheckout = () => {
    const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
    const { sendTransaction, isPending, error : sendError } = useSendTransaction();
    const { isLoading: isConfirming , isSuccess : isConfirmed, error: receiptError } = useWaitForTransactionReceipt({
        hash: txHash ?? undefined,
    });
    const handleBuy = async (price: string) => {
        if (!sendTransaction) {
            console.error("sendTransaction not available — connect a wallet first");
            return;
        }

        try {
            const res = await sendTransaction({
                to: GIANNI_WALLET as `0x${string}`,
                value: parseEther(price),
            } as any);

            // sendTransaction may return an object containing the transaction hash
            const hash = (res as any)?.hash ?? (res as any) ?? null;
            if (hash) setTxHash(hash as `0x${string}`);
        } catch (err) {
            console.error('sendTransaction failed', err);
        }
    };

    return { handleBuy, isPending, isConfirming, isSuccess: isConfirmed, error: sendError || receiptError, txHash }
    };