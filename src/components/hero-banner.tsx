import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'LIPOSIX',
    type: 'SUPLEMENTO ALIMENTAR EM PASTILHA DE GOMA',
    ingredients: ['EXTRATO DE CHÁ E CAFÉ VERDE', 'L-Carnitina', 'Picolinato de Cromo'],
    quantity: '30 Gomas',
    flavor: 'Maçã',
    color: 'green',
    capColor: 'white'
  },
  {
    name: 'REJUVENATI ADVANCER',
    type: 'SUPLEMENTO ALIMENTAR EM PASTILHA DE GOMA',
    ingredients: ['ÁCIDO CLOROGÊNICO', 'Vitamina A, D e E', 'Zinco'],
    quantity: '30 Gomas',
    flavor: 'Sabor fru vermelha',
    color: 'pink',
    capColor: 'pink'
  },
  {
    name: 'metabolic BOOST',
    type: 'SUPLEMENTO ALIMENTAR EM CÁPSULAS',
    ingredients: ['ÁCIDO CLOROGÊNICO', 'Cafeína Natural', 'Chá Verde', 'L-Carnitina'],
    quantity: '60 Cápsulas',
    flavor: 'Uso adulto',
    color: 'green',
    capColor: 'white'
  },
  {
    name: 'Beautysix',
    type: 'SUPLEMENTO ALIMENTAR EM PASTILHA DE GOMA',
    ingredients: ['HIALURÔNICO', 'A, C e E'],
    quantity: '30 Gomas',
    flavor: 'Sabor laranja',
    color: 'orange',
    capColor: 'orange'
  },
  {
    name: 'metabolic BOOST powder',
    type: 'SUPLEMENTO ALIMENTAR EM PÓ',
    ingredients: ['HIDROGÊNICO', 'Natural'],
    quantity: '',
    flavor: 'Maçã verde',
    color: 'green',
    capColor: 'white'
  }
];

export function HeroBanner() {
  return (
    <div className="relative w-full min-h-[500px] bg-gradient-to-br from-green-800 via-green-700 to-green-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Seção de Produtos - Esquerda */}
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {products.slice(0, 3).map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    transform: `rotate(${index * 2 - 2}deg) translateY(${index * 5}px)`,
                    zIndex: products.length - index
                  }}
                >
                  <div className="w-24 h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Cap */}
                    <div 
                      className={`w-8 h-6 rounded-t-full ${
                        product.capColor === 'white' ? 'bg-gray-200' :
                        product.capColor === 'pink' ? 'bg-pink-300' :
                        product.capColor === 'orange' ? 'bg-orange-300' : 'bg-gray-200'
                      }`}
                    />
                    
                    {/* Label */}
                    <div 
                      className={`w-full h-16 rounded-b-lg flex flex-col items-center justify-center text-xs font-bold text-white ${
                        product.color === 'green' ? 'bg-green-500' :
                        product.color === 'pink' ? 'bg-pink-500' :
                        product.color === 'orange' ? 'bg-orange-500' : 'bg-green-500'
                      }`}
                    >
                      <span className="text-[8px] leading-tight text-center px-1">
                        {product.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="mt-2 text-center">
                    <p className="text-xs font-semibold text-gray-800">{product.name}</p>
                    <p className="text-[10px] text-gray-600">{product.quantity}</p>
                    <p className="text-[10px] text-gray-500">{product.flavor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção Promocional - Direita */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Logo/Ícone */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>

              {/* Texto Promocional */}
              <div className="space-y-2 mb-6">
                <h2 className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                  GARANTA
                </h2>
                <h3 className="text-orange-400 text-4xl lg:text-5xl font-bold uppercase tracking-wide">
                  10% OFF
                </h3>
                <h4 className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                  NA PRIMEIRA
                </h4>
                <h5 className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                  COMPRA*
                </h5>
              </div>

              {/* Cupom */}
              <div className="space-y-4">
                <p className="text-white text-sm uppercase tracking-wide">
                  UTILIZE O CUPOM:
                </p>
                <Button 
                  className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-3 rounded-lg border-2 border-gray-300"
                >
                  BEMVINDO
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-white/80 text-xs mt-6 leading-relaxed">
                *Promoção não acumulativa com outros descontos. Limitado a 1 compra por cpf
              </p>
            </div>

            {/* Botão de Navegação Direita */}
            <div className="flex justify-center lg:justify-end mt-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
