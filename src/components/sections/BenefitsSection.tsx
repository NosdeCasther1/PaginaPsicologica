import React from 'react';
import Card from '../ui/Card';
import { benefits } from '@/lib/data';
import { Clock, Video, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    clock: <Clock className="w-14 h-14" />,
    video: <Video className="w-14 h-14" />,
    users: <Users className="w-14 h-14" />,
};

export default function BenefitsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        ¿Por qué <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">elegirnos?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit) => (
                        <Card key={benefit.id} className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-blue-600">
                                {iconMap[benefit.icon]}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
