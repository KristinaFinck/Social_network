import React from 'react';
import s from '/Users/kristinafinck/It-Incubator/Social network/social_network/src/components/profile/Profile.module.css'

export const ProfileInfo = (props:any) => {
    return (
        <div  className={s.content}>
            <img alt='beach' src='https://img.freepik.com/free-photo/beautiful-tropical-beach-and-sea-with-coconut-palm-tree-in-paradise-island_74190-2206.jpg?w=1800&t=st=1705572468~exp=1705573068~hmac=8cf2222e74b7558afdc6aba0023689aa4526f6c7bd8573018eb76f141daf8d40'/>
            <div>
                ava + description
            </div>
        </div>
    )
}