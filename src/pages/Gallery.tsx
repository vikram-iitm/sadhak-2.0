
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "/gallery/vrindavan/IMG_4753.JPG",
    alt: "Vrindavan Image 1",
    category: "vrindavan"
  },
  {
    id: 2,
    src: "/gallery/vrindavan/IMG_4755.JPG",
    alt: "Vrindavan Image 2",
    category: "vrindavan"
  },
  {
    id: 3,
    src: "/gallery/vrindavan/IMG_4756.JPG",
    alt: "Vrindavan Image 3",
    category: "vrindavan"
  },
  {
    id: 4,
    src: "/gallery/vrindavan/IMG_4758.JPG",
    alt: "Vrindavan Image 4",
    category: "vrindavan"
  },
  {
    id: 5,
    src: "/gallery/vrindavan/IMG_4760.JPG",
    alt: "Vrindavan Image 5",
    category: "vrindavan"
  },
  {
    id: 6,
    src: "/gallery/vrindavan/IMG_4761.JPG",
    alt: "Vrindavan Image 6",
    category: "vrindavan"
  },
  {
    id: 7,
    src: "/gallery/vrindavan/IMG_4763.JPG",
    alt: "Vrindavan Image 7",
    category: "vrindavan"
  },
  {
    id: 8,
    src: "/gallery/vrindavan/IMG_4766.JPG",
    alt: "Vrindavan Image 8",
    category: "vrindavan"
  },
  {
    id: 9,
    src: "/gallery/vrindavan/IMG_4767.JPG",
    alt: "Vrindavan Image 9",
    category: "vrindavan"
  },
  {
    id: 10,
    src: "/gallery/vrindavan/IMG_4769.JPG",
    alt: "Vrindavan Image 10",
    category: "vrindavan"
  },
  {
    id: 11,
    src: "/gallery/vrindavan/IMG_4771.JPG",
    alt: "Vrindavan Image 11",
    category: "vrindavan"
  },
  {
    id: 12,
    src: "/gallery/kashi/IMG_4685.JPG",
    alt: "Kashi Image 1",
    category: "kashi"
  },
  {
    id: 13,
    src: "/gallery/kashi/IMG_4686.JPG",
    alt: "Kashi Image 2",
    category: "kashi"
  },
  {
    id: 14,
    src: "/gallery/kashi/IMG_4687.JPG",
    alt: "Kashi Image 3",
    category: "kashi"
  },
  {
    id: 15,
    src: "/gallery/kashi/IMG_4688.JPG",
    alt: "Kashi Image 4",
    category: "kashi"
  },
  {
    id: 16,
    src: "/gallery/kashi/IMG_4689.JPG",
    alt: "Kashi Image 5",
    category: "kashi"
  },
  {
    id: 17,
    src: "/gallery/kashi/IMG_4690.JPG",
    alt: "Kashi Image 6",
    category: "kashi"
  },
  {
    id: 18,
    src: "/gallery/kashi/IMG_4691.JPG",
    alt: "Kashi Image 7",
    category: "kashi"
  },
  {
    id: 19,
    src: "/gallery/kashi/IMG_4692.JPG",
    alt: "Kashi Image 8",
    category: "kashi"
  },
  {
    id: 20,
    src: "/gallery/kashi/IMG_4693.JPG",
    alt: "Kashi Image 9",
    category: "kashi"
  },
  {
    id: 21,
    src: "/gallery/kashi/IMG_4696.JPG",
    alt: "Kashi Image 10",
    category: "kashi"
  },
  {
    id: 22,
    src: "/gallery/kashi/IMG_4697.JPG",
    alt: "Kashi Image 11",
    category: "kashi"
  },
  {
    id: 23,
    src: "/gallery/kashi/IMG_4698.JPG",
    alt: "Kashi Image 12",
    category: "kashi"
  },
  {
    id: 24,
    src: "/gallery/kashi/IMG_4699.JPG",
    alt: "Kashi Image 13",
    category: "kashi"
  },
  {
    id: 25,
    src: "/gallery/kashi/IMG_4700.JPG",
    alt: "Kashi Image 14",
    category: "kashi"
  },
  {
    id: 26,
    src: "/gallery/kashi/IMG_4701.JPG",
    alt: "Kashi Image 15",
    category: "kashi"
  },
  {
    id: 27,
    src: "/gallery/kashi/IMG_4702.JPG",
    alt: "Kashi Image 16",
    category: "kashi"
  },
  {
    id: 28,
    src: "/gallery/kashi/IMG_4703.JPG",
    alt: "Kashi Image 17",
    category: "kashi"
  },
  {
    id: 29,
    src: "/gallery/rameshwaram/IMG_4475.WEBP",
    alt: "Rameshwaram Image 1",
    category: "rameshwaram"
  },
  {
    id: 30,
    src: "/gallery/rameshwaram/IMG_4476.WEBP",
    alt: "Rameshwaram Image 2",
    category: "rameshwaram"
  },
  {
    id: 31,
    src: "/gallery/rameshwaram/IMG_4478.WEBP",
    alt: "Rameshwaram Image 3",
    category: "rameshwaram"
  },
  {
    id: 32,
    src: "/gallery/rameshwaram/IMG_4704.WEBP",
    alt: "Rameshwaram Image 4",
    category: "rameshwaram"
  },
  {
    id: 33,
    src: "/gallery/rameshwaram/IMG_4705.WEBP",
    alt: "Rameshwaram Image 5",
    category: "rameshwaram"
  },
  {
    id: 34,
    src: "/gallery/rameshwaram/IMG_4706.JPG",
    alt: "Rameshwaram Image 6",
    category: "rameshwaram"
  },
  {
    id: 35,
    src: "/gallery/rameshwaram/IMG_4707.WEBP",
    alt: "Rameshwaram Image 7",
    category: "rameshwaram"
  },
  {
    id: 36,
    src: "/gallery/rameshwaram/IMG_4709.WEBP",
    alt: "Rameshwaram Image 8",
    category: "rameshwaram"
  },
  {
    id: 37,
    src: "/gallery/rameshwaram/IMG_4710.WEBP",
    alt: "Rameshwaram Image 9",
    category: "rameshwaram"
  },
  {
    id: 38,
    src: "/gallery/rameshwaram/IMG_4711.WEBP",
    alt: "Rameshwaram Image 10",
    category: "rameshwaram"
  },
  {
    id: 39,
    src: "/gallery/rameshwaram/IMG_4712.WEBP",
    alt: "Rameshwaram Image 11",
    category: "rameshwaram"
  },
  {
    id: 40,
    src: "/gallery/rameshwaram/IMG_4714.WEBP",
    alt: "Rameshwaram Image 12",
    category: "rameshwaram"
  },
  {
    id: 41,
    src: "/gallery/rameshwaram/IMG_4716.WEBP",
    alt: "Rameshwaram Image 13",
    category: "rameshwaram"
  },
  {
    id: 42,
    src: "/gallery/rameshwaram/IMG_4717.WEBP",
    alt: "Rameshwaram Image 14",
    category: "rameshwaram"
  },
  {
    id: 43,
    src: "/gallery/rameshwaram/IMG_4718.WEBP",
    alt: "Rameshwaram Image 15",
    category: "rameshwaram"
  },
  {
    id: 44,
    src: "/gallery/rameshwaram/IMG_4719.WEBP",
    alt: "Rameshwaram Image 16",
    category: "rameshwaram"
  },
  {
    id: 45,
    src: "/gallery/rameshwaram/IMG_4720.WEBP",
    alt: "Rameshwaram Image 17",
    category: "rameshwaram"
  },
  {
    id: 46,
    src: "/gallery/rameshwaram/IMG_4721.WEBP",
    alt: "Rameshwaram Image 18",
    category: "rameshwaram"
  },
  {
    id: 47,
    src: "/gallery/rameshwaram/IMG_4722.WEBP",
    alt: "Rameshwaram Image 19",
    category: "rameshwaram"
  },
  {
    id: 48,
    src: "/gallery/rameshwaram/IMG_4723.WEBP",
    alt: "Rameshwaram Image 20",
    category: "rameshwaram"
  },
  {
    id: 49,
    src: "/gallery/rameshwaram/IMG_4724.WEBP",
    alt: "Rameshwaram Image 21",
    category: "rameshwaram"
  },
  {
    id: 50,
    src: "/gallery/rameshwaram/IMG_4725.WEBP",
    alt: "Rameshwaram Image 22",
    category: "rameshwaram"
  },
  {
    id: 51,
    src: "/gallery/rameshwaram/IMG_4726.WEBP",
    alt: "Rameshwaram Image 23",
    category: "rameshwaram"
  },
  {
    id: 52,
    src: "/gallery/rameshwaram/IMG_4727.WEBP",
    alt: "Rameshwaram Image 24",
    category: "rameshwaram"
  },
  {
    id: 53,
    src: "/gallery/rameshwaram/IMG_4728.WEBP",
    alt: "Rameshwaram Image 25",
    category: "rameshwaram"
  },
  {
    id: 54,
    src: "/gallery/rameshwaram/IMG_4729.WEBP",
    alt: "Rameshwaram Image 26",
    category: "rameshwaram"
  },
  {
    id: 55,
    src: "/gallery/rameshwaram/IMG_4730.WEBP",
    alt: "Rameshwaram Image 27",
    category: "rameshwaram"
  },
  {
    id: 56,
    src: "/gallery/rameshwaram/IMG_4731.WEBP",
    alt: "Rameshwaram Image 28",
    category: "rameshwaram"
  },
  {
    id: 57,
    src: "/gallery/rameshwaram/IMG_4732.WEBP",
    alt: "Rameshwaram Image 29",
    category: "rameshwaram"
  },
  {
    id: 58,
    src: "/gallery/rameshwaram/IMG_4733.WEBP",
    alt: "Rameshwaram Image 30",
    category: "rameshwaram"
  },
  {
    id: 59,
    src: "/gallery/events/1a96767e-67b4-4d35-a911-09d21da18b5f.jpg",
    alt: "Sadhak Event 1",
    category: "events"
  },
  {
    id: 60,
    src: "/gallery/events/203e28f1-1405-44d9-b3c4-6c38b3d9b3ce.jpg",
    alt: "Sadhak Event 2",
    category: "events"
  },
  {
    id: 61,
    src: "/gallery/events/35a6cd57-970c-414e-b02c-78bde8968e11.jpg",
    alt: "Sadhak Event 3",
    category: "events"
  },
  {
    id: 62,
    src: "/gallery/events/3a0f70b9-941c-4d05-b957-4767e4a16a26.jpg",
    alt: "Sadhak Event 4",
    category: "events"
  },
  {
    id: 63,
    src: "/gallery/events/3f832f36-9aa1-4faf-aee2-411de4cdb096.jpg",
    alt: "Sadhak Event 5",
    category: "events"
  },
  {
    id: 64,
    src: "/gallery/events/40d1219b-804a-4c87-919c-8abc001e5d7d.jpg",
    alt: "Sadhak Event 6",
    category: "events"
  },
  {
    id: 65,
    src: "/gallery/events/6a82654b-a90e-4dce-8d4f-e02e6a9bcc07.jpg",
    alt: "Sadhak Event 7",
    category: "events"
  },
  {
    id: 66,
    src: "/gallery/events/77585a55-9e25-4b24-bb02-4b614ba0532e.jpg",
    alt: "Sadhak Event 8",
    category: "events"
  },
  {
    id: 67,
    src: "/gallery/events/7c18121a-5c86-4160-8840-4fa3bcd6cbeb.jpg",
    alt: "Sadhak Event 9",
    category: "events"
  },
  {
    id: 68,
    src: "/gallery/events/a3617fc7-2f85-43db-abb5-12df25fe74b5.jpg",
    alt: "Sadhak Event 10",
    category: "events"
  },
  {
    id: 69,
    src: "/gallery/events/bc15f70f-872b-41a2-9206-8b44cb8cc179.jpg",
    alt: "Sadhak Event 11",
    category: "events"
  },
  {
    id: 70,
    src: "/gallery/events/ca788139-479e-431e-813e-8069962788b6.jpg",
    alt: "Sadhak Event 12",
    category: "events"
  },
  {
    id: 71,
    src: "/gallery/events/d0306dac-a553-4f78-a746-919cf0e366e1.jpg",
    alt: "Sadhak Event 13",
    category: "events"
  },
  {
    id: 72,
    src: "/gallery/events/e0f74814-b938-4def-89cc-4ba75a738f33.jpg",
    alt: "Sadhak Event 14",
    category: "events"
  },
  {
    id: 73,
    src: "/gallery/events/e3fe8c11-033b-4c63-b3fb-b2c940a1a927.jpg",
    alt: "Sadhak Event 15",
    category: "events"
  },
  {
    id: 74,
    src: "/gallery/events/ecae11cd-0a42-4e57-b86c-f93d039526a8.jpg",
    alt: "Sadhak Event 16",
    category: "events"
  },
  {
    id: 75,
    src: "/gallery/events/f115072e-f9f4-4a34-9e13-1b1cde2d4949.jpg",
    alt: "Sadhak Event 17",
    category: "events"
  },
  {
    id: 76,
    src: "/gallery/events/f4db3fa9-6ce7-4b1c-a033-885ebaf9bc3c.jpg",
    alt: "Sadhak Event 18",
    category: "events"
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "rameshwaram", "vrindavan", "kashi", "events"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all" 
                    ? t.gallery.filters.all 
                    : category === "vrindavan" 
                      ? t.gallery.filters.vrindavan 
                      : category === "kashi" 
                        ? t.gallery.filters.kashi 
                        : category === "rameshwaram" 
                          ? t.gallery.filters.rameshwaram 
                          : t.gallery.filters.events}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
