import type { IncomingMessage, ServerResponse } from 'http';
import app from '../src/apiApp';

// Vercel Serverless Function entry point
export default function handler(req: IncomingMessage, res: ServerResponse) {
  return app(req, res);
}

export { app };
