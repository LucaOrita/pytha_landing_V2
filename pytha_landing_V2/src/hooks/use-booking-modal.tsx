'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PrezentareForm from '@/components/forms/prezentare-form';

interface BookingModalContext {
  open: () => void;
}

const BookingContext = createContext<BookingModalContext>({ open: () => {} });

export function useBookingModal() {
  return useContext(BookingContext);
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Programează o prezentare gratuită</DialogTitle>
            <DialogDescription>
              In doar 15 minute, iti aratam cum PYTHA poate transforma fluxul tau de productie.
            </DialogDescription>
          </DialogHeader>
          <PrezentareForm onSuccess={() => setTimeout(() => setIsOpen(false), 3000)} />
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}
