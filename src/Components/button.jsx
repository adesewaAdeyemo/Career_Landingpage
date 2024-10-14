import React from 'react'

export default function button( props ) {
    let variant = {
      outline:
        "bg-transparent text-white px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border-2 hover:border-white-600 hover:text-white transition duration-300",
      filled:
        "inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-transparent hover:border-2 hover:border-white-600 hover:text-white transition duration-300",
      notFound:
        "inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-blue-600 transition duration-300",
    }[props.variant];
    if(props.disabled){
      return (
        <a>
          <button
            type="button"
            disabled
            className={`${variant} ${props.className}`}
            key={props.key}
          >
            {props.content}
          </button>
        </a>
      );
    }else{
      return (
        <a href={props.href}>
          <button
            type="button"
            className={`${variant} ${props.className}`}
            key={props.key}
          >
            {props.content}
          </button>
        </a>
      );
    }
  
}
