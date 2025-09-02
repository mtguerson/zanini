import { env } from '@/env';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text(); // corpo cru
    const hmacHeader = req.headers.get('x-shopify-hmac-sha256');

    // 🔐 Recalcula o HMAC
    const hash = crypto
      .createHmac('sha256', env.SHOPIFY_WEBHOOK_SECRET) // aqui vai o valor que você recebeu
      .update(rawBody, 'utf8')
      .digest('base64');

    console.log('🔔 Webhook recebido!');
    console.log('HMAC enviado pelo Shopify:', hmacHeader);
    console.log('HMAC calculado:', hash);

    if (hash !== hmacHeader) {
      console.error('❌ Assinatura inválida! Webhook pode não ser do Shopify.');
      return new Response('Assinatura inválida', { status: 401 });
    }

    // ✅ Se passou, loga os dados do pedido
    const jsonBody = JSON.parse(rawBody);
    console.log('Pedido recebido:', jsonBody);

    return new Response('Webhook válido e recebido', { status: 200 });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return new Response('Erro interno', { status: 500 });
  }
}
