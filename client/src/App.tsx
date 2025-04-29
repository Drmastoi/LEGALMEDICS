import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Course from "@/pages/Course";
import Blog from "@/pages/Blog";
import Practice from "@/pages/Practice";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/course" component={Course} />
      <Route path="/blog" component={Blog} />
      <Route path="/practice" component={Practice} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={NotFound} />
      <Route path="/terms" component={NotFound} />
      <Route path="/cookies" component={NotFound} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
