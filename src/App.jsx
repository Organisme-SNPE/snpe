import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { I18nProvider } from '@/lib/I18nContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import Champions from '@/pages/Champions';
import News from '@/pages/News';
import Universe from '@/pages/Universe';
import TravaillerAvecNous from '@/pages/TravaillerAvecNous';

import NewsArticle from '@/pages/NewsArticle';
import Donation from '@/pages/Donation';
import DonationSuccess from '@/pages/DonationSuccess';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-void">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-pulse/30 border-t-pulse rounded-full animate-spin" />
          <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground">Loading</span>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/news" element={<News />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/travailler-avec-nous" element={<TravaillerAvecNous />} />

        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/faire-un-don" element={<Donation />} />
        <Route path="/donation-success" element={<DonationSuccess />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  )
}

export default App