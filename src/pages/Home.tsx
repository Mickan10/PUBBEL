import { Link } from 'react-router-dom'
import s from './Home.module.css'
import disneyImg from '../assets/disney.png'

export default function Home() {
  return (
    <main className={s.page}>

      <header className={s.hero}>
        <h1 className={s.heroTitle}>VÄLJ ETT ÄMNE</h1>
      </header>

      <div className={s.grid}>

        <Link to="/quiz/disney" className={`${s.cell} ${s.disney}`}
          style={{ backgroundImage: `linear-gradient(rgba(255,0,110,0.5), rgba(255,0,110,0.5)), url(${disneyImg})` }}>
          <div className={s.disney_circle} />
          <h2 className={s.disney_title}>DIS<br />NEY</h2>
          <p className={s.disney_sub}>prinsessor · skurkar · klassiker</p>
        </Link>

        <Link to="/quiz/rock" className={`${s.cell} ${s.rock}`}>
          <div className={s.rock_ghost}>ROCK</div>
          <h2 className={s.rock_title}>ROCK</h2>
          <p className={s.rock_sub}>gitarrer · legender · arenarock</p>
          <div className={s.rock_line} />
        </Link>

        <Link to="/quiz/country" className={`${s.cell} ${s.country}`}>
          <div className={s.country_dots} />
          <h2 className={s.country_title}>COUN<br />TRY</h2>
          <p className={s.country_sub}>cowboyboots · Nashville · fiol</p>
        </Link>

        <Link to="/quiz/varlden" className={`${s.cell} ${s.varlden}`}>
          <div className={s.varlden_ring} />
          <div className={s.varlden_ring2} />
          <h2 className={s.varlden_title}>VÄR-<br />LDEN</h2>
          <p className={s.varlden_sub}>länder · huvudstäder · kuriosa</p>
        </Link>

        <Link to="/quiz/film" className={`${s.cell} ${s.film}`}>
          <div className={s.film_stripe} />
          <h2 className={s.film_title}>FILM<br />&amp;TV</h2>
          <p className={s.film_sub}>repliker · skådisar · klassiker</p>
        </Link>

        <Link to="/quiz/sport" className={`${s.cell} ${s.sport}`}>
          <div className={s.sport_circle} />
          <h2 className={s.sport_title}>SPORT</h2>
          <p className={s.sport_sub}>matcher · rekord · legender</p>
        </Link>

        <Link to="/quiz/historia" className={`${s.cell} ${s.historia}`}>
          <div className={s.hist_year}>1066</div>
          <h2 className={s.hist_title}>HIS-<br />TO-<br />RIA</h2>
          <p className={s.hist_sub}>kungar · krig · årtal</p>
        </Link>

        <Link to="/quiz/musik" className={`${s.cell} ${s.musik}`}>
          <div className={s.musik_bars}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={s.musik_bar}
                style={{ height: `${25 + Math.abs(Math.sin(i * 1.3) * 60)}%` }} />
            ))}
          </div>
          <h2 className={s.musik_title}>MU-<br />SIK</h2>
          <p className={s.musik_sub}>artister · hits · genrer</p>
        </Link>

        <Link to="/quiz/mat" className={`${s.cell} ${s.mat}`}>
          <div className={s.mat_dots} />
          <h2 className={s.mat_title}>MAT<br />&amp;<br />DRYCK</h2>
          <p className={s.mat_sub}>rätter · dryck · kök</p>
        </Link>

        <Link to="/quiz/vetenskap" className={`${s.cell} ${s.vetenskap}`}>
          <div className={s.sci_grid} />
          <div className={s.sci_orb} />
          <h2 className={s.sci_title}>VETEN-<br />SKAP</h2>
          <p className={s.sci_sub}>rymden · fakta · upptäckter</p>
        </Link>

        <Link to="/quiz/natur" className={`${s.cell} ${s.natur}`}>
          <div className={s.natur_blob} />
          <h2 className={s.natur_title}>NA-<br />TUR</h2>
          <p className={s.natur_sub}>djur · växter · vildmark</p>
        </Link>

        <Link to="/quiz/teknik" className={`${s.cell} ${s.teknik}`}>
          <div className={s.tek_lines} />
          <h2 className={s.tek_title}>TEK-<br />NIK</h2>
          <p className={s.tek_sub}>prylar · appar · framtid</p>
        </Link>

        {/* ── 14 GEN Z vs MIL ──────────── 2×1 lila */}
        <Link to="/quiz/genz" className={`${s.cell} ${s.genz}`}>
          <div className={s.genz_lines} />
          <h2 className={s.genz_title}>GEN Z VS<br />MILLENNIALS</h2>
          <p className={s.genz_sub}>slang · vibes · referencias</p>
        </Link>

        {/* ── 13 SCHLÄTTA ──────────────── 1×1 grön */}
        <Link to="/quiz/schlatta" className={`${s.cell} ${s.schlatta}`}>
          <div className={s.schlatta_bg} />
          <h2 className={s.schlatta_title}>SCHL-<br />ÄTTA</h2>
          <p className={s.schlatta_sub}>landet · Skövde · lokalkoll</p>
        </Link>

        {/* ── 16 DAMER VS GUBBAR ────────── 2×1 korall */}
        <Link to="/quiz/damer_gubbar" className={`${s.cell} ${s.damer}`}>
          <div className={s.damer_split} />
          <h2 className={s.damer_title}>DAMER<br />VS GUBBAR</h2>
          <p className={s.damer_sub}>verktyg · smink · bilar</p>
        </Link>

        {/* ── 17 VEM SA DET? ────────────── 1×1 guld */}
        <Link to="/quiz/citat" className={`${s.cell} ${s.citat}`}>
          <div className={s.citat_marks} />
          <h2 className={s.citat_title}>VEM<br />SA DET?</h2>
          <p className={s.citat_sub}>citat · repliker · kändisar</p>
        </Link>

        {/* ── 18 DETTA BÖR DU VETA ──────── 1×1 himmelsblå */}
        <Link to="/quiz/livskunskap" className={`${s.cell} ${s.livs}`}>
          <div className={s.livs_dot} />
          <h2 className={s.livs_title}>DETTA BÖR<br />DU VETA</h2>
          <p className={s.livs_sub}>vardag · lagar · koll</p>
        </Link>

        {/* ── 19 DEJT & DATING ──────────── 2×1 rosa */}
        <Link to="/quiz/dejt" className={`${s.cell} ${s.dejt}`}>
          <div className={s.dejt_hearts} />
          <h2 className={s.dejt_title}>DEJT &amp;<br />DATING</h2>
          <p className={s.dejt_sub}>appar · swipes · kärlek</p>
        </Link>

        {/* ── 20 80- & 90-TAL ────────────── 3×1 neon */}
        <Link to="/quiz/retro" className={`${s.cell} ${s.retro}`}>
          <div className={s.retro_grid} />
          <h2 className={s.retro_title}>80- &amp; 90-TAL</h2>
          <p className={s.retro_sub}>musik · film · nostalgi</p>
        </Link>

      </div>
    </main>
  )
}
