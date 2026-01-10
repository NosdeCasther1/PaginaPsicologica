import React from 'react';
import Image from 'next/image';
import { philosophyCards } from '@/lib/data';
import Card from '../ui/Card';
import { Heart, Target, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart className="w-12 h-12" />,
    target: <Target className="w-12 h-12" />,
    award: <Award className="w-12 h-12" />,
};

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Sobre Nosotros
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Ciencia y empatía al servicio de tu{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            bienestar
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        En Salud Mental, entendemos la psicología no solo como una disciplina clínica, sino como un encuentro humano transformador.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/team-image.jpg"
                                alt="Equipo de psicólogos profesionales"
                                width={600}
                                height={700}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-500/30 rounded-3xl -z-10" />
                    </div>

                    <div className="space-y-6">
                        {philosophyCards.map((card) => (
                            <Card key={card.id} hover={true}>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-blue-600">
                                        {iconMap[card.icon]}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{card.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
