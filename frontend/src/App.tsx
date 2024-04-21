import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import { connectMetamask } from "./utils/connectMetamask";
import New from "./pages/New";
import Wallets from "./pages/Wallets";

function App() {
  const [account, setAccount] = React.useState<string | null>(null);
  // const [provider, setProvider] = React.useState<any>(null);
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
    // setProvider(connection?.web3Provider);
    setSigner(connection?.web3Signer);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
            <Route path="/" element={<Home connectWallet={connectWallet} account={account} signer={signer}/>} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
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
    </ThemeProvider>
  );
}

export default App;
