import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.home}>
      <h1>In the world of contacts, <p>we are your <span className={style.phonebook}>PHONEBOOK</span> App.</p> </h1>
      <span>Take a step closer, <b>LOG IN</b> or <b>REGISTER </b>today.</span>
    </div>
  )
}

export default Home
