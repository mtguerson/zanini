// app/api/shopify-webhook/route.js
export async function POST(req: Request) {
  const body = await req.text();
  console.log('📦 Webhook recebido:', body);
  return new Response('OK', { status: 200 });
}
