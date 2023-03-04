import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="React Logo" width="300" height="300" />
      <ClickCounter />
    </>
  )
}
