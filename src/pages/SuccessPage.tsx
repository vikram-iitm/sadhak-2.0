import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SuccessPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-2xl text-center">
          <div className="glass-card p-8 rounded-xl shadow-lg animate-fade-in">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t.contact.messageSent}
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {t.contact.thankYou}
            </p>
            <Button asChild className="btn-primary">
              <Link to="/">{t.contact.returnToHome}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
