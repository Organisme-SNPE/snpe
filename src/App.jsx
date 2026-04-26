import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { I18nProvider } from '@/lib/I18nContext';

import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import Champions from '@/pages/Champions';
import News from '@/pages/News';
import Universe from '@/pages/Universe';
import TravaillerAvecNous from '@/pages/TravaillerAvecNous';

import NewsArticle from '@/pages/NewsArticle';
import Donation from '@/pages/Donation';
import DonationSuccess from '@/pages/DonationSuccess';

function App() {
  return (
    <I18nProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
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
        </Router>
        <Toaster />
      </QueryClientProvider>
    </I18nProvider>
  )
}

export default App