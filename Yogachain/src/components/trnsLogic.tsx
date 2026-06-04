import { useEffect, useState } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { useNavigate } from "react-router-dom";
import type { Product } from "./products";

const GIANNI_WALLET = "0x8146766B3fAA13D5F937960BcA92d66EfbE2c85B";

export const useCheckout = () => {
    const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
    const [productInfo, setProductInfo] = useState<Pick<Product, "name" | "price" | "description"> | null>(null);
    const navigate = useNavigate();
    const {
        sendTransactionAsync,
        isPending,
        error: sendError,
        data: wagmiTxHash,
    } = useSendTransaction();
    const activeTxHash = txHash ?? wagmiTxHash ?? null;
    const { isLoading: isConfirming , isSuccess : isConfirmed, error: receiptError } = useWaitForTransactionReceipt({
        hash: activeTxHash ?? undefined,
        query: { enabled: !!activeTxHash },
    });

    useEffect(() => {
        if (!isConfirmed || !activeTxHash || !productInfo) return;

        const { name, price, description } = productInfo;
        const params = new URLSearchParams({
            tx: activeTxHash,
            product: name,
            price,
            description,
        });
        window.open(`/success?${params.toString()}`, `_blank`);
    }, [isConfirmed, activeTxHash, productInfo, navigate]);

    const handleBuy = async (product: Pick<Product, "name" | "price" | "description">) => {
        if (!sendTransactionAsync) {
            console.error("sendTransactionAsync not available — connect a wallet first");
            return;
        }

        setProductInfo(product);
            try {
                setProductInfo(null);
                const hash = await sendTransactionAsync({
                    to: GIANNI_WALLET as `0x${string}`,
                    value: parseEther(product.price),
                });
                setTxHash(hash);
                setProductInfo(product);
            } catch (err) {
                console.error("sendTransaction failed", err);
                setProductInfo(null);
            }
    };

    return { handleBuy, isPending, isConfirming, isSuccess: isConfirmed, error: sendError || receiptError, txHash: activeTxHash }
    };