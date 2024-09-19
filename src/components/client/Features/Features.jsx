import { features_ } from '../../../constants/client.constants';
import { useEffect, useState } from 'react';

export function Features() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full my-24 max-w-[2000px]">
            <div className="relative flex items-center justify-center w-[90%] gap-20 py-20 rounded-xl max-[700px]:flex-col" style={{
                background: "rgb(123, 97, 255)"
            }}>

                {
                    features_.map((feature, index) => (
                        <div key={index}
                            className={`flex flex-col items-center justify-center gap-4 text-center text-white transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}>
                            <img src={feature.icon} alt={feature.name} className="w-10 h-10" />
                            <p className="text-md font-bold text-center max-w-[200px]">{feature.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
