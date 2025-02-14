import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GradientTexto from './Textos/Gradient-Texto.jsx'
import TextNeon from './Textos/Text-neon.jsx'
import TextAnime from './Textos/Text-Anime.jsx'
import SliderImagem from './Slider-imagens/Slider-imagens.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GradientTexto/>
  
    <TextNeon/>

    <TextAnime/>

    <SliderImagem/>
   
  </StrictMode>,
)
