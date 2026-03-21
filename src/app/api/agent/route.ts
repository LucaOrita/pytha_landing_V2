import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic();

const SYSTEM_EXTRACT = `Ești un asistent care extrage informații de transport din text.
Returnează DOAR un JSON valid cu câmpurile găsite.
Câmpuri posibile: taraOrigine, orasOrigine, adresaOrigine, taraDestinatie,
orasDestinatie, adresaDestinatie, tonaj, tipTransport, descriereMarfa,
cerinteSpeciale, dataIncarcare, dataLivrare, numePrenume, firma, telefon, email.
Dacă un câmp nu e găsit, nu îl include. Returnează DOAR JSON, fără explicații.`;

const SYSTEM_CHAT = `Ești un operator de comenzi pentru DACODA SRL,
o casă de expediții rutiere din România cu 32 de ani experiență.
Sarcina ta: colectează informațiile necesare pentru o cerere de ofertă de transport.

Câmpuri OBLIGATORII de colectat:
1. taraOrigine + orasOrigine + adresaOrigine (de unde pleacă marfa)
2. taraDestinatie + orasDestinatie + adresaDestinatie (unde ajunge)
3. tonaj (cât cântărește aproximativ)
4. tipTransport (rutier standard / ADR / frigorific / agabaritic / aerian / maritim)
5. descriereMarfa (ce se transportă)
6. dataIncarcare (când)
7. numePrenume + firma + telefon + email (contact)

Reguli:
- Întreabă câte UN lucru per mesaj
- Fii scurt și prietenos, nu formal
- Dacă răspunsul e ambiguu, cere clarificări
- Când ai toate câmpurile obligatorii, afișează rezumatul și cere confirmare
- Vorbește în română
- Returnează JSON cu câmpurile colectate până acum la fiecare răspuns,
  plus câmpul "nextQuestion" cu următoarea întrebare
  plus câmpul "isComplete" true/false
  plus câmpul "message" cu mesajul pentru utilizator

Format răspuns: JSON valid cu: { message, fields, nextQuestion, isComplete }`;

export async function POST(req: NextRequest) {
  const { mode, text, messages } = await req.json();

  if (mode === 'extract') {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5-20250514',
      max_tokens: 1000,
      system: SYSTEM_EXTRACT,
      messages: [
        { role: 'user', content: `Extrage informațiile din: ${text}` },
      ],
    });
    const content =
      response.content[0].type === 'text' ? response.content[0].text : '{}';
    try {
      return NextResponse.json({ fields: JSON.parse(content) });
    } catch {
      return NextResponse.json({ fields: {} });
    }
  }

  if (mode === 'chat') {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5-20250514',
      max_tokens: 1000,
      system: SYSTEM_CHAT,
      messages: messages,
    });
    const content =
      response.content[0].type === 'text' ? response.content[0].text : '{}';
    try {
      return NextResponse.json(JSON.parse(content));
    } catch {
      return NextResponse.json({
        message: content,
        fields: {},
        isComplete: false,
      });
    }
  }

  return NextResponse.json({ error: 'Invalid mode' }, { status: 400 });
}
