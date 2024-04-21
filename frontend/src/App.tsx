import React, { useMemo } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import { connectMetamask } from "./utils/connectMetamask";
import New from "./pages/New";
import Wallets from "./pages/Wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";

function App() {

  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  const config = {
    rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com',
    domain: 'https://onlypictures.netlify.app/',
    siweUri: 'https://example.com/login',
  };

  const [account, setAccount] = React.useState<string | null>(null);
  const [provider, setProvider] = React.useState<any>(null);
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      // setIsMetamaskInstalled(true);
      setAccount((window as any).ethereum.selectedAddress);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    const connection = await connectMetamask();
    setAccount(connection?.address);
    setProvider(connection?.web3Provider);
    setSigner(connection?.web3Signer);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout
                      connectWallet={connectWallet}
                      account={account}
                      signer={signer}
                    />
                  }
                >
                  <Route 
                    path="/" 
                    element={
                    <Home 
                      connectWallet={connectWallet}
                      account={account}
                      signer={signer}
                    />
                    } 
                  />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route 
                    path="/feed" 
                    element={
                      <Feed 
                        provider={provider}
                        account={account}
                        signer={signer}
                      />
                    } 
                  />
                  <Route path="/new" element={<New />} />
                  <Route
                    path="/wallets"
                    element={
                      <Wallets
                        connectWallet={connectWallet}
                        account={account}
                        signer={signer}
                      />
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
