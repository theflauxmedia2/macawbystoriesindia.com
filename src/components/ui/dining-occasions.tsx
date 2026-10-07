import { Link } from 'react-router-dom';
import { ChefHat, Soup, Salad, Pizza, Heart, Cake, Users, Moon } from 'lucide-react';

const cuisines = [
  {
    icon: ChefHat,
    title: 'North & South Indian',
    description:
      'Paneer tikkas, butter chicken, Chettinad curries and biryanis—plus South Indian favourites at our Chennai rooftop on OMR.',
  },
  {
    icon: Soup,
    title: 'Chinese & Asian',
    description: 'Chilli paneer, Thai curries, wok-tossed noodles and fried rice for Asian and Chinese food lovers.',
  },
  {
    icon: Salad,
    title: 'Continental',
    description: 'Bruschettas, falafel, grills and plated continental mains made for long rooftop dinners.',
  },
  {
    icon: Pizza,
    title: 'Pizza & Pasta',
    description: 'Loaded pizzas and creamy pastas—from Margarita and Greek pizza to pesto and penne.',
  },
];

const occasions = [
  {
    icon: Heart,
    title: 'Date Nights',
    description: 'Romantic rooftop tables, city views and cocktails—a couple-friendly restaurant for date night.',
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Birthday celebrations with DJs, a dance floor and curated party packages for groups.',
    link: { to: '/packages', label: 'View party packages' },
  },
  {
    icon: Users,
    title: 'Group & Corporate Parties',
    description: 'Group dining, team dinners and corporate parties with set menus and event support.',
  },
  {
    icon: Moon,
    title: 'Late-Night Dinners',
    description: 'Open till 1 AM in Bengaluru and 11:30 PM in Chennai for late dinners and evenings out.',
  },
];

const CardGrid = ({ items }: { items: typeof occasions }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
    {items.map((item) => {
      const IconComponent = item.icon;
      return (
        <div
          key={item.title}
          className="group text-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl hover:bg-card/60 transition-premium"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-105 transition-premium">
            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal" />
          </div>
          <h4 className="font-cinzel text-sm sm:text-base xl:text-lg font-bold text-primary mb-2 sm:mb-3 leading-tight">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">{item.description}</p>
          {item.link && (
            <Link
              to={item.link.to}
              className="inline-block mt-3 text-xs sm:text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {item.link.label}
            </Link>
          )}
        </div>
      );
    })}
  </div>
);

export const DiningOccasions = () => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
          Rooftop Dining for Every Occasion
        </h2>
        <p className="text-sm sm:text-base text-foreground max-w-3xl mx-auto leading-relaxed px-2">
          A multi-cuisine rooftop restaurant with live music in{' '}
          <Link to="/locations#bengaluru" className="text-primary font-semibold hover:underline underline-offset-4">
            AECS Layout, Bengaluru
          </Link>{' '}
          and{' '}
          <Link to="/locations#chennai" className="text-primary font-semibold hover:underline underline-offset-4">
            Sholinganallur, OMR, Chennai
          </Link>
          —for romantic dinners, birthday parties and big nights out.
        </p>
      </div>

      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8">
        On the Menu
      </h3>
      <CardGrid items={cuisines} />

      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-primary text-center mt-14 sm:mt-16 mb-6 sm:mb-8">
        Perfect For
      </h3>
      <CardGrid items={occasions} />
    </div>
  </section>
);
