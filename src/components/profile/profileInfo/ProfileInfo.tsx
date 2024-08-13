import React from 'react';
import s from '/Users/kristinafinck/It-Incubator/Social network/social_network/src/components/profile/Profile.module.css'

export const ProfileInfo = (props:any) => {
    return (
        <div  className={s.content}>
            <img alt='beach' src= 'https://rghs7representationcreativity.weebly.com/uploads/2/6/8/2/26823894/185002809.png'/>
            <div>
                ava + description
            </div>
        </div>
    )
}