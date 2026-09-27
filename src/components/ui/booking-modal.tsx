import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { MapPin, ExternalLink } from 'lucide-react';
import { RESERVATION_URLS } from '@/lib/reservations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation?: string;
}

const OUTLETS = [
  {
    id: 'bangalore',
    matches: ['bangalore', 'bengaluru'],
    name: 'Macaw Bengaluru',
    area: 'AECS Layout, Bommanahalli',
    url: RESERVATION_URLS.bangalore,
  },
  {
    id: 'chennai',
    matches: ['chennai'],
    name: 'Macaw Chennai',
    area: 'Sholinganallur, OMR',
    url: RESERVATION_URLS.chennai,
  },
];

export const BookingModal = ({ isOpen, onClose, selectedLocation }: BookingModalProps) => {
  const normalized = selectedLocation?.toLowerCase() ?? '';

  const handleReserve = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md bg-card border-border mx-auto">
        <DialogHeader className="text-center pb-2">
          <DialogTitle className="font-cinzel text-2xl sm:text-3xl text-primary">
            Reserve Your Table
          </DialogTitle>
          <DialogDescription className="text-foreground text-sm sm:text-base">
            Choose your Macaw by Stories location to book a table instantly.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {OUTLETS.map((outlet) => {
            const isPreselected = outlet.matches.includes(normalized);
            return (
              <Button
                key={outlet.id}
                onClick={() => handleReserve(outlet.url)}
                className={`w-full h-auto py-4 px-5 flex items-center justify-between bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth ${
                  isPreselected ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : ''
                }`}
              >
                <span className="flex items-center text-left">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>
                    <span className="block text-base sm:text-lg">{outlet.name}</span>
                    <span className="block text-xs sm:text-sm font-normal opacity-80">{outlet.area}</span>
                  </span>
                </span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
