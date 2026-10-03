import { NextResponse } from 'next/server';

type HealthResponse = {
  status: 'ok' | 'error';
  message: string;
  timestamp: string;
  entorno: string | undefined;
};

export async function GET(): Promise<NextResponse<HealthResponse>> {
  return NextResponse.json<HealthResponse>({
    status: 'ok',
    message: 'La API funciona correctamente en Hostinger',
    timestamp: new Date().toISOString(),
    entorno: process.env.NODE_ENV,
  });
}