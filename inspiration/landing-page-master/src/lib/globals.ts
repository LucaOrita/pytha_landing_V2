import sdk from './payload';

export interface FAQ {
  question: string;
  answer: string;
}

export type FAQList = FAQ[];

interface GlobalResponse {
  FAQ: FAQList;
}

export async function getGlobals(): Promise<GlobalResponse> {
  const data = await sdk.findGlobal({
    slug: 'landingPage',
    depth: 2,
  });

  return data as unknown as GlobalResponse;
}
