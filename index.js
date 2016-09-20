import React, { Component } from 'react'
import { render } from 'react-dom'
import bespoke from 'bespoke'
import buildWars from 'bespoke-theme-build-wars'
import keys from 'bespoke-keys'
import touch from 'bespoke-touch'
import scale from 'bespoke-scale'
import backdrop from 'bespoke-backdrop'
import state from 'bespoke-state'
import './styles/main.css'

const slidesContext = require.context('./slides', true, /\.(js|md|html)$/)
const slides = slidesContext.keys().sort().map(
  key => {
    const filename = key.split('/')[2]
    return {
      content: slidesContext(key),
      style: filename.split('.').length > 2 ? filename.split('.')[1] : '',
    }
  }
)

class App extends Component {
  render() {
    return (
      <div>
        <article id="slideDeck">
          {slides.map((slide, index) => {
            if(typeof slide.content === 'string') {
              return (
                <section
                  key={index}
                  data-bespoke-state={slide.style}
                  dangerouslySetInnerHTML={{ __html: slide.content }}
                />
              )
            } else {
              return React.createElement(slide.content)
            }
          })}
        </article>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))

bespoke.from('#slideDeck', [
  buildWars(),
  keys(),
  touch(),
  scale('transform'),
  backdrop(),
  state(),
])
