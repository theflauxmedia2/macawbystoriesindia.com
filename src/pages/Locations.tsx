import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { BookingModal } from '@/components/ui/booking-modal';
import { PageHead } from '@/components/seo/PageHead';
import { pageSeo } from '@/components/seo/pageSeo';
import { buildBreadcrumbSchema, buildFaqSchema, buildLocationsPageSchema } from '@/components/seo/structuredData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram, ChevronDown } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Locations = () => {
  const seo = pageSeo.locations;
  const { hash } = useLocation();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleBookTableClick = (location?: string) => {
    if (location) {
      setSelectedLocation(location);
    }
    setIsBookingModalOpen(true);
  };

  const locations = [
    {
      id: 'bengaluru',
      name: 'Macaw by Stories – Bengaluru',
      city: 'Bengaluru',
      image: '/lovable-uploads/1da2dad0-5f5a-4a7c-a762-c371ea2063a8.webp',
      address: '2224–2225, AECS Layout, Near Singasandra, Hosur Main Road, Bommanahalli, Bengaluru',
      phone: '+91‑8068507673',
      hours: '12:00 PM – 1:00 AM',
      heading: 'Rooftop Restaurant in AECS Layout, Bengaluru',
      highlights: ['Rooftop', 'Cocktails', 'Live Music', 'Party Vibe', 'Dance Floor'],
      description: [
        'Macaw by Stories Bengaluru is a rooftop restaurant in AECS Layout, just off Hosur Main Road near Singasandra. Whether you are planning a romantic date night, a birthday party or a late-night dinner, it is one of the liveliest restaurants on Hosur Road—with live music, DJs and a dance floor that keep the nightlife going till 1 AM.',
        'The kitchen serves North Indian favourites like paneer tikka and butter chicken, Chinese and Asian dishes, continental plates, pizzas and pastas, alongside craft cocktails and draught beer.',
      ],
      cuisines: ['North Indian', 'Chinese & Asian', 'Continental', 'Pizza & Pasta', 'Cocktails'],
      perfectFor: ['Date Nights', 'Birthday Parties', 'Live Music Nights', 'Late-Night Dinners', 'Corporate Parties'],
      mapUrl: 'https://maps.google.com/?q=2224–2225,+AECS+Layout,+Near+Singasandra,+Hosur+Main+Road,+Bommanahalli,+Bengaluru',
      reservationUrl: 'https://webbook.wegsoft.com/H7G6F5E4D3C2B1A0Z9Y8',
    },
    {
      id: 'chennai',
      name: 'Macaw by Stories – Chennai',
      city: 'Chennai',
      image: '/lovable-uploads/72010d4f-e3e8-494a-9834-c311e846743e.webp',
      address: '132, Max Kailash Building, Rajiv Gandhi Salai, Sholinganallur, Chennai – 600119',
      phone: '+91‑8045883769',
      hours: '12:00 PM – 11:30 PM',
      heading: 'Rooftop Restaurant in Sholinganallur, OMR, Chennai',
      highlights: ['Rooftop', 'Live Music', 'DJ Nights', 'Cocktails', 'Lively Group Vibe'],
      description: [
        'Macaw by Stories Chennai is a rooftop restaurant in Sholinganallur on OMR (Rajiv Gandhi Salai). With live music, DJ nights and sunset sessions, it is a favourite for a night out on OMR—from romantic dinners for two to birthday parties and group celebrations.',
        'The menu brings together North Indian and South Indian dishes, Chinese and Asian food, continental plates, pizzas and pastas, paired with signature cocktails.',
      ],
      cuisines: ['North Indian', 'South Indian', 'Chinese & Asian', 'Continental', 'Pizza & Pasta'],
      perfectFor: ['Date Nights', 'Birthday Parties', 'DJ & Live Music Nights', 'Group Dining', 'Celebrations'],
      instagram: '@macawchennai',
      mapUrl: 'https://maps.google.com/?q=132,+Max+Kailash+Building,+Rajiv+Gandhi+Salai,+Sholinganallur,+Chennai+600119',
      reservationUrl: 'https://webbook.wegsoft.com/Q8W7E6R5T4Y3U2I1O0',
    },
  ];

  const faqs = [
    {
      id: 'bengaluru',
      title: 'Macaw Bengaluru — AECS Layout, Singasandra & Hosur Road',
      items: [
        {
          question: 'Where is Macaw by Stories in Bangalore?',
          answer:
            'We are at 2224–2225, AECS Layout, near Singasandra on Hosur Main Road, Bommanahalli, Bengaluru 560068. If you are looking for a rooftop restaurant near Singasandra, Hosur Road or AECS Layout, we are right in the neighbourhood.',
        },
        {
          question: 'What food does Macaw Bengaluru serve?',
          answer:
            'North Indian, continental, Asian and Chinese food, plus pizzas and pastas—served with signature cocktails, mocktails and draught beer.',
        },
        {
          question: 'Is there live music at Macaw Bengaluru?',
          answer:
            'Yes. Live music, resident and guest DJs and weekly themed nights make Macaw a go-to live music restaurant on Hosur Road and one of the best spots for nightlife in Bangalore.',
        },
        {
          question: 'How late is Macaw Bengaluru open?',
          answer:
            'We are open daily from 12 PM to 1 AM, so you can drop in for an evening out or a late-night dinner in Bangalore.',
        },
        {
          question: 'Can I host a birthday party at Macaw Bengaluru?',
          answer:
            'Yes. Our party packages start at ₹1099 per person plus tax for groups of 25 or more, and are popular for birthdays, office parties and group celebrations near AECS Layout.',
        },
        {
          question: 'Is Macaw Bengaluru good for a date night?',
          answer:
            'Rooftop tables, city views and craft cocktails make it a romantic, couple-friendly restaurant for date nights in Bengaluru.',
        },
      ],
    },
    {
      id: 'chennai',
      title: 'Macaw Chennai — Sholinganallur & OMR',
      items: [
        {
          question: 'Where is Macaw by Stories in Chennai?',
          answer:
            'We are at 132, Max Kailash Building, Rajiv Gandhi Salai (OMR), Sholinganallur, Chennai 600119—an easy rooftop restaurant to reach from anywhere on OMR.',
        },
        {
          question: 'What food does Macaw Chennai serve?',
          answer:
            'North Indian and South Indian dishes, continental plates, Asian and Chinese food, pizzas and pastas, along with signature cocktails.',
        },
        {
          question: 'Does Macaw Chennai have live music and DJ nights?',
          answer:
            'Yes. Live music and DJ nights make Macaw one of the liveliest nightlife restaurants in OMR and a favourite for a night out in Chennai.',
        },
        {
          question: 'What are Macaw Chennai’s opening hours?',
          answer: 'We are open daily from 12 PM to 11:30 PM for lunch, evening drinks and dinner.',
        },
        {
          question: 'Can I celebrate a birthday or host a group dinner at Macaw Chennai?',
          answer:
            'Yes. We host birthday parties, group dining and corporate celebrations in Sholinganallur. Call +91-8045883769 to plan your party—dedicated Chennai party packages are coming soon.',
        },
        {
          question: 'Is Macaw Chennai a good date night restaurant?',
          answer:
            'With rooftop seating, sunset views and cocktails, Macaw is a romantic, couple-friendly restaurant for date nights on OMR.',
        },
      ],
    },
  ];

  // Scroll to location when arriving via hash (e.g. /locations#chennai)
  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
      const timeoutId = window.setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      return () => window.clearTimeout(timeoutId);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
        ogImage={seo.ogImage}
        structuredData={[
          buildLocationsPageSchema(),
          buildFaqSchema(faqs.flatMap((group) => group.items)),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
          ]),
        ]}
      />
      
      <Navigation onBookTableClick={() => handleBookTableClick()} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-primary">
          <div className="container mx-auto text-center">
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-primary mb-6">
              Rooftop Restaurants in Bengaluru &amp; Chennai
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Two cities, one incredible experience. Visit us in AECS Layout near Singasandra on Hosur Road, Bengaluru,
              or in Sholinganallur on OMR, Chennai, for rooftop dining, live music and nightlife.
            </p>
          </div>
        </section>


        {/* Location Details */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-20">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  id={location.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-luxury h-96">
                      <OptimizedImage
                        src={location.image}
                        alt={`${location.name} rooftop restaurant and bar`}
                        className="hover:scale-[1.02] transition-transform duration-700 ease-out"
                        priority={index === 0}
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-charcoal px-4 py-2 rounded-full font-semibold">
                          {location.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className="p-8 bg-card border-border hover:shadow-luxury transition-smooth">
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        {location.name}
                      </p>
                      <h2 className="font-cinzel text-3xl font-bold text-primary mb-6">
                        {location.heading}
                      </h2>
                      
                      <div className="space-y-4 mb-8">
                        {location.description.map((paragraph) => (
                          <p key={paragraph} className="text-lg text-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{location.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                          <a 
                            href={`tel:${location.phone}`}
                            className="text-foreground hover:text-primary transition-smooth"
                          >
                            {location.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{location.hours}</span>
                        </div>
                        
                        {location.instagram && (
                          <div className="flex items-center space-x-3">
                            <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                            <a 
                              href={`https://instagram.com/${location.instagram.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-smooth"
                            >
                              {location.instagram}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Highlights, cuisines & occasions */}
                      {[
                        { label: 'Highlights', items: location.highlights },
                        { label: 'Cuisines', items: location.cuisines },
                        { label: 'Perfect For', items: location.perfectFor },
                      ].map((group) => (
                        <div key={group.label} className="mb-6 last:mb-8">
                          <h3 className="font-semibold text-primary mb-3">{group.label}:</h3>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => window.open(location.reservationUrl, '_blank')}
                          className="bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth flex-1"
                        >
                          Reserve {location.city}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-charcoal transition-smooth"
                          onClick={() => window.open(location.mapUrl, '_blank')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-primary text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground text-center max-w-2xl mx-auto mb-12">
              Everything you need to know before visiting our rooftop restaurants in Bangalore and Chennai.
            </p>
            <div className="space-y-12">
              {faqs.map((group) => (
                <div key={group.id}>
                  <h3 className="font-cinzel text-xl font-bold text-primary mb-4">{group.title}</h3>
                  <div className="divide-y divide-border border-y border-border">
                    {group.items.map((faq) => (
                      <details key={faq.question} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground hover:text-primary transition-smooth [&::-webkit-details-marker]:hidden">
                          {faq.question}
                          <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <p className="pt-3 text-foreground/90 leading-relaxed">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="font-cinzel text-2xl font-bold text-primary mb-6">
              Can't Decide Which Location?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Both locations offer unique experiences while maintaining our signature Macaw by Stories quality. 
              Why not experience both!
            </p>
            <Button
              onClick={() => handleBookTableClick()}
              size="lg"
              className="bg-gradient-gold text-charcoal font-semibold px-8 py-4 hover:shadow-luxury transition-smooth"
            >
              Book at Any Location
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setSelectedLocation('');
        }}
        selectedLocation={selectedLocation}
      />
    </div>
  );
};

export default Locations;