// import styles from '@/app/tours/AllTours.module.scss';
import Link from 'next/link';
import {Container} from "@/components/container"
import s from "./style.module.scss"
import {Header} from "@/components/screens/header"

const Thank = () => {
  return (
    <>
      <Header className={s.header}></Header>
      <section className={s.section}>
        <Container className={s.container}>
          <h1 className={s.title}>Спасибо за оставленную заявку</h1>
          <p>Мы свяжемся с вами в ближайшее время!</p>
          <Link className={s.formButton} href={'/'}>На главную страницу</Link>
        </Container>
      </section>
    </>
    
  )
}

export default Thank;