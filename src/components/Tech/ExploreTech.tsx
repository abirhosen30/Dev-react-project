import React from 'react';
import type { ITechnology } from '../../assets/Type/Type';
import TechCard from './TechCard';

const ExploreTech = ({teches}) => {
    return (
        <div className='grid grid-cols-3 gap-7 mt-6'>
            {
                teches.map((tech): ITechnology => {
                    return (
                        <TechCard tech={tech}/>
                    )
                })
            }
        </div>
    );
};

export default ExploreTech;