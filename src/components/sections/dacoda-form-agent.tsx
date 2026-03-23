'use client';

import { Check, Loader2, Send } from 'lucide-react';
import { useRef, useState } from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import type { FormData } from './dacoda-form-standard';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const FIELD_LABELS: Record<string, string> = {
  taraOrigine: 'Țară origine',
  orasOrigine: 'Oraș origine',
  adresaOrigine: 'Adresă origine',
  taraDestinatie: 'Țară destinație',
  orasDestinatie: 'Oraș destinație',
  adresaDestinatie: 'Adresă destinație',
  tonaj: 'Tonaj',
  tipTransport: 'Tip transport',
  descriereMarfa: 'Descriere marfă',
  cerinteSpeciale: 'Cerințe speciale',
  dataIncarcare: 'Data încărcare',
  dataLivrare: 'Data livrare',
  numePrenume: 'Nume',
  firma: 'Firmă',
  telefon: 'Telefon',
  email: 'Email',
};

export default function DacodaFormAgent() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Bună! Sunt asistentul Dacoda. De unde pleacă marfa ta? (oraș și țară)',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState<Partial<FormData>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMsg },
    ];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'chat',
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();

      if (data.fields) {
        setFields((prev) => ({ ...prev, ...data.fields }));
      }
      if (data.isComplete) {
        setIsComplete(true);
      }

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: data.message || data.nextQuestion || 'Mulțumesc!',
        },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Eroare de conexiune. Încearcă din nou.',
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'REPLACE_WITH_FORMSPREE_ID'}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
        },
      );
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <Check className="mx-auto mb-3 h-10 w-10 text-green-600" />
        <p className="text-dacoda-navy text-lg font-bold">
          Cererea ta a fost trimisă cu succes!
        </p>
        <p className="text-dacoda-gray mt-2 text-sm">
          Te vom contacta în cel mult 2 ore în zilele lucrătoare.
        </p>
      </div>
    );
  }

  const filledFields = Object.entries(fields).filter(
    ([, v]) => v && String(v).length > 0,
  );

  return (
    <div className="space-y-4">
      {/* Chat + Mini form side by side on larger screens */}
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        {/* Chat window */}
        <div className="flex flex-col">
          <div
            ref={scrollRef}
            className="flex max-h-[400px] min-h-[300px] flex-col gap-3 overflow-y-auto rounded-lg border bg-gray-50 p-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'max-w-[85%] rounded-lg px-4 py-2.5 text-sm',
                  msg.role === 'assistant'
                    ? 'self-start bg-white shadow-sm'
                    : 'bg-dacoda-orange self-end text-white',
                )}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 self-start rounded-lg bg-white px-4 py-2.5 text-sm shadow-sm">
                <Loader2 className="text-dacoda-orange h-3.5 w-3.5 animate-spin" />
                <span className="text-dacoda-gray">Se gândește...</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="mt-3 flex gap-2">
            <label htmlFor="agent-input" className="sr-only">
              Scrie răspunsul tău
            </label>
            <Input
              id="agent-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Scrie răspunsul tău..."
              disabled={loading}
              className="flex-1"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors disabled:opacity-60"
              aria-label="Trimite mesaj"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mini form preview */}
        {filledFields.length > 0 && (
          <div className="w-full rounded-lg border bg-white p-4 lg:w-56">
            <p className="text-dacoda-navy mb-3 text-xs font-bold tracking-wider uppercase">
              Câmpuri completate
            </p>
            <div className="space-y-2">
              {filledFields.map(([key, val]) => (
                <div key={key}>
                  <p className="text-dacoda-gray text-[10px] tracking-wide uppercase">
                    {FIELD_LABELS[key] ?? key}
                  </p>
                  <p className="text-dacoda-navy truncate text-xs font-medium">
                    {String(val)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Submit button */}
      {isComplete && (
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-dacoda-orange hover:bg-dacoda-orange-dark flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-colors disabled:opacity-60"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting ? 'Se trimite...' : 'Trimite cererea'}
        </button>
      )}
    </div>
  );
}
