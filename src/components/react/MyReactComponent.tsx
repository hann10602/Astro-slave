import React from 'react'

type Props = {
  children: React.ReactNode
}

export const MyReactComponent = ({children}: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleAlert = () => {
    alert(children)
  }

  // document.getElementById("asd")?.addEventListener('click', () => handleAlert())

  return (
    <div className='bg-white text-black mb-20'>
    <button onClick={handleToggle}>Click me</button>
    <button id='asd'>Click me 2</button>
      {isOpen && children}
    </div>
  )
}