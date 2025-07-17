import sysConfig from '@/config'
import tool from '@/utils/tool'
import { createI18n } from 'vue-i18n'
import el_af from 'element-plus/es/locale/lang/af'
// import el_ar from "element-plus/es/locale/lang/ar";
// import el_az from "element-plus/es/locale/lang/az";
// import el_bg from "element-plus/es/locale/lang/bg";
// import el_bn from "element-plus/es/locale/lang/bn";
// import el_ca from "element-plus/es/locale/lang/ca";
// import el_cs from "element-plus/es/locale/lang/cs";
// import el_da from "element-plus/es/locale/lang/da";
// import el_de from "element-plus/es/locale/lang/de";
// import el_el from "element-plus/es/locale/lang/el";
import el_en from 'element-plus/es/locale/lang/en'
// import el_es from "element-plus/es/locale/lang/es";
// import el_et from "element-plus/es/locale/lang/et";
// import el_fa from "element-plus/es/locale/lang/fa";
// import el_fi from "element-plus/es/locale/lang/fi";
// import el_fr from "element-plus/es/locale/lang/fr";
// import el_he from "element-plus/es/locale/lang/he";
// import el_hi from "element-plus/es/locale/lang/hi";
// import el_hr from "element-plus/es/locale/lang/hr";
// import el_hu from "element-plus/es/locale/lang/hu";
// import el_id from "element-plus/es/locale/lang/id";
// import el_it from "element-plus/es/locale/lang/it";
// import el_ja from "element-plus/es/locale/lang/ja";
// import el_ko from "element-plus/es/locale/lang/ko";
// import el_lt from "element-plus/es/locale/lang/lt";
// import el_lv from "element-plus/es/locale/lang/lv";
// import el_ms from "element-plus/es/locale/lang/ms";
// import el_nl from "element-plus/es/locale/lang/nl";
// import el_no from "element-plus/es/locale/lang/no";
// import el_pl from "element-plus/es/locale/lang/pl";
// import el_pt from "element-plus/es/locale/lang/pt";
// import el_ro from "element-plus/es/locale/lang/ro";
// import el_ru from "element-plus/es/locale/lang/ru";
// import el_sk from "element-plus/es/locale/lang/sk";
// import el_sr from "element-plus/es/locale/lang/sr";
// import el_sv from "element-plus/es/locale/lang/sv";
// import el_th from "element-plus/es/locale/lang/th";
// import el_tr from "element-plus/es/locale/lang/tr";
// import el_uk from "element-plus/es/locale/lang/uk";
// import el_vi from "element-plus/es/locale/lang/vi";
import el_zh_cn from 'element-plus/es/locale/lang/zh-cn'
import el_zh_tw from 'element-plus/es/locale/lang/zh-tw'
import el_zh_hk from 'element-plus/es/locale/lang/zh-hk'
import el_zh_mo from 'element-plus/es/locale/lang/zh-mo'

// 自定义语言文件导入
import af from './lang/af.js'
// import ar from "./lang/ar.js";
// import az from "./lang/az.js";
// import bg from "./lang/bg.js";
// import bn from "./lang/bn.js";
// import ca from "./lang/ca.js";
// import cs from "./lang/cs.js";
// import da from "./lang/da.js";
// import de from "./lang/de.js";
// import el from "./lang/el.js";
import en from './lang/en.js'
// import es from "./lang/es.js";
// import et from "./lang/et.js";
// import fa from "./lang/fa.js";
// import fi from "./lang/fi.js";
// import fr from "./lang/fr.js";
// import he from "./lang/he.js";
// import hi from "./lang/hi.js";
// import hr from "./lang/hr.js";
// import hu from "./lang/hu.js";
// import id from "./lang/id.js";
// import it from "./lang/it.js";
// import ja from "./lang/ja.js";
// import ko from "./lang/ko.js";
// import lt from "./lang/lt.js";
// import lv from "./lang/lv.js";
// import ms from "./lang/ms.js";
// import nl from "./lang/nl.js";
// import no from "./lang/no.js";
// import pl from "./lang/pl.js";
// import pt from "./lang/pt.js";
// import ro from "./lang/ro.js";
// import ru from "./lang/ru.js";
// import sk from "./lang/sk.js";
// import sr from "./lang/sr.js";
// import sv from "./lang/sv.js";
// import th from "./lang/th.js";
// import tr from "./lang/tr.js";
// import uk from "./lang/uk.js";
// import vi from "./lang/vi.js";
import zh_cn from './lang/zh-cn.js'
import zh_tw from './lang/zh-tw.js'
import zh_hk from './lang/zh-hk.js'
import zh_mo from './lang/zh-mo.js'

export const messages = {
  af: { el: el_af, ...af },
  // ar: { el: el_ar, ...ar },
  // az: { el: el_az, ...az },
  // bg: { el: el_bg, ...bg },
  // bn: { el: el_bn, ...bn },
  // ca: { el: el_ca, ...ca },
  // cs: { el: el_cs, ...cs },
  // da: { el: el_da, ...da },
  // de: { el: el_de, ...de },
  // el: { el: el_el, ...el },
  en: { el: el_en, ...en },
  // es: { el: el_es, ...es },
  // et: { el: el_et, ...et },
  // fa: { el: el_fa, ...fa },
  // fi: { el: el_fi, ...fi },
  // fr: { el: el_fr, ...fr },
  // he: { el: el_he, ...he },
  // hi: { el: el_hi, ...hi },
  // hr: { el: el_hr, ...hr },
  // hu: { el: el_hu, ...hu },
  // id: { el: el_id, ...id },
  // it: { el: el_it, ...it },
  // ja: { el: el_ja, ...ja },
  // ko: { el: el_ko, ...ko },
  // lt: { el: el_lt, ...lt },
  // lv: { el: el_lv, ...lv },
  // ms: { el: el_ms, ...ms },
  // nl: { el: el_nl, ...nl },
  // no: { el: el_no, ...no },
  // pl: { el: el_pl, ...pl },
  // pt: { el: el_pt, ...pt },
  // ro: { el: el_ro, ...ro },
  // ru: { el: el_ru, ...ru },
  // sk: { el: el_sk, ...sk },
  // sr: { el: el_sr, ...sr },
  // sv: { el: el_sv, ...sv },
  // th: { el: el_th, ...th },
  // tr: { el: el_tr, ...tr },
  // uk: { el: el_uk, ...uk },
  // vi: { el: el_vi, ...vi },
  'zh-cn': { el: el_zh_cn, ...zh_cn },
  'zh-tw': { el: el_zh_tw, ...zh_tw },
  'zh-hk': { el: el_zh_hk, ...zh_hk },
  'zh-mo': { el: el_zh_mo, ...zh_mo },
}

function getLang(lang) {
  const availableLangs = Object.keys(messages)
  // 完全匹配 (zh-cn)
  if (availableLangs.includes(lang)) return lang
  return 'zh-cn'
}

const i18n = createI18n({
  locale: getLang(tool.data.get('APP_LANG') || sysConfig.LANG),
  fallbackLocale: 'zh-cn',
  globalInjection: true,
  messages,
})

export default i18n
