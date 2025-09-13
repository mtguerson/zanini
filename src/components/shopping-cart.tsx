'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import { CartItem } from './cart-item';
import { Loader2, ShoppingBag, ShoppingCartIcon, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { createCartAction } from '@/actions/create-cart';
import { useMutation } from '@tanstack/react-query';

export function ShoppingCart() {
  const { products, total, totalPrice, clearCart, isOpen, toggleCart } =
    useCart();

  const { mutateAsync: createCart, isPending } = useMutation({
    mutationFn: () =>
      createCartAction({
        lines: products.map((product) => ({
          quantity: product.quantity,
          merchandiseId: product.id,
        })),
      }),
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      window.location.href = data;
    },
  });

  // Calcular frete (exemplo: grátis acima de R$ 199, senão R$ 15)
  const shippingThreshold = 199;
  const shippingCost = totalPrice >= shippingThreshold ? 0 : 15;
  const finalTotal = totalPrice + shippingCost;

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetTrigger asChild>
        <div className="relative bg-primary rounded-full p-2 hover:bg-primary/90 transition-colors cursor-pointer">
          <ShoppingCartIcon color="white" size={16} />
          {total > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
              {total}
            </Badge>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrinho de Compras
            {total > 0 && (
              <Badge variant="secondary" className="ml-2">
                {total} {total === 1 ? 'item' : 'itens'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Lista de Itens */}
          <div className="flex-1 overflow-y-auto p-4">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Adicione alguns produtos para começar suas compras
                </p>
                <SheetClose asChild>
                  <Button variant="outline">Continuar Comprando</Button>
                </SheetClose>
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Resumo e Ações */}
          {products.length > 0 && (
            <SheetFooter className="border-t pt-4">
              <div className="w-full space-y-4">
                {/* Resumo de Preços */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">
                      {formatPrice(totalPrice.toString())}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete:</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        formatPrice(shippingCost.toString())
                      )}
                    </span>
                  </div>

                  {totalPrice < shippingThreshold && (
                    <div className="text-xs text-muted-foreground">
                      Faltam{' '}
                      {formatPrice((shippingThreshold - totalPrice).toString())}{' '}
                      para frete grátis
                    </div>
                  )}

                  <div className="border-t pt-2">
                    <div className="flex justify-between text-base font-semibold">
                      <span>Total:</span>
                      <span className="text-primary">
                        {formatPrice(finalTotal.toString())}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="space-y-2">
                  <Button
                    className="w-full"
                    size="lg"
                    disabled={isPending}
                    onClick={() => createCart()}
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      'Finalizar Compra'
                    )}
                  </Button>

                  <div className="flex gap-2">
                    <SheetClose asChild>
                      <Button variant="outline" className="flex-1">
                        Continuar Comprando
                      </Button>
                    </SheetClose>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={clearCart}
                      className="text-destructive hover:text-destructive"
                      title="Limpar carrinho"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Informações Adicionais */}
                <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
                  <p>✓ Garantia de 1 ano</p>
                  <p>✓ Troca grátis em até 30 dias</p>
                  <p>✓ Pagamento 100% seguro</p>
                </div>
              </div>
            </SheetFooter>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
