import React from 'react';
import './styles/Landing.scss';
const Landing = () => {
  return (
    <div>
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
        <p className='class-letter'>CLASS </p>
        <h2>クラスメニュー</h2>
        <p>
          ジムファイターズではボクシングとキックボクシングのクラスを設けています。
        </p>
        <ul className='class-list'>
          <li>運動不足を解消したい</li>
          <li>ボクシングやキックボクシングを楽しみたい</li>
          <li>筋トレや有酸素運動で締まった体をつくりたい</li>
          <li>ボクシングやキックボクシングの基本技術を習得したい</li>
        </ul>
        <p>
          など、初心者から上級者まで、様々なニーズに合わせたトレーニングができます。
        </p>
        <br />
        <p>
          ジムが開いている時間帯であれば好きな時にトレーニングが可能ですが、初心者の方や技術の習得、仲間作りをメインにしたいという場合は、毎週開催されるクラスに参加するのもおすすめです。
        </p>
        <div className='boxing-class-section'>
          <h2 className='boxing-class-title'>ボクシングクラス</h2>
          <img className='class-adult-img' src='/adult.jpg' alt='' />
          <div>
            <p>
              初心者から上級者までボクシングを楽しみたい方向けのクラスです。
            </p>
            <br />
            <p>
              「ボクシングを楽しむだけでなく、しっかりとテクニックも身につけたい」という方に最適。
            </p>
            <br />
            <p>
              サークルのような雰囲気で、細かなボクシング技術は個々のレベルに合わせて個別で指導します。
            </p>

            <ul>
              <li>
                <strong>開催日</strong>:<strong>毎週月曜 19:00～20:30</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className='boxing-class-section'>
          <h2 className='boxing-class-title'>ボクシングクラス</h2>
          <img className='class-adult-img' src='/kids.jpg' alt='' />
          <div>
            <p>小学校3年生～中学3年生までを対象としたボクシングクラスです。</p>
            <br />
            <p>ボクシングを楽しみながら基礎体力作りができます。</p>
            <br />
            <p>参加には別途お申込みが必要なため、詳しくはお問合せください。</p>

            <ul>
              <strong>開催日</strong>
              <li>
                <strong>火曜日18:00~19:30</strong>
              </li>
              <li>
                <strong>水曜日18:00~19:30</strong>
              </li>
              <li>
                <strong>土曜日10:00~11:30</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className='boxing-class-section'>
          <h2 className='boxing-class-title'>キックボクシングクラス</h2>
          <img className='class-adult-img' src='/kick-boxing.jpg' alt='' />
          <div>
            <p>
              キックボクシングは1時間あたりの消費カロリーが他の運動と比べて多いため、ダイエットやボディメイク目的で始める人が多い人気のスポーツです。
            </p>
            <br />
            <p>
              ダイエットや運動不足の解消、試合に出てみたいなど、様々な目的を持った人が集まって一緒に練習をしています。
            </p>
            <br />
            <p>
              トレーナーによるミット練習でテクニックを習得したり、対人練習で実戦感覚を身につけることができます。
            </p>

            <ul>
              <strong>開催日</strong>
              <li>
                <strong>火曜日19:30〜21:00</strong>
              </li>
              <li>
                <strong>金曜日19:00~21:00</strong>
              </li>
              <li>
                <strong>日曜日10:00〜12:00</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='staff-section'>
        <p className='class-letter'>STAFF</p>
        <h2>スタッフ</h2>
        <div>
          <img src='/staff.jpg' alt='' className='staff-img' />
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
      </section>
      <section className='price-section'>
        <p className='class-letter'>PRICE</p>
        <h2>料金</h2>

        <div className='price-box'>
          <div className='price-box-item'>
            <h3>月額料金</h3>
            <h3>10,000円</h3>
            <h4>月に何度でも通い放題</h4>
          </div>
          <div className='price-box-item'>
            <h3>ビジター料金</h3>
            <h3>2,000円</h3>
            <h4>気軽に利用できる1回ごとの料金</h4>
          </div>
          <div className='price-box-item'>
            <h3>初回無料体験</h3>
            <h3>0円</h3>
            <h4>事前にお問い合わせください</h4>
          </div>
        </div>
        <h3>【入会金】10,000円</h3>
      </section>
      <section>
        <h2>アクセス</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.4799825903424!2d132.44292327538014!3d34.41456119851282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a98908097c081%3A0x78621575f1a19a1b!2z5pel5pys44CB44CSNzMzLTA4MDIg5bqD5bO255yM5bqD5bO25biC6KW_5Yy65LiJ5rud5pys55S677yR5LiB55uu77yS4oiS77yS77ySIOa0i-mjn-Wxi-OCouODs-ODquODjeODg-ODiA!5e0!3m2!1sja!2sse!4v1741174721038!5m2!1sja!2sse'
          width='600'
          height='450'
          style={{ border: 0 }}
          className='map'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        <table className='access-table'>
          <tbody className='access-table-body'>
            <tr>
              <td>名称</td>
              <td> ジムファイターズ JUSTICE</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>〒733-0802 広島市西区三滝本町1-2-22</td>
            </tr>
            <tr>
              <td>営業時間</td>
              <td> 月～日 10:00～21:00</td>
            </tr>
            <tr>
              <td>定休日</td>
              <td> 不定休</td>
            </tr>
            <tr>
              <td>電話番号</td>
              <td> TEL: 090-2009-5586（下村）</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Landing;
