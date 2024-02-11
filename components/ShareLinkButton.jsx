import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';

//si click => copier le lien dans le presse papier + réinit après 1.5 sec
export default function ShareLinkButton(){
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setClicked(true)
        setTimeout(()=> setClicked(false), 1500)
    }

    return (
        <button 
            onClick={handleClick} 
            className='flex gap-1 border placeholder:border px-2 py-1 my-3 rounded text-slate-500 text-sm hover:bg-black hover:text-white'>
            <FontAwesomeIcon icon={faLink} color="grey" />
            {clicked ? 'Link copied' : 'Share link'}
        </button>
    )
}