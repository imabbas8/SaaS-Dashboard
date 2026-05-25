'use client';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const spec = {
  openapi: '3.0.0',
  info: { title: 'SaaS Dashboard API', version: '1.0.0' },
  paths: {
    '/api/auth/register': {
      post: {
        summary: 'Register new user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    // Add more endpoints
  },
};

export default function ApiDocs() {
  return <SwaggerUI spec={spec} />;
}