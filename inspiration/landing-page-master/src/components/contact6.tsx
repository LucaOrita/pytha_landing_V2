'use client';

import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
  badge?: string;
}

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Numele trebuie să conțină cel puțin 2 caractere')
    .max(100, 'Numele este prea lung'),
  email: z
    .string()
    .email('Adresa de email nu este validă')
    .min(1, 'Email-ul este obligatoriu'),
  phone: z
    .string()
    .min(10, 'Numărul de telefon trebuie să conțină cel puțin 10 cifre')
    .regex(
      /^(\+?40|0)?[7]\d{8}$/,
      'Numărul de telefon trebuie să fie valid (ex: 07xxxxxxxx)',
    ),
  company: z
    .string()
    .min(2, 'Numele companiei trebuie să conțină cel puțin 2 caractere')
    .max(100, 'Numele companiei este prea lung'),
  message: z
    .string()
    .min(2, 'Mesajul trebuie să conțină cel puțin 2 caractere')
    .max(1000, 'Mesajul este prea lung (maxim 1000 caractere)'),
  agreeToTerms: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="text-primary size-6" />,
    title: 'Email',
    description: 'Răspundem la toate email-urile în maxim 24 de ore.',
    value: 'contact@doco.ro',
    href: 'mailto:contact@doco.ro',
    badge: 'Recommended',
  },
  {
    icon: <MessagesSquare className="text-primary size-6" />,
    title: 'Whatsapp',
    description: 'Discută cu noi pe Whatsapp pentru răspunsuri rapide.',
    value: 'Contact',
    href: 'https://wa.me/+40785225446',
    badge: 'Online',
  },
  {
    icon: <Phone className="text-primary size-6" />,
    title: 'Telefon',
    description: 'Răspundem de luni până vineri, între orele 8:00 - 22:00.',
    value: '(+40) 785 225 446',
    href: 'tel:+40785225446',
  },
  {
    icon: <MapPin className="text-primary size-6" />,
    title: 'Office',
    description: '',
    value: 'Calea Plevnei 145B, Bucuresti, Sector 6',
    href: 'https://maps.app.goo.gl/bCXYwUF1siy2zQC16',
  },
];

interface Contact6Props {
  className?: string;
}

const Contact6 = ({ className }: Contact6Props) => {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
      phone: '',
      agreeToTerms: false,
    },
  });

  const agreeToTerms = watch('agreeToTerms');

  // Clear success message after successful submission
  useEffect(() => {
    if (isSubmitSuccessful && submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');

    try {
      const { agreeToTerms, ...formData } = data;
      const req = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (req.ok) {
        setSubmitStatus('success');
        reset(); // Reset form on success
      } else {
        setSubmitStatus('error');
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section className={cn('bg-background py-12', className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contactează-ne!
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Contactează-ne acum și îți oferim în cel mai scurt timp toate
              detaliile de care ai nevoie.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-muted border-0 shadow-none">
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="bg-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold">{info.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-2 text-sm">
                            {info.description}
                          </p>
                          <Link
                            href={info.href}
                            target="_blank"
                            className="text-secondary text-sm font-medium transition-colors hover:underline"
                          >
                            {info.value}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle>Formular contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nume *
                      </Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Nume prenume"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="adresa@exemplu.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder="07xx xxx xxx"
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Compania ta *
                    </Label>
                    <Input
                      id="company"
                      {...register('company')}
                      placeholder="SC xxxx SRL"
                      className={errors.company ? 'border-red-500' : ''}
                    />
                    {errors.company && (
                      <p className="text-sm text-red-500">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Mesaj *
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Adaugă detalii relevante în scopul unei oferte personalizate."
                      rows={6}
                      className={cn(
                        'resize-none',
                        errors.message ? 'border-red-500' : '',
                      )}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agreeToTerms"
                        checked={agreeToTerms}
                        onCheckedChange={(checked) =>
                          setValue('agreeToTerms', checked as boolean, {
                            shouldValidate: true,
                          })
                        }
                        className="mt-1 flex-shrink-0"
                      />
                      <label
                        htmlFor="agreeToTerms"
                        className="text-muted-foreground cursor-pointer text-sm leading-relaxed"
                      >
                        Sunt de acord cu{' '}
                        <Link
                          href="/terms-and-conditions"
                          target="_blank"
                          className="text-foreground font-medium hover:underline"
                        >
                          Termenii și condițiile
                        </Link>
                        {' & '}
                        <Link
                          href="/privacy-policy"
                          target="_blank"
                          className="text-foreground font-medium hover:underline"
                        >
                          Politica de confidențialitate
                        </Link>
                      </label>
                    </div>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950">
                      <CheckCircle className="size-6 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Mesajul tău a fost trimis cu succes!
                      </span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
                      <AlertCircle className="size-6 text-red-600 dark:text-red-400" />
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">
                        Ceva nu a mers bine. Vă rugăm să încercați din nou.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !agreeToTerms}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="size-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Se trimite...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">Trimite</div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Hours - Full Width */}
          <div className="mt-12">
            <Separator className="mb-8" />
            <Card className="bg-muted border-0 shadow-none">
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Orar</h3>
                    <div className="text-muted-foreground space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Luni - Vineri</span>
                        <span>08:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sâmbătă</span>
                        <span>08:00 - 16:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duminică</span>
                        <span>Închis</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Date</h3>
                    <div className="text-muted-foreground space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Denumire</span>
                        <span>INOVIA S.R.L.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUI</span>
                        <span>RO49962130</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nr. reg. com.</span>
                        <span>J40/8172/2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact6 };
