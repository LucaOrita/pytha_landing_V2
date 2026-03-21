'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import posthog from 'posthog-js';

interface WaitlistModalProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function WaitlistModal({
  children,
  title = 'Înscrie-te pe lista de așteptare',
  description = 'Toți clienții care se înscriu pe lista de așteptare vor primi reduceri la toate pachetele.',
}: WaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      posthog.capture('waitlist_modal_opened');
    }
    setOpen(isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Te rugăm să introduci o adresă de email validă');
      return;
    }

    setIsLoading(true);

    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      toast.success('Bine ai venit pe lista de așteptare!', {
        description: 'Vom reveni în curând cu vești bune.',
      });

      setEmail('');
      handleOpenChange(false);
    } catch {
      toast.error('Ceva nu a mers bine', {
        description: 'Te rugăm să încerci din nou.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-8 sm:max-w-xl lg:p-12">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nume@exemplu.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              className="h-11"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Se procesează...
              </>
            ) : (
              'Înscrie-te acum'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
