import React, {useState} from 'react'
import PropTypes from 'prop-types'

type FormProp = {
  title: string
}

export default function TextForm(props: FormProp) {
  const [text, setText] = useState('set text');

  // Change all Text to Uppercase in textarea
  const handleUpClick = () => {
    setText(text.toUpperCase());
    console.log('cliked button upper case');

  }

  // This function allows the textarea to write on change when we use value attribute in textarea
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);

  }

  return (
    <div className='TextForm center w-1/2  bg-slate-400'>
     <h1 className='text-2xl bg-teal-200'>{props.title}</h1>
     <textarea className='w-full h-1/2 rounded border-2 border-black bg-stone-100' value={text} onChange={handleOnChange}></textarea>
     <button className='bg-red-200 border border-black' onClick={handleUpClick}>Upper Case</button>
    </div>
  )
}

// propTypes use to make sure props datatype match when coponents is used
// isRequired is used when we want an prop compulsory for our component
TextForm.propTypes = {
  title: PropTypes.string.isRequired
}
