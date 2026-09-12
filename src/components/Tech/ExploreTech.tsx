import React from 'react';

const ExploreTech = ({teches}) => {
    return (
        <div>
            {
                teches.map((tech) => {
                    return (
                        <div>{tech.name}</div>
                    )
                })
            }
        </div>
    );
};

export default ExploreTech;