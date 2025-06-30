import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer} id="contacts">
      <div className={style.footerContacts}>
        <div className={style.footerPhones}>
          <a href="whatsapp.com">+38(066)253-44-51</a>
          <p>Напишите в WhatsApp</p>
          <a href="tel:+380661533451">+38(066)153-34-51</a>
          <p>Или позвоните нам по телефону</p>
        </div>
        <Link href="/">
          <Image src="/images/footer/footerLogo.svg" alt="pellion odyssey" className={style.footerLogo} width={100} height={85}></Image>
        </Link>
        <div className={style.footerSocialNetworks}>
            <Link href="#"><Image src="/images/footer/instagram.svg" alt="instagram logo" width={50} height={50}/></Link>
            <Link href="#"><Image src="/images/footer/whatsapp.svg" alt="whatsapp logo" width={50} height={50}/></Link>
            <Link href="#"><Image src="/images/footer/facebook.svg" alt="facebook logo" width={50} height={50}/></Link>
            <Link href="#"><Image src="/images/footer/telegram.svg" alt="telegram logo" width={50} height={50}/></Link>
        </div>
      </div>
      <div className={style.footerInfo}>
        <div className={style.footerInfoText}> 
          <p>Αριθμος Γ.Ε.ΜΗ.: 152210101000</p> 
          <p>ΜΗ.ΤΕ: 0261Ε70000758901</p>
        </div>
        <div>
          <p>© PELLION ODYSSEY,</p>
          <p>Все права защищены.</p>
        </div>
        <div className={style.politics}>
          <a href="#" className={style.footerLink}>Политика конфиденциальности</a>
          <a href="#" className={style.footerLink}>Согласие на обработку данных</a>
        </div>
      </div>
    </footer>
  );
};
