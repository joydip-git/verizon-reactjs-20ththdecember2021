import React from 'react'
import PropTypes from 'prop-types'

// const Hero = ({ heroName }) => {
//     let design;
//     try {
//         if (heroName === 'Joker') {
//             throw new Error('Joker is not a hero')
//         }
//         design = (
//             <div>
//                 Hero:&nbsp;{heroName}
//             </div>
//         )
//     } catch (error) {
//         design=<span>Error occurred</span>
//     }
//     return design
// }

const Hero = ({ heroName }) => {
    if (heroName === 'Joker') {
        throw new Error('Joker is not a hero')
    }
    return (
        <div>
            Hero:&nbsp;{heroName}
        </div>
    )
}


Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero
