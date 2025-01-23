import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import Index from "./pages/Index";
import CVSDocsPage from "./pages/docs/CVSDocsPage";
import POSDocsPage from "./pages/docs/POSDocsPage";
import EcommerceDocsPage from "./pages/docs/EcommerceDocsPage";
import VSPDocsPage from "./pages/docs/VSPDocsPage";
import LoyaltyDocsPage from "./pages/docs/LoyaltyDocsPage";
import EarnDocsPage from "./pages/docs/EarnDocsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-primary-dark-teal">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs/cvs" element={<CVSDocsPage />} />
            <Route path="/docs/pos" element={<POSDocsPage />} />
            <Route path="/docs/ecommerce" element={<EcommerceDocsPage />} />
            <Route path="/docs/vsp" element={<VSPDocsPage />} />
            <Route path="/docs/loyalty" element={<LoyaltyDocsPage />} />
            <Route path="/docs/earn" element={<EarnDocsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;