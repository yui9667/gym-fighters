import React from 'react';
import './styles/Landing.scss';
import { motion, useScroll } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
const Landing = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: '#e8120a',
        }}
      />
      <header>
        <img className='header-img' src='/header.jpg' alt='ジムの建物の写真' />
      </header>
      <section className='about-section'>
        <p className='about-letter'>ABOUT </p>
        <h1>ジムファイターズについて</h1>
        <div className='about'>
          {/* <img className='about-img' src='/about-gym.jpg' alt='' /> */}
          <p>
            広島にあるジムファイターズ「ジャスティス」は、初心者からプロ志向の選手まで、幅広いニーズに応えるトレーニング環境を提供しています。私たちは、ボクシングを通じて心身の成長を促すことを目指し、個々の目標に応じたサポートを行っています。
          </p>
          <br />
          <p>
            ジム内は様々なトレーニング器具と本格的なリングを2つ完備し、快適で安全な環境を整えています。また、経験豊富なコーチ陣が常駐しており、技術指導はもちろん、フィジカル面やメンタル面でもしっかりサポートします。初心者には基礎から丁寧に教え、経験者にはさらなるスキル向上を図るための専門的なトレーニングメニューを用意しています。
          </p>
          <br />
          <p>
            私たちのジムは、ボクシングの楽しさを知ってもらうことを大切にしており、レクリエーション感覚で気軽に参加できるクラスも充実しています。仲間と共に汗を流し、楽しみながら健康を手に入れることができます。
          </p>
          <br />
          <p>
            広島でボクシングを始めてみたい方、技術を磨きたい方、ぜひ一度私たちのジムに足を運んでみてください。
          </p>
        </div>
      </section>
      <section className='class-section'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='class-list-container'
        >
          <p className='class-letter'>CLASS </p>
          <h2>クラスメニュー</h2>
          <h3>こんな人におすすめ</h3>
          <ul className='class-list'>
            <li>運動不足を解消したい</li>
            <li>ボクシングやキックボクシングを楽しみたい</li>
            <li>筋トレや有酸素運動で締まった体をつくりたい</li>
            <li>ボクシングやキックボクシングの基本技術を習得したい</li>
          </ul>

          <p className='class-description'>
            ジムが開いている時間帯であれば好きな時にトレーニングが可能ですが、初心者の方や技術の習得、仲間作りをメインにしたいという場合は、毎週開催されるクラスに参加するのもおすすめです。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='boxing-class-section'
        >
          <h2 className='boxing-class-title'>ボクシングクラス</h2>
          <div className='boxing-adult'>
            <img className='class-adult-img' src='/adult.jpg' alt='' />
            <div>
              <p className='boxing-description'>
                初心者から上級者までボクシングを楽しみたい方向けのクラスです。
                「ボクシングを楽しむだけでなく、しっかりとテクニックも身につけたい」という方に最適。
                サークルのような雰囲気で、細かなボクシング技術は個々のレベルに合わせて個別で指導します。
              </p>

              <div className='list-boxing-description'>
                <strong className='boxing-description'>開催日:</strong>
                <span className='boxing-date'>毎週月曜 19:00～20:30</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='kids-class-section'
        >
          <h2 className='kids-class-title'>Kidsボクシングクラス</h2>
          <div className='kids-boxing'>
            <img className='kids-class-img' src='/kids.jpg' alt='' />
            <div>
              <p className='kids-description'>
                小学校3年生～中学3年生までを対象としたボクシングクラスです。
                ボクシングを楽しみながら基礎体力作りができます。
                参加には別途お申込みが必要なため、詳しくはお問合せください。
              </p>

              <ul className='kids-description'>
                <strong className='kids-description'>開催日</strong>
                <li className='kids-description-list'>
                  <strong className='kids-date'>火曜日18:00~19:30</strong>
                </li>
                <li className='kids-description-list'>
                  <strong className='kids-date'>水曜日18:00~19:30</strong>
                </li>
                <li className='kids-description-list'>
                  <strong className='kids-date'>土曜日10:00~11:30</strong>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className='kick-boxing-class-section'
        >
          <h2 className='kick-boxing-class-title'>キックボクシングクラス</h2>
          <div className='kick-boxing'>
            <img className='kick-boxing-img' src='/kick-boxing.jpg' alt='' />
            <div>
              <p className='kick-boxing-description'>
                キックボクシングは1時間あたりの消費カロリーが他の運動と比べて多いため、ダイエットやボディメイク目的で始める人が多い人気のスポーツです。
                ダイエットや運動不足の解消、試合に出てみたいなど、様々な目的を持った人が集まって一緒に練習をしています。
                トレーナーによるミット練習でテクニックを習得したり、対人練習で実戦感覚を身につけることができます。
              </p>

              <ul className='kick-boxing-description'>
                <strong className='kick-boxing-description'>開催日</strong>
                <li className='kick-boxing-description-list'>
                  <span className='kick-boxing-date'>火曜日 18:00～19:30</span>
                </li>
                <li className='kick-boxing-description-list'>
                  <span className='kick-boxing-date'>水曜日 18:00～19:30</span>
                </li>
                <li className='kick-boxing-description-list'>
                  <span className='kick-boxing-date'>土曜日 10:00～11:30</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='staff-section'
      >
        <p className='class-letter'>STAFF</p>
        <h2>スタッフ</h2>
        <div className='staff'>
          <img src='/staff.jpg' alt='' className='staff-img' />
          <div className='staff-description'>
            <p>下村 浩司（しもむら ひろし）</p>
            <br />
            <p>
              高校・大学とアマチュアボクシングでインターハイ・国体・全日本選手権に出場。
            </p>
            <br />
            <p>
              社会人となってからは異種競技にも興味を持ち、キックや空手の試合も経験する。
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='price-section'
      >
        <p className='class-letter'>PRICE</p>
        <h2>料金</h2>

        <div className='price-box'>
          <div className='price-box-item'>
            <h3 className='price-box-item-detail'>月額料金</h3>
            <h3 className='price-box-item-detail'>10,000円</h3>
            <h5 className='price-box-item-detail'>月に何度でも通い放題</h5>
          </div>
          <div className='price-box-item'>
            <h3 className='price-box-item-detail'>ビジター料金</h3>
            <h3 className='price-box-item-detail'>2,000円</h3>
            <h5 className='price-box-item-detail'>
              気軽に利用できる1回ごとの料金
            </h5>
          </div>
          <div className='price-box-item'>
            <h3 className='price-box-item-detail'>初回無料体験</h3>
            <h3 className='price-box-item-detail'>0円</h3>
            <h5 className='price-box-item-detail'>
              事前にお問い合わせください
            </h5>
          </div>
        </div>
        <h3>【入会金】10,000円</h3>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='access-section'
      >
        <p>ACCESS</p>
        <h2>アクセス</h2>
        <div className='access'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.4799825903424!2d132.44292327538014!3d34.41456119851282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a98908097c081%3A0x78621575f1a19a1b!2z5pel5pys44CB44CSNzMzLTA4MDIg5bqD5bO255yM5bqD5bO25biC6KW_5Yy65LiJ5rud5pys55S677yR5LiB55uu77yS4oiS77yS77ySIOa0i-mjn-Wxi-OCouODs-ODquODjeODg-ODiA!5e0!3m2!1sja!2sse!4v1741174721038!5m2!1sja!2sse'
            style={{ border: 0 }}
            className='map'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div>
            <h3 className='access-table-name'>ジムファイターズ JUSTICE</h3>
            <table className='access-table'>
              <tbody className='access-table-body'>
                <tr>
                  <td className='access-table-right'>住所</td>
                  <td>〒733-0802 広島市西区三滝本町1-2-22</td>
                </tr>
                <tr>
                  <td className='access-table-right'>営業時間</td>
                  <td> 月曜日～日曜日 10:00～21:00</td>
                </tr>
                <tr>
                  <td className='access-table-right'>定休日</td>
                  <td> 不定休</td>
                </tr>
                <tr>
                  <td className='access-table-right'>電話番号</td>
                  <td> 090-2009-5586（下村）</td>
                </tr>
                <tr>
                  <td className='access-table-right'>最寄駅</td>
                  <td> 三滝駅 歩いて５分</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
      <footer>
        <p className='footer-name'>© 2025 ジムファイターズ JUSTICE</p>
        <div className='footer-sns'>
          <div className='instagram-icon'>
            <a
              href='https://www.instagram.com/gym.shimomura/'
              className='instagram-icon'
            >
              <FaInstagram />
            </a>
          </div>
          <div className='facebook-icon'>
            <FaFacebook />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
