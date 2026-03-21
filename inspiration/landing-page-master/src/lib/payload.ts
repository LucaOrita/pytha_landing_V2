import { PayloadSDK } from '@payloadcms/sdk';

const sdk = new PayloadSDK({
  baseURL: process.env.PAYLOAD_PUBLIC_CMS_URL || 'http://localhost:3000/api',
});

export default sdk;
