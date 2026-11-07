<div align="center">

<img src="./resources/icon.png" width="88" alt="SmartSub" />

# SmartSub — စမတ်စာတန်းထိုးနှင့် အသံဖန်တီးရေးကိရိယာ

**ဗီဒီယိုမှ စာတန်းထိုးထုတ်ယူခြင်း၊ ဘာသာပြန်ခြင်း၊ AI ဖြင့်ဖန်တီးခြင်း၊ AI အသံသွင်းခြင်းနှင့် အသံပုံတူကူးခြင်း၊ စာတန်းထိုးဗီဒီယိုထဲ ထည့်သွင်းခြင်း၊ MCP/CLI အလိုအလျောက်လုပ်ဆောင်ခြင်းတို့ကို တစ်နေရာတည်းတွင် အသုံးပြုနိုင်သော Open-source Desktop App**

ဗီဒီယိုတစ်ဖရိမ်ချင်းစီကို ပိုမိုကောင်းမွန်စွာ ဖော်ပြနိုင်စေပါ။

<a href="https://trendshift.io/repositories/14079?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-14079" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/14079" alt="buxuku%2FSmartSub | Trendshift" width="250" height="55"/></a>
<a href="https://trendshift.io/repositories/14079?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-14079" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/14079/daily?language=TypeScript" alt="buxuku%2FSmartSub | Trendshift" width="250" height="55"/></a>

[![Release](https://img.shields.io/github/v/release/buxuku/SmartSub?style=flat-square&logo=github&color=blue&label=Release)](https://github.com/buxuku/SmartSub/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/buxuku/SmartSub/total?style=flat-square&logo=github&label=Downloads&color=brightgreen)](https://github.com/buxuku/SmartSub/releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square&logo=electron&logoColor=white)](https://github.com/buxuku/SmartSub/releases)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://github.com/buxuku/SmartSub/blob/master/LICENSE)

[မြန်မာ](README.md) | [English](README_EN.md) | [日本語](README_JA.md)

[ဒေါင်းလုဒ်နှင့် တပ်ဆင်ခြင်း](#ဒေါင်းလုဒ်နှင့်-တပ်ဆင်ခြင်း) · [လုပ်ဆောင်ချက်များ](#လုပ်ဆောင်ချက်များ) · [AI Assistant နှင့် Automation](#-ai-ဖန်တီးရေးအကူအညီပေးစနစ်) · [အခမဲ့အသုံးပြုနည်း](#လုပ်ငန်းစဉ်တစ်ခုလုံးကို-အခမဲ့အသုံးပြုခြင်း) · [မေးလေ့ရှိသောမေးခွန်းများ](#မေးလေ့ရှိသောမေးခွန်းများ) · [ပြောင်းလဲမှုမှတ်တမ်း](https://github.com/buxuku/SmartSub/releases)

</div>

![SmartSub ပင်မမျက်နှာပြင်](./resources/preview/home.png)

## အထူးပံ့ပိုးကူညီသူ

🤝 ပံ့ပိုးကူညီသူအဖြစ် ပါဝင်လိုပါသလား၊ ပူးပေါင်းဆောင်ရွက်လိုပါသလား။ [**ပံ့ပိုးကူညီမှုနှင့် ပူးပေါင်းဆောင်ရွက်ရေးအကြောင်း**](https://smartsub.linxiaodong.com/sponsorship) ကို ကြည့်ပါ။

<a href="https://www.aiyoyoo.com/register?aff=YWL9FL2XFPKM" target="_blank" rel="noopener noreferrer"><img src="./resources/sponsors/crazytoken-zh.png" alt="SmartSub × CrazyToken: မော်ဒယ်မျိုးစုံအသုံးပြုနိုင်ပြီး ကုန်ကျစရိတ် ၉၉% အထိ သက်သာနိုင်သည်။ အသုံးပြုသူအသစ်များအတွက် $20 စမ်းသပ်ခွင့်" /></a>

❤️ SmartSub ကို ပံ့ပိုးကူညီပေးသော [**CrazyToken**](https://www.aiyoyoo.com/register?aff=YWL9FL2XFPKM) ကို ကျေးဇူးတင်ပါသည်။

#### CrazyToken | ဘာသာစကားအမျိုးမျိုးအကြား စာတန်းထိုးဘာသာပြန်ရာတွင် AI မော်ဒယ်မျိုးစုံကို အသုံးပြုနိုင်ပြီး ကုန်ကျစရိတ် ၉၉% အထိ သက်သာစေသည်

CrazyToken တွင် Claude၊ GPT၊ Gemini၊ Kimi၊ GLM၊ DeepSeek၊ Qwen နှင့် Grok အပါအဝင် လူသုံးများသော AI မော်ဒယ်များအတွက် API များ ရရှိနိုင်သည်။ စာတန်းထိုးဘာသာပြန်ခြင်း၊ အကြောင်းအရာနောက်ခံကို နားလည်ခြင်း၊ ဝေါဟာရများ တစ်သမတ်တည်းဖြစ်စေခြင်းနှင့် ဘာသာပြန်စာသားကို ပြန်လည်စစ်ဆေးပြင်ဆင်ခြင်းတို့အတွက် အသုံးပြုနိုင်သည်။ သင်ခန်းစာဗီဒီယို၊ အင်တာဗျူး၊ Podcast သို့မဟုတ် ဘာသာစကားမျိုးစုံပါဝင်သော အကြောင်းအရာများအတွက် လုပ်ငန်းနှင့် ဘာသာစကားလိုအပ်ချက်အလိုက် သင့်တော်သော မော်ဒယ်ကို ရွေးချယ်နိုင်သည်။

- 💰 **အနည်းဆုံး 0.05× ဖြင့် ကုန်ကျစရိတ်သက်သာစေခြင်း** — မော်ဒယ်အသုံးပြုခသည် မူရင်းတရားဝင်ဈေးနှုန်း၏ ၅% အထိသာ ရှိနိုင်ပြီး Token အလိုက် ကုန်ကျစရိတ်ကို စစ်ဆေးနိုင်သည်။ ဗီဒီယိုရှည်များနှင့် စာတန်းထိုးအစုလိုက် ဘာသာပြန်ရာတွင် ကုန်ကျစရိတ်လျှော့ချနိုင်သည်။
- ✨ **တရားဝင်မူရင်း API လမ်းကြောင်း** — မော်ဒယ်ရလဒ်ကို လျှော့ချခြင်း၊ မော်ဒယ်ရောနှောခြင်း သို့မဟုတ် Context အရှည်ကို ဖြတ်တောက်ခြင်း မပြုဘဲ အကြောင်းအရာနောက်ခံနှင့် ဝေါဟာရတစ်သမတ်တည်းဖြစ်စေရန် အထောက်အကူပြုသည်။
- ⚡ **တည်ငြိမ်မြန်ဆန်ပြီး တစ်ပြိုင်နက်လုပ်ဆောင်နိုင်မှုမြင့်ခြင်း** — စာတန်းထိုးအစုလိုက် ဘာသာပြန်ခြင်းနှင့် အလုပ်များစွာကို တစ်ပြိုင်နက်လုပ်ဆောင်ရာတွင် စောင့်ဆိုင်းချိန် လျှော့ချနိုင်သည်။
- 🎁 **အသုံးပြုသူအသစ်အတွက် $20 စမ်းသပ်ခွင့်** — [သီးသန့်လင့်ခ်](https://www.aiyoyoo.com/register?aff=YWL9FL2XFPKM) မှ စာရင်းသွင်းပါက **$20 စမ်းသပ်ခွင့်** ရရှိနိုင်သည်။ ငွေဖြည့်သွင်းမှုအပိုဆုနှင့် **တစ်ဦးချင်း အဝေးမှတစ်ဆင့် တပ်ဆင်ပြင်ဆင်ပေးသည့် ဝန်ဆောင်မှု** လည်း ရှိသည်။

## SmartSub ဆိုတာဘာလဲ

SmartSub သည် Open-source ဗီဒီယို/အသံ စာတန်းထိုးနှင့် အသံသွင်းကိရိယာဖြစ်သည်။ **အသံမှစာသားပြောင်းခြင်း → စာတန်းထိုးဘာသာပြန်ခြင်း → စစ်ဆေးပြင်ဆင်ခြင်း → TTS အသံထုတ်လုပ်ခြင်း → ဗီဒီယိုထဲ စာတန်းထိုးထည့်သွင်းခြင်း** ဟူသော လုပ်ငန်းစဉ်တစ်ခုလုံးကို Desktop App တစ်ခုတည်းတွင် အသုံးပြုနိုင်သည်။ အွန်လိုင်းဗီဒီယိုဒေါင်းလုဒ်လုပ်သည့် လုပ်ဆောင်ချက်လည်း ပါဝင်ပြီး Bilibili / YouTube စသည့် လင့်ခ်များကို ထည့်သွင်းရုံဖြင့် ဗီဒီယိုရယူနိုင်သည်။ စာသားပြောင်းခြင်းကို whisper.cpp၊ sherpa-onnx စသည့် Local Model များဖြင့် လုပ်ဆောင်သောကြောင့် ဖိုင်များသည် သင့်ကွန်ပျူတာအတွင်းမှ မထွက်ပါ။ အစုလိုက်လုပ်ဆောင်နိုင်ပြီး NVIDIA / AMD / Intel / Apple Silicon Hardware Acceleration ကို ပံ့ပိုးကာ Windows၊ macOS နှင့် Linux တို့တွင် အသုံးပြုနိုင်သည်။

SmartSub တွင် ခေတ်မီ AI အကူအညီပေးစနစ်နှင့် Agentic Automation လုပ်ဆောင်ချက်များကို နက်နက်ရှိုင်းရှိုင်း ပေါင်းစပ်ထားသည်။

- **AI ဖန်တီးရေးအကူအညီပေးစနစ် (In-App Copilot)** — Shortcut ဖြင့် အချိန်မရွေး ဖွင့်နိုင်ပြီး လက်ရှိလုပ်ဆောင်နေသော Workspace အခြေအနေကို နားလည်နိုင်သည်။ Screenshot ကို AI ဖြင့် စစ်ဆေးခြင်း၊ စာတန်းထိုးကို ချက်ချင်းပြင်ဆင်ခြင်းနှင့် သဘာဝဘာသာစကားဖြင့် Tool များကို အလိုအလျောက်ခိုင်းစေခြင်းတို့ ပြုလုပ်နိုင်သည်။
- **MCP Protocol နှင့် CLI Automation** — Model Context Protocol ကို ပံ့ပိုးပြီး Standard Tool 111 ခုနှင့် သက်ဆိုင်ရာ CLI Command များ ပါဝင်သည်။ Electron/Node Runtime ကို App ထဲတွင် ထည့်သွင်းထားသဖြင့် Node.js ကို သီးခြားတပ်ဆင်ရန် မလိုပါ။ Cursor၊ Claude Code၊ Codex နှင့် အခြား AI Agent များမှလည်း ချိတ်ဆက်အသုံးပြုနိုင်သည်။

**လုပ်ငန်းစဉ်တစ်ခုလုံးကို အခမဲ့အသုံးပြုနိုင်သည်။** Local Model ဖြင့် စာသားပြောင်းခြင်း၊ အခမဲ့ဘာသာပြန်ဝန်ဆောင်မှု၊ Local TTS အသံထုတ်လုပ်ခြင်း (အသံပုံတူကူးခြင်းအပါအဝင်) နှင့် Local ffmpeg ဖြင့် စာတန်းထိုးထည့်သွင်းခြင်းတို့ကို API Key မလိုဘဲ အသုံးပြုနိုင်သည်။ Local လုပ်ဆောင်မှုများတွင် အသုံးပြုခွင့်ကန့်သတ်ချက်လည်း မရှိပါ။ လိုအပ်ပါက ဘာသာပြန်ဝန်ဆောင်မှု ၂၀ ခု၊ Cloud ASR ဝန်ဆောင်မှုပေးသူ ၉ ခုနှင့် Cloud TTS ဝန်ဆောင်မှုအမျိုးအစား ၆ မျိုးကို ထပ်မံချိတ်ဆက်နိုင်သည်။

## ဘာတွေလုပ်ဆောင်နိုင်သလဲ

| သင်လုပ်ချင်သည့်အရာ | SmartSub က ကူညီပေးပုံ |
| --- | --- |
| သဘာဝဘာသာစကားဖြင့် စာတန်းထိုးပြင်ဆင်ခြင်းနှင့် ပြဿနာရှာဖွေခြင်း | AI Assistant ကို ဖွင့်ပြီး လက်ရှိ Workspace အခြေအနေကို သိရှိစေကာ စာသားပြင်ဆင်ခြင်း၊ ပိုမိုသဘာဝကျအောင် ပြောင်းခြင်း သို့မဟုတ် လုပ်ငန်းတာဝန်များ ခိုင်းစေနိုင်သည် |
| Cursor / Claude / Script ဖြင့် Audio/Video လုပ်ငန်းစဉ်ကို အလိုအလျောက်လုပ်ဆောင်ခြင်း | MCP Tool 111 ခုနှင့် CLI Command များဖြင့် AI Agent သို့မဟုတ် Terminal Script မှ စာသားပြောင်းခြင်း၊ ဘာသာပြန်ခြင်း၊ အသံထုတ်လုပ်ခြင်းနှင့် ဗီဒီယိုပေါင်းစပ်ခြင်းတို့ကို အလိုအလျောက်လုပ်ဆောင်နိုင်သည် |
| စာတန်းထိုးမပါသော နိုင်ငံခြားဗီဒီယိုနှင့် သင်ခန်းစာများ ကြည့်ရှုခြင်း | ဗီဒီယိုထည့်သွင်းပြီး Local ဖြင့် စာသားပြောင်း၊ ဘာသာပြန်ကာ ဘာသာစကားနှစ်မျိုးပါ စာတန်းထိုးရယူနိုင်သည် |
| Bilibili / YouTube ဗီဒီယိုများတွင် စာတန်းထိုးထည့်ခြင်း | လင့်ခ်ထည့်လိုက်ရုံဖြင့် App ထဲတွင် ဒေါင်းလုဒ်လုပ်ပြီး မူရင်းစာတန်းထိုးရှိပါက အလိုအလျောက်တွဲပေးနိုင်သည် |
| ဗီဒီယိုကို ဘာသာစကားအမျိုးမျိုးဖြင့် ထုတ်လုပ်ခြင်း | စာတန်းထိုးကို ဘာသာပြန်ပြီး TTS ဖြင့် အသံအသစ်ထုတ်လုပ်ကာ ဗီဒီယိုတွင် ထည့်သွင်းနိုင်သည် |
| ကိုယ်ပိုင်အသံဖြင့် ဗီဒီယိုကို အသံသွင်းခြင်း | ကိုးကားအသံတိုတစ်ခု မှတ်တမ်းတင်ပြီး အသံပုံတူကူးကာ ဗီဒီယိုတစ်ခုလုံးအတွက် အသုံးပြုနိုင်သည် |
| Podcast၊ သင်ခန်းစာနှင့် အစည်းအဝေးအသံဖိုင်များ စီမံခြင်း | SRT စာတန်းထိုးဖိုင်များအဖြစ် အစုလိုက်ပြောင်းလဲပြီး တည်းဖြတ်ခြင်း၊ ရှာဖွေခြင်း သို့မဟုတ် သိမ်းဆည်းခြင်း ပြုလုပ်နိုင်သည် |
| ဗီဒီယိုတွင် စာတန်းထိုးအမြဲတမ်းထည့်သွင်းခြင်း | စာကြောင်းတစ်ကြောင်းချင်း စစ်ဆေးပြီး Hard Subtitle သို့မဟုတ် Soft Subtitle အဖြစ် ထုတ်လုပ်နိုင်သည် |

## လုပ်ဆောင်ချက်များ

အွန်လိုင်းဗီဒီယို **ဒေါင်းလုဒ်လုပ်ခြင်း** / Local Media → **စာသားပြောင်းခြင်း** → **ဘာသာပြန်ခြင်း** → **စစ်ဆေးပြင်ဆင်ခြင်း** → **အသံထုတ်လုပ်ခြင်း** → **ပေါင်းစပ်ထုတ်ယူခြင်း**။ အဆင့်တစ်ခုချင်းစီကို သီးခြားအသုံးပြုနိုင်သလို လုပ်ငန်းစဉ်တစ်ခုအဖြစ် ချိတ်ဆက်ပြီး အစုလိုက်လုပ်ဆောင်နိုင်သည်။ **AI ဖန်တီးရေးအကူအညီပေးစနစ်** ဖြင့် စကားပြောညွှန်ကြားနိုင်သလို **MCP / CLI** မှတစ်ဆင့် ပြင်ပ AI Agent များကိုလည်း အလိုအလျောက်လုပ်ဆောင်စေနိုင်သည်။

### 🌟 AI ဖန်တီးရေးအကူအညီပေးစနစ် (In-App Copilot)

- **အချိန်မရွေးဖွင့်ပြီး အပြန်အလှန်ဆွေးနွေးနိုင်ခြင်း** — အပေါ်ဘက် Toolbar မှ ဖွင့်နိုင်သလို `⌘J` (macOS) / `Ctrl+J` (Windows၊ Linux) ကို နှိပ်၍ ညာဘက် Assistant Panel ကို ဖွင့်နိုင်သည်။ Panel အကျယ်ကို ပြင်ဆင်နိုင်ပြီး စကားပြောမှတ်တမ်းများကို Local တွင် အလိုအလျောက်သိမ်းဆည်းသည်။
- **Workspace အခြေအနေကို နားလည်နိုင်ခြင်း** — လက်ရှိဗီဒီယိုဖွင့်နေသည့်အချိန်၊ ရွေးထားသော စာတန်းထိုးစာကြောင်း၊ အနီးအနားစာကြောင်းများ၊ Task အခြေအနေနှင့် မကြာသေးမီက Error Log များကို အလိုအလျောက်သိရှိနိုင်သည်။
- **Agentic Tool Calling** — အလိုအလျောက်လုပ်ဆောင်ရေး Tool 111 ခုကို အသုံးပြုနိုင်သည်။ မေးခွန်းဖြေဆိုရုံသာမက သဘာဝဘာသာစကားဖြင့် ညွှန်ကြားပါက ဗီဒီယိုစာသားပြောင်းခြင်း၊ ဘာသာပြန်ခြင်း၊ အသံထုတ်လုပ်ခြင်း၊ Model များစစ်ဆေးခြင်းနှင့် Error ရှာဖွေခြင်းတို့ကို လုပ်ဆောင်ပေးနိုင်သည်။
- **မူရင်းကို မပျက်စီးစေသော လုံခြုံသည့် စာသားပြင်ဆင်မှု** — “ဒီစာကြောင်းကို ပိုသဘာဝကျအောင် ပြင်ပေးပါ”၊ “ဒီဝေါဟာရကို ရှင်းပြပါ”၊ “အသံထွက်တူ စာလုံးမှားကို ပြင်ပေးပါ” ဟု ပြောနိုင်သည်။ ပြင်ဆင်ချက်များကို Editor တွင် ချက်ချင်းမြင်ရပြီး Undo/Redo ပြုလုပ်နိုင်သည်။ “Save” ဟု မညွှန်ကြားမချင်း မူရင်းဖိုင်ထဲသို့ မသိမ်းပါ။
- **Screenshot ဖြင့် အမြင်အာရုံဆိုင်ရာ ပြဿနာရှာဖွေခြင်း** — Task မအောင်မြင်ခြင်း သို့မဟုတ် Setting မသိခြင်းဖြစ်ပါက Camera Icon ကိုနှိပ်၍ လက်ရှိ Workspace ကို ဖမ်းယူကာ Vision Model ဖြင့် Error Dialog၊ Toast Message နှင့် Control အခြေအနေများကို စစ်ဆေးနိုင်သည်။
- **ဖိုင်နှင့် Media များဖြင့် စကားပြောခြင်း (File Chat)** — Audio/Video (MP4၊ MKV၊ MOV၊ MP3၊ WAV၊ FLAC စသည်)၊ Subtitle (SRT၊ VTT၊ ASS၊ LRC)၊ စာသားမူကြမ်း (TXT၊ MD) နှင့် ပုံများကို Chat ထဲသို့ ဆွဲထည့်နိုင်သည်။ Audio/Video ဖိုင်များကို Cloud သို့ မတင်ဘဲ Local Path ကိုသာ အတွင်းပိုင်း Tool များသို့ ပေးပို့လုပ်ဆောင်သည်။
- **လူသုံးများသော AI Model များကို ချိတ်ဆက်နိုင်ခြင်း** — DeepSeek၊ Qwen၊ Gemini၊ SiliconFlow၊ DeerAPI နှင့် OpenAI-compatible API များကို Streaming Reply နှင့် သီးခြား System Prompt များဖြင့် အသုံးပြုနိုင်သည်။ [AI Assistant အသုံးပြုနည်း](docs/docs/features/ai-assistant.md) ကို ကြည့်ပါ။

### ⚡ MCP Protocol နှင့် CLI အလိုအလျောက်လုပ်ဆောင်မှု (Agentic Automation)

- **MCP Tool 111 ခုနှင့် သက်ဆိုင်ရာ CLI Command များ** — ဗီဒီယိုဒေါင်းလုဒ်၊ စာသားပြောင်းခြင်း၊ ဘာသာပြန်ခြင်း၊ စာတန်းထိုးပြင်ဆင်ခြင်း၊ TTS အသံထုတ်လုပ်ခြင်း၊ Audio/Video ပေါင်းစပ်ခြင်း၊ Format ပြောင်းခြင်း၊ အသံထုတ်ယူခြင်းနှင့် Model/Service Provider စီမံခြင်းတို့ကို လွှမ်းခြုံထားသည်။ [လုပ်ဆောင်ချက်ကိုးကားလမ်းညွှန်](docs/docs/guides/automation-reference.md) ကို ကြည့်ပါ။
- **Node.js ကို သီးခြားတပ်ဆင်ရန်မလိုခြင်း (Zero-Config)** — App ထဲတွင်ပါဝင်သော Electron/Node Runtime ကို အသုံးပြုသောကြောင့် အသုံးပြုသူနှင့် AI Client များအနေဖြင့် Node.js ကို ထပ်မံတပ်ဆင်ရန် မလိုပါ။
- **AI Client များကို တစ်ချက်နှိပ်၍ ချိတ်ဆက်ခြင်း** — App ၏ “Settings → Connect AI Tools (MCP)” မှ Cursor သို့ တစ်ချက်နှိပ်တင်သွင်းခြင်း၊ Codex TOML Configuration ကူးယူခြင်း၊ Claude Code တွင် မှတ်ပုံတင်ခြင်းနှင့် အခြား Client များအတွက် JSON Configuration ကူးယူခြင်းတို့ ပြုလုပ်နိုင်သည်။
- **နောက်ခံတွင် Window မပါဘဲ အလုပ်လုပ်ခြင်း (Headless Daemon)** — AI Tool သို့မဟုတ် CLI ကို ပထမဆုံးအသုံးပြုသည့်အခါ နောက်ခံ Process ကို အလိုအလျောက်စတင်ပြီး Desktop App နှင့် Task အခြေအနေ၊ Configuration နှင့် Model များကို မျှဝေအသုံးပြုသည်။ အသုံးမပြုတော့ပါက အလိုအလျောက်ရပ်တန့်သည်။
- **CLI နှင့် Script အစုလိုက်လုပ်ဆောင်မှု** — `smartsub` Command ဖြင့် `pipeline.run`၊ JSON / stdin ဖြင့် Parameter ပေးပို့ခြင်း၊ Task အခြေအနေစစ်ဆေးခြင်းနှင့် ထပ်နေသော Request များကို ကာကွယ်ခြင်းတို့ ပြုလုပ်နိုင်သည်။ [MCP နှင့် CLI ချိတ်ဆက်နည်း](docs/docs/guides/automation.md) ကို ကြည့်ပါ။

### အွန်လိုင်းဗီဒီယို ဒေါင်းလုဒ်လုပ်ခြင်း

- YouTube၊ Bilibili နှင့် အခြား Platform များမှ ဗီဒီယိုများကို Link ထည့်ရုံဖြင့် ဒေါင်းလုဒ်လုပ်နိုင်သည်။ တစ်ကြောင်းလျှင် Link တစ်ခုစီဖြင့် အစုလိုက်ဒေါင်းလုဒ်လုပ်နိုင်ပြီး ရောနှောထားသောစာသားထဲမှ Link များကိုလည်း အလိုအလျောက်ရှာဖွေနိုင်သည်။
- yt-dlp (YouTube နှင့် Website 1800 ကျော်) နှင့် lux (Bilibili၊ Douyin၊ Xiaohongshu စသည့် Platform များ) Engine နှစ်မျိုးပါဝင်ပြီး Platform အလိုက် အလိုအလျောက်ရွေးချယ်ကာ App ထဲတွင် တစ်ချက်နှိပ်၍ တပ်ဆင်/အပ်ဒိတ်လုပ်နိုင်သည်။
- Platform ၏ မူရင်းစာတန်းထိုးများ (အလိုအလျောက်ဖန်တီးထားသော စာတန်းထိုးများအပါအဝင်) ကို ဒေါင်းလုဒ်လုပ်ပြီး Task Wizard တွင် အလိုအလျောက်တွဲပေးနိုင်သည်။ မူရင်းစာတန်းထိုးရှိပါက ထပ်မံစာသားပြောင်းရန် မလိုပါ။
- Website Cookie များကို Browser မှ တစ်ချက်နှိပ်ထုတ်ယူခြင်း၊ cookies.txt သို့မဟုတ် ကိုယ်တိုင်ကူးထည့်ခြင်းဖြင့် Login လိုအပ်သော Resolution မြင့်ဗီဒီယိုနှင့် Member Content များကို ရယူနိုင်သည်။ Cookie များကို Local တွင်သာ သိမ်းဆည်းသည်။
- သိမ်းဆည်းမည့် Folder၊ Video Quality နှင့် တစ်ပြိုင်နက်ဒေါင်းလုဒ်လုပ်မည့် အရေအတွက်တို့ကို သတ်မှတ်နိုင်ပြီး ဒေါင်းလုဒ်ပြီးသည်နှင့် စာသားပြောင်း/ဘာသာပြန်လုပ်ငန်းစဉ်သို့ တစ်ချက်နှိပ်၍ ဆက်သွားနိုင်သည်။

### စာတန်းထိုးဖန်တီးခြင်း (Transcription)

- Video/Audio Format အမျိုးမျိုးမှ စာတန်းထိုးများကို အစုလိုက်ဖန်တီးနိုင်ပြီး တစ်ပြိုင်နက်လုပ်ဆောင်မည့် Task အရေအတွက်ကို သတ်မှတ်နိုင်သည်။
- Engine အမျိုးအစား ၈ မျိုးကို Task တစ်ခုချင်းစီအလိုက် ရွေးချယ်နိုင်သည် — `whisper.cpp`၊ `faster-whisper`၊ `FunASR`၊ `Qwen3-ASR`၊ `FireRedASR`၊ `NVIDIA Parakeet`၊ Local `Whisper CLI` နှင့် GPU မလိုသော Cloud ASR (ဝန်ဆောင်မှုပေးသူ ၉ ခု)။
- Local Engine များကို အင်တာနက်မလိုဘဲ အသုံးပြုနိုင်ပြီး ဖိုင်များကို Cloud သို့ မတင်ပါ။ တရုတ်ဘာသာအတွက် FunASR / FireRedASR၊ အင်္ဂလိပ်၊ ဥရောပဘာသာစကားများနှင့် ဂျပန်ဘာသာအတွက် သက်ဆိုင်ရာ Parakeet Model များကို ရွေးချယ်နိုင်သည်။
- AI ဖြင့် စာတန်းထိုးပြန်လည်ပြင်ဆင်ခြင်း (ရွေးချယ်နိုင်သည်) — LLM ဖြင့် အဓိပ္ပာယ်အလိုက် စာကြောင်းခွဲခြင်းနှင့် အစုလိုက်ပြင်ဆင်ခြင်းတို့ ပြုလုပ်နိုင်သည်။ အချိန်မှတ်တမ်းကို စကားလုံးအဆင့်အထိ တိကျစွာ ထိန်းသိမ်းပြီး အသံထွက်တူ စာလုံးမှားများ၊ ဖြည့်စွက်စကားလုံးများနှင့် ပုဒ်ဖြတ်ပုဒ်ရပ်များကို ပြင်ဆင်ပေးသည်။ ပုံမှန်အားဖြင့် AI Translation Provider ကို အသုံးပြုပြီး (Local Ollama ဖြင့် အခမဲ့) မအောင်မြင်ပါက Rule-based နည်းလမ်းသို့ အလိုအလျောက်ပြန်ပြောင်းသည်။
- တရုတ်စာ ရိုးရှင်း/ရိုးရာပုံစံပြောင်းခြင်း၊ Subtitle File အမည်ကို စိတ်ကြိုက်သတ်မှတ်ခြင်းနှင့် တရုတ်စာတန်းထိုး ပုဒ်ဖြတ်ပုဒ်ရပ်များကို ဖယ်ရှားခြင်းတို့ ပြုလုပ်နိုင်သည်။

### စာတန်းထိုးဘာသာပြန်ခြင်း

- ဘာသာပြန်ဝန်ဆောင်မှု ၂၀ ခု — အခမဲ့ Youdao / Bing / Google Interface များ (အလိုအလျောက်အစားထိုးအသုံးပြုခြင်းနှင့် Request Rate ထိန်းချုပ်ခြင်းပါဝင်သည်)၊ Baidu၊ Aliyun၊ Tencent၊ iFlytek၊ Volcano Engine၊ Doubao၊ NiuTrans၊ DeepLX၊ Azure၊ Google နှင့် Ollama (Local Model)၊ DeepSeek၊ Gemini၊ Qwen၊ SiliconFlow၊ Azure OpenAI၊ [DeerAPI](https://api.deerapi.com/register?aff=QvHM) စသည့် AI ဝန်ဆောင်မှုများ။
- OpenAI ပုံစံ API မည်သည့်ဝန်ဆောင်မှုနှင့်မဆို ကိုက်ညီပြီး ကိုယ်ပိုင် Endpoint ကို ချိတ်ဆက်နိုင်သည်။
- ဘာသာပြန်စာသားသီးသန့် သို့မဟုတ် “မူရင်းစာသား + ဘာသာပြန်စာသား” နှစ်မျိုးတွဲ Subtitle အဖြစ် ထုတ်ယူနိုင်သည်။
- AI Service တစ်ခုချင်းစီအတွက် Request Parameter များကို Interface မှ တိုက်ရိုက်သတ်မှတ်နိုင်ပြီး Code ပြင်ရန်မလိုဘဲ Export / Import ပြုလုပ်နိုင်သည်။

### စာတန်းထိုးစစ်ဆေးပြင်ဆင်ခြင်း

- Video နှင့်တွဲ၍ စာကြောင်းတစ်ကြောင်းချင်း စစ်ဆေးပြင်ဆင်နိုင်သော Editor ပါဝင်ပြီး သက်ဆိုင်ရာအချိန်သို့ တိကျစွာ ရွှေ့နိုင်သည်။
- Undo / Redo ပြုလုပ်နိုင်ပြီး ဖျက်ထားသော စာကြောင်းတစ်ကြောင်းချင်းကို ပြန်လည်ရယူနိုင်သည်။
- AI ဖြင့် တစ်ချက်နှိပ်ပြင်ဆင်နိုင်သလို ညာဘက် AI Assistant ကို ဖွင့်၍ စကားပြောညွှန်ကြားကာ စာသားပြင်ဆင်ခြင်းနှင့် မေးမြန်းခြင်းတို့ ပြုလုပ်နိုင်သည်။

### 🎙️ AI Assistant နှင့် Automation ပူးပေါင်းလုပ်ဆောင်မှု

ပုံမှန် Interface မှ လုပ်ဆောင်နိုင်သည့်အပြင် SmartSub တွင် AI Copilot နှင့် Developer များအတွက် အလိုအလျောက်လုပ်ဆောင်ရေးစနစ်များ ပါဝင်သည်။

- **အချိန်နှင့်တစ်ပြေးညီ ပူးပေါင်းလုပ်ဆောင်မှု (Copilot)** — စာတန်းထိုးစစ်ဆေးခြင်း၊ အသံထုတ်လုပ်ခြင်း သို့မဟုတ် Task စာမျက်နှာတွင် ပြဿနာတွေ့ပါက AI Assistant ကို ဖွင့်ပြီး စာသားပြင်ဆင်ခြင်း၊ Task မအောင်မြင်ရသည့်အကြောင်းရင်း ရှာဖွေခြင်းနှင့် Audio/Video ဝေါဟာရများ မေးမြန်းခြင်းတို့ ပြုလုပ်နိုင်သည်။
- **Screenshot ဖြင့် ပြဿနာရှာဖွေခြင်း (Multimodal Vision)** — Setting မသိခြင်း သို့မဟုတ် Error ရှုပ်ထွေးနေခြင်းဖြစ်ပါက Camera Icon ကိုနှိပ်၍ Workspace ကို ဖမ်းယူပေးပို့နိုင်ပြီး AI က ပုံကိုကြည့်ကာ ပြဿနာကို ရှာဖွေကူညီပေးသည်။
- **ပြင်ပ AI နှင့် Script များမှ အလိုအလျောက်ခိုင်းစေခြင်း (MCP & CLI)** — UI ကို ဖွင့်ထားရန်မလိုဘဲ Cursor၊ Claude Code နှင့် Terminal Script များမှ MCP Protocol သို့မဟုတ် `smartsub` CLI ဖြင့် ဗီဒီယိုလုပ်ငန်းစဉ်များကို အစုလိုက်လုပ်ဆောင်နိုင်သည်။

### TTS အသံထုတ်လုပ်ခြင်းနှင့် အသံပုံတူကူးခြင်း

- သီးခြား Dubbing Workbench ပါဝင်သည်။ Subtitle တစ်ဖိုင်နှင့် ရွေးချယ်နိုင်သော Video ကို ထည့်သွင်းပြီး စာကြောင်းတစ်ကြောင်းချင်း အသံထုတ်ကာ Timeline နှင့် အလိုအလျောက်ညှိပေးသည်။
- Local Engine များကို အင်တာနက်မလိုဘဲ အခမဲ့အသုံးပြုနိုင်သည် — Kokoro ဘာသာစကားမျိုးစုံ အသံ 103 မျိုး၊ VITS တရုတ်ဘာသာ အသံ 174 မျိုး။
- အသံပုံတူကူးခြင်း — Local ZipVoice Zero-shot Cloning (ကိုးကားအသံတစ်ခုဖြင့် အသုံးပြုနိုင်သည်)၊ Volcengine Voice Cloning 2.0 နှင့် ElevenLabs Instant Cloning တို့ကိုလည်း ပံ့ပိုးသည်။
- Cloud Service များ — Edge TTS အခမဲ့အဆင့် (Recap App နှင့် Voice ID တူညီသော မြန်မာအသံ `my-MM-ThihaNeural` ပါဝင်သည်)၊ OpenAI-compatible Endpoint (OpenAI / SiliconFlow စသည်)၊ Azure Speech၊ Volcengine Doubao၊ ElevenLabs နှင့် Xiaomi MiMo။
- Local အသံထုတ်လုပ်မှုသည် CPU/RAM အရင်းအမြစ်ကို အလိုက်သင့် စီမံအသုံးပြုသည်။ Operating System နှင့် FFmpeg အတွက် အရင်းအမြစ်ကို ချန်ထားပေးသည်။ လက်ရှိပါဝင်သော Sherpa TTS Runtime တွင် CUDA ပံ့ပိုးမှုရှိကြောင်း အတည်မပြုရသေးသောကြောင့် GPU ကို အတင်းအကျပ်ဖွင့်မသုံးပါ။
- Timeline ညှိခြင်း — အသံထုတ်မီ လိုအပ်သောကြာချိန်အလိုက် စကားပြောနှုန်းကို ကြိုတင်ထိန်းညှိပြီး အသံထုတ်ပြီးနောက် အမှန်တကယ်ကြာချိန်ကို ပြန်စစ်သည်။ လိုအပ်ပါက အနီးရှိ အသံတိတ်အချိန်များကို အသုံးပြုသည်။ သတ်မှတ်နှုန်းထက် ကျော်လွန်သော စာကြောင်းများကို လူကိုယ်တိုင်စစ်ဆေးရန် စာရင်းထဲသို့ ထည့်ပေးသည်။
- စာကြောင်းတစ်ကြောင်းချင်း နားထောင်ခြင်း၊ Voice ပြောင်းခြင်းနှင့် ပြန်လည်အသံထုတ်ခြင်းတို့ ပြုလုပ်နိုင်သည်။ နောက်ခံအသံကို ပိတ်နိုင်သလို Dubbing အသံအောက်တွင် တိုးလျှော့ထားနိုင်သည် (ducking)။
- အသံဖိုင်သီးသန့် (wav / mp3) ထုတ်ယူခြင်း၊ မူရင်း Audio Track အစားထိုးခြင်း၊ Video နှင့် အသံပေါင်းစပ်ခြင်း သို့မဟုတ် MKV Dual Audio Track အဖြစ် ထုတ်ယူခြင်းတို့ ပြုလုပ်နိုင်သည်။ ညှိပြီးသား Subtitle ကိုလည်း တစ်ပါတည်း ထုတ်ယူနိုင်သည်။

### ဗီဒီယိုပေါင်းစပ်ခြင်း (စာတန်းထိုးထည့်သွင်းခြင်း)

- **Hard Subtitle** — စာတန်းထိုးကို ဗီဒီယိုပုံရိပ်ထဲ အမြဲတမ်းထည့်သွင်းပေးသဖြင့် Player မည်သည့်အမျိုးအစားတွင်မဆို မြင်နိုင်သည်။
- **Soft Subtitle** — Stream Copy နည်းလမ်းဖြင့် ပြောင်းလဲနိုင်သော Subtitle Track ကို အရည်အသွေးမလျော့ဘဲ ထည့်သွင်းနိုင်သည်။
- Font၊ စာလုံးအရွယ်အစား၊ အရောင်၊ အနားသတ်၊ အရိပ်၊ နေရာချထားမှုနှင့် Preset Style များကို သတ်မှတ်နိုင်သည်။
- ပြင်ဆင်သည့်အတိုင်း တိုက်ရိုက်ကြည့်ရှုနိုင်သည်။

### ကိုယ်ရေးလုံခြုံမှုနှင့် Hardware Acceleration

- Local တွင်လုပ်ဆောင်သောကြောင့် ဖိုင်များသည် သင့်ကွန်ပျူတာအတွင်းမှ မထွက်ပါ။ Cloud Service များသည် ရွေးချယ်အသုံးပြုရပြီး ပထမဆုံးအသုံးပြုချိန်တွင် Privacy အတည်ပြုချက် တောင်းခံသည်။
- GPU Acceleration — NVIDIA CUDA၊ AMD / Intel Vulkan၊ Apple Core ML / Metal။
- Acceleration Pack များကို App ထဲတွင် ဒေါင်းလုဒ်လုပ်နိုင်ပြီး CUDA Toolkit ကို ကိုယ်တိုင်တပ်ဆင်ရန် မလိုပါ။ Load မအောင်မြင်ပါက CPU သို့ အလိုအလျောက်ပြန်ပြောင်းသည်။

## Interface နမူနာများ

| ဗီဒီယိုပေါင်းစပ်ခြင်း (စာတန်းထိုးထည့်သွင်းခြင်း) | စာတန်းထိုးစစ်ဆေးပြင်ဆင်ခြင်း |
| --- | --- |
| ![merge](./resources/preview/merge.png) | ![proofread](./resources/preview/profread.png) |

## လုပ်ငန်းစဉ်တစ်ခုလုံးကို အခမဲ့အသုံးပြုခြင်း

ကုန်ကျစရိတ်မသုံးလိုသူများအတွက် အောက်ပါလုပ်ငန်းစဉ်ကို ငွေမကုန်ဘဲ၊ ဝန်ဆောင်မှုတစ်ခုခုတွင် စာရင်းသွင်းရန်မလိုဘဲ အသုံးပြုနိုင်သည်။

| အဆင့် | အခမဲ့အသုံးပြုနိုင်သည့်နည်းလမ်း | ရှင်းလင်းချက် |
| --- | --- | --- |
| ဗီဒီယိုဒေါင်းလုဒ် | yt-dlp / lux Open-source Engine | App ထဲတွင် တစ်ချက်နှိပ်တပ်ဆင်ပြီး အခမဲ့အသုံးပြုနိုင်သည် |
| အသံမှစာသားပြောင်းခြင်း | whisper.cpp / faster-whisper / FunASR / Qwen3-ASR / FireRedASR / Parakeet Local Model | Model ကို တစ်ကြိမ်ဒေါင်းလုဒ်လုပ်ပြီး Offline အသုံးပြုနိုင်သည် |
| ဘာသာပြန်ခြင်း | အခမဲ့ Youdao / Bing / Google Interface များ၊ Ollama Local Model၊ DeepLX | စတင်အသုံးပြုရန် Configuration အနည်းငယ်သာ လိုအပ်သည် |
| TTS အသံထုတ်လုပ်ခြင်း | Local Kokoro / VITS / ZipVoice အသံပုံတူကူးခြင်း၊ Edge TTS အခမဲ့အဆင့် | Local Model များဖြင့် Offline အသံထုတ်နိုင်ပြီး အသုံးပြုခွင့်ကန့်သတ်ချက်မရှိပါ |
| စာတန်းထိုးထည့်သွင်းခြင်း | App တွင်ပါဝင်သော ffmpeg | Local တွင်ပင် ပေါင်းစပ်ထုတ်လုပ်နိုင်သည် |

အခပေး Cloud Service များ (OpenAI၊ ElevenLabs၊ Volcengine၊ Tencent Cloud စသည်) သည် ရွေးချယ်အသုံးပြုနိုင်သော အဆင့်မြှင့်ဝန်ဆောင်မှုများသာ ဖြစ်သည်။

## ဒေါင်းလုဒ်နှင့် တပ်ဆင်ခြင်း

သင့်ကွန်ပျူတာ၏ Operating System နှင့် Chip အမျိုးအစားအလိုက် Installation Package ကို ရွေးချယ်ပါ။ GPU Acceleration Pack ကို ဒေါင်းလုဒ်လုပ်ချိန်တွင် ရွေးရန်မလိုဘဲ တပ်ဆင်ပြီးနောက် App ထဲမှ လိုအပ်သလို ဒေါင်းလုဒ်လုပ်နိုင်သည်။

| စနစ် | Chip | Package | ရှင်းလင်းချက် |
| --- | --- | --- | --- |
| Windows | x64 | windows-x64 | NVIDIA အတွက် CUDA၊ AMD / Intel အတွက် Vulkan ကို App ထဲမှ ဒေါင်းလုဒ်လုပ်နိုင်သည် |
| macOS | Apple | mac-arm64 | Core ML / Metal Acceleration ကို အလိုအလျောက်အသုံးပြုသည် |
| macOS | Intel | mac-x64 | CPU သာအသုံးပြုနိုင်ပြီး GPU Acceleration မပံ့ပိုးပါ |
| Linux | x64 | linux-x64 | NVIDIA အတွက် CUDA၊ AMD / Intel အတွက် Vulkan ကို App ထဲမှ ဒေါင်းလုဒ်လုပ်နိုင်သည် |

ဒေါင်းလုဒ်ရယူရန် [GitHub Releases](https://github.com/buxuku/SmartSub/releases) သို့မဟုတ် [Quark Cloud Drive](https://pan.quark.cn/s/0b16479b40ca) ကို အသုံးပြုပါ။

macOS အသုံးပြုသူများအတွက် Homebrew ဖြင့် တပ်ဆင်ရန် အကြံပြုသည်။ Chip အမျိုးအစားကို အလိုအလျောက်ကိုက်ညီစွာ ရွေးချယ်ပေးသည်။

```bash
brew tap buxuku/tap          # ပထမတစ်ကြိမ်သာ လုပ်ဆောင်ရန်
brew install --cask smartsub # တပ်ဆင်ရန်
brew upgrade --cask smartsub # အပ်ဒိတ်လုပ်ရန်
```

### အဆင့် ၃ ဆင့်ဖြင့် စတင်အသုံးပြုခြင်း

1. App တပ်ဆင်ပြီးနောက် စတင်အသုံးပြုသူလမ်းညွှန်အတိုင်း Speech Model တစ်ခုကို ဒေါင်းလုဒ်လုပ်ပါ။ GPU မရှိပါက သို့မဟုတ် Model မဒေါင်းလုဒ်လိုပါက Cloud ASR ကို သတ်မှတ်အသုံးပြုနိုင်သည်။
2. Launchpad မှ Task ကို ရွေးချယ်ပြီး Audio/Video သို့မဟုတ် Subtitle File ကို ထည့်ပါ။ အွန်လိုင်းဗီဒီယိုအတွက် Link ကို ကူးထည့်၍ ဒေါင်းလုဒ်လုပ်နိုင်သည်။ ထို့နောက် မူရင်းဘာသာစကား၊ ရည်ရွယ်ထားသော ဘာသာစကားနှင့် အခြား Parameter များကို သတ်မှတ်ပါ။
3. လုပ်ဆောင်မှုကို စတင်ပါ။ ပြီးဆုံးပါက စာတန်းထိုးစစ်ဆေးခြင်း၊ အသံထုတ်လုပ်ခြင်း သို့မဟုတ် ဗီဒီယိုထဲ စာတန်းထိုးထည့်သွင်းခြင်းတို့ကို ဆက်လက်လုပ်ဆောင်နိုင်သည်။

## Code Signing Policy (ကုဒ်လက်မှတ်ထိုးခြင်းဆိုင်ရာ မူဝါဒ)

[SignPath.io](https://about.signpath.io/) မှ အခမဲ့ Code Signing ဝန်ဆောင်မှုကို ပေးထားပြီး Certificate ကို [SignPath Foundation](https://signpath.org/) မှ ပံ့ပိုးထားသည်။

- **လက်မှတ်ထိုးသည့်အတိုင်းအတာ** — Windows Installer (`SmartSub_Windows_<version>_x64.exe`) ကိုသာ လက်မှတ်ထိုးသည်။ GitHub Actions တွင် အလိုအလျောက်လုပ်ဆောင်ပြီး တရားဝင် Version တစ်ခုချင်းစီ မထုတ်ပြန်မီ လူကိုယ်တိုင် အတည်ပြုရသည်။ Certificate ထုတ်ပေးပြီးနောက် ပထမဆုံး Version မှစတင်၍ လက်မှတ်ထိုးမည်ဖြစ်ပြီး ယခင် Version များတွင် လက်မှတ်မပါဝင်ပါ။
- **အဖွဲ့၏ အခန်းကဏ္ဍများ**
  - Authors (Source Code ကို တိုက်ရိုက်ပြင်ဆင်ခွင့်ရှိသူများ) နှင့် Reviewers (ပြင်ပ Developer များ၏ Pull Request များကို စစ်ဆေးသူများ) — [@buxuku](https://github.com/buxuku)
  - Approvers (Release တစ်ခုချင်းစီအတွက် Signing ကို အတည်ပြုသူများ) — [@buxuku](https://github.com/buxuku)
- **Privacy Policy** — SmartSub သည် အသုံးပြုမှုဆိုင်ရာ Data များကို စုဆောင်းခြင်း၊ Upload လုပ်ခြင်း မပြုလုပ်သလို Analytics SDK လည်း မပါဝင်ပါ။ App စတင်ချိန်တွင် အင်တာနက်ချိတ်ဆက်မှုသည် Update စစ်ဆေးရန်အတွက်သာ ဖြစ်သည်။ အဓိကအားဖြင့် App Update စစ်ဆေးခြင်း (GitHub Releases ကို တောင်းဆိုပြီး Settings မှ “Check for updates on startup” ကို ပိတ်နိုင်သည်) နှင့် faster-whisper Runtime တပ်ဆင်ထားမှသာ တစ်နေ့တစ်ကြိမ် Runtime Update စစ်ဆေးခြင်း (GitHub ကို တောင်းဆိုပြီး အသိပေးရုံသာဖြစ်ကာ အလိုအလျောက်ဒေါင်းလုဒ်မလုပ်ပါ၊ အဆိုပါ Setting ဖြင့်လည်း မထိန်းချုပ်ပါ) တို့ဖြစ်သည်။ Model၊ Acceleration Pack၊ Video Download Engine နှင့် Online Video များကို ဒေါင်းလုဒ်လုပ်ခြင်း၊ Cloud Translation၊ Cloud ASR နှင့် Cloud TTS တို့သည် သက်ဆိုင်ရာ Feature ကို အသုံးပြုချိန်မှသာ အင်တာနက်ချိတ်ဆက်သည်။ ပေးပို့သည့်အကြောင်းအရာများသည် သင်ရွေးချယ်ထားသော Service များထံသို့သာ ရောက်ရှိပြီး ထို Service တစ်ခုချင်းစီ၏ Privacy Policy များနှင့် သက်ဆိုင်သည်။ Crash Diagnostic နှင့် Log များကို Local တွင်သာ သိမ်းဆည်းပြီး အလိုအလျောက် Upload မလုပ်ပါ။ [Privacy Policy](https://smartsub.linxiaodong.com/code-signing-policy#privacy-policy) ကို ကြည့်ပါ။

## အဆင့်မြင့်လမ်းညွှန်

<details>
<summary><b>စာသားပြောင်း Engine များကို နှိုင်းယှဉ်ရွေးချယ်ခြင်း</b></summary>

<br/>

Task တစ်ခုချင်းစီအလိုက် Engine ကို ပြောင်းလဲရွေးချယ်နိုင်သည်။ Runtime နှင့် Model များကို “Engines & Models” စာမျက်နှာတွင် စီမံနိုင်သည်။

| Engine | ရှင်းလင်းချက် | လုပ်ဆောင်ပုံ |
| --- | --- | --- |
| **whisper.cpp (ပါဝင်ပြီးသား)** | ပုံမှန် Engine ဖြစ်ပြီး ggml Quantized Model နှင့် GPU Acceleration ကို ပံ့ပိုးသည် | App ထဲတွင် ပါဝင်ပြီးသားဖြစ်၍ တပ်ဆင်စရာမလိုပါ |
| **faster-whisper** | CTranslate2 ကို အခြေခံထားပြီး ပိုမိုမြန်ဆန်သည်။ Model ကို HuggingFace မှ လိုအပ်သလို ဒေါင်းလုဒ်လုပ်သည် | သီးခြား Python Runtime ကို App ထဲမှ ဒေါင်းလုဒ်လုပ်သည် |
| **FunASR** | SenseVoice (တရုတ် / အင်္ဂလိပ် / ဂျပန် / ကိုရီးယား / ကန်တုံ) နှင့် Paraformer-zh ပါဝင်ပြီး တရုတ်ဘာသာအတွက် ကောင်းမွန်သည် | sherpa-onnx Native Library ပါဝင်သည် |
| **Qwen3-ASR** | Qwen Speech Recognition (qwen3-asr-0.6b / 1.7b) | sherpa-onnx Native Library ပါဝင်သည် |
| **FireRedASR** | FireRedASR-AED large (တရုတ်/အင်္ဂလိပ်)၊ တရုတ်ဘာသာအတွက် ကောင်းမွန်သည် | sherpa-onnx Native Library ပါဝင်သည် |
| **NVIDIA Parakeet** | English TDT v2၊ ဘာသာစကားမျိုးစုံ TDT v3 (ဥရောပဘာသာစကား ၂၅ မျိုး)၊ Japanese 0.6B CTC နှင့် ပုဒ်ဖြတ်ပုဒ်ရပ် ပံ့ပိုးမှု | sherpa-onnx Native Library ပါဝင်သည် |
| **Local Whisper CLI** | ကိုယ်တိုင်တပ်ဆင်ထားသော Whisper-compatible Command ကို ခေါ်ယူအသုံးပြုသည် | စနစ်ထဲတွင် တပ်ဆင်ထားသော Command ကို အသုံးပြုသည် |
| **Cloud ASR (Online)** | ဝန်ဆောင်မှုပေးသူ ၉ ခု၊ GPU မလိုဘဲ Provider မျိုးစုံနှင့် Instance မျိုးစုံ အသုံးပြုနိုင်သည် | Online Service ဖြစ်ပြီး Audio ကို သတ်မှတ်ထားသော Endpoint သို့ ပေးပို့သည် |

FunASR / Qwen3-ASR / FireRedASR / Parakeet တို့သည် App ထဲတွင်ပါဝင်သော sherpa-onnx Native Library ကို အသုံးပြုသဖြင့် ထပ်မံ Environment တပ်ဆင်ရန် မလိုပါ။ faster-whisper သည် App ထဲတွင် သီးခြား Runtime ကို ဒေါင်းလုဒ်လုပ်သည်။

</details>

<details>
<summary><b>Cloud ASR — ဝန်ဆောင်မှုပေးသူ ၉ ခုကို သတ်မှတ်အသုံးပြုခြင်း</b></summary>

<br/>

Cloud ASR ကို “Engines & Models” ဘယ်ဘက် Sidebar ရှိ “Cloud ASR” အုပ်စုတွင် သတ်မှတ်နိုင်သည်။ Provider တစ်ခုချင်းစီတွင် သီးခြားဝင်ပေါက်ရှိပြီး ရွေးချယ်ကာ Credential များဖြည့်သွင်းပြီး “Test connection” ဖြင့် စမ်းသပ်နိုင်သည်။ စာသားပြောင်းချိန်တွင် Audio ကို သင်သတ်မှတ်ထားသော Endpoint သို့ Upload လုပ်မည်ဖြစ်သည်။ ပထမဆုံးအသုံးပြုချိန်တွင် Privacy အတည်ပြုချက် ပေါ်လာမည်။ အရေးကြီးသော အကြောင်းအရာများကို မပေးပို့ရန်နှင့် ဝန်ဆောင်ခများကို သတိပြုရန် လိုအပ်သည်။

- **OpenAI-compatible** — `audio/transcriptions` Protocol (`whisper-1`၊ `gpt-4o-transcribe` စသည်)။ OpenAI / Groq / SiliconFlow Preset များကို Sidebar တွင် တိုက်ရိုက်ရွေးနိုင်သည်။ အခြား Compatible Endpoint များ (ကိုယ်ပိုင် Server၊ Proxy Service) ကို “Add custom” မှတစ်ဆင့် ထည့်နိုင်ပြီး အများအပြား ထည့်သွင်းနိုင်သည်။
- **ElevenLabs Scribe** — `scribe_v1` Model။
- **Deepgram** — `nova-2` / `nova-3` Model များ။
- **Volcengine Doubao** — Audio File Recognition အမြန်ဗားရှင်း (bigmodel)။ Doubao Speech Console ရှိ “API Key Management” မှ ထုတ်ပေးသော API Key ကို အသုံးပြုရမည်။ သက်ဆိုင်ရာ Model ကို ဦးစွာဖွင့်ထားရမည်။ Volcano Ark API Key နှင့် အစားထိုးအသုံးမပြုနိုင်ပါ။ အသုံးပြုသည့်ကြာချိန်အလိုက် ကုန်ကျစရိတ်တွက်ချက်သည်။
- **Tencent Cloud** — Audio File Recognition အမြန်ဗားရှင်း။ ASR Console မှ AppID / SecretId / SecretKey ကို အသုံးပြုရမည်။ ဦးစွာဖွင့်ထားရန်လိုပြီး တစ်လလျှင် အခမဲ့ ၅ နာရီ ရရှိသည်။ Recognition Language သည် Task ၏ မူရင်းဘာသာစကားအတိုင်း လိုက်ပြောင်းသည်။ Model ရွေးချယ်မှုတွင် standard သို့မဟုတ် large ကို ရွေးနိုင်သည်။ large သည် ပိုမိုတိကျသော်လည်း ကုန်ကျစရိတ်ပိုများပြီး အခမဲ့အသုံးပြုမှုတွင် တစ်ပြိုင်နက်လုပ်ဆောင်မှု ၅ ခုသာ ကန့်သတ်ထားသည်။
- **Alibaba Cloud** — Audio File Recognition အမြန်ဗားရှင်း။ RAM AccessKey ID / Secret နှင့် Intelligent Speech Interaction Console Project ၏ Appkey ကို အသုံးပြုရမည်။ Recognition Language ကို Project ၏ “Feature Configuration” တွင် သတ်မှတ်သည်။ Task ၏ မူရင်းဘာသာစကား Setting သည် Alibaba Cloud အပေါ် သက်ရောက်မှုမရှိပါ။ ပုံမှန် Mandarin Model သည် တရုတ်/အင်္ဂလိပ် ရောနှောစကားကိုလည်း သိရှိနိုင်သည်။ ဤဝန်ဆောင်မှုသည် **အခပေးအသုံးပြုမှုသာဖြစ်ပြီး အခမဲ့စမ်းသပ်ခွင့်မရှိပါ**။
- **iFlytek** — Audio File Transcription အတွက် LLM Model ဖြစ်ပြီး Asynchronous Order စနစ်ဖြင့် လုပ်ဆောင်သည်။ App ပိတ်သွားသော်လည်း Task မပျောက်ပါ။
- **Gladia** — solaria Model၊ ဘာသာစကား ၁၀၀ ကျော် ပံ့ပိုးပြီး တစ်လလျှင် အခမဲ့ ၁၀ နာရီ ရရှိသည်။
- **Xiaomi MiMo** — တရုတ်ဘာသာ၊ အင်္ဂလိပ်နှင့် တရုတ်ဒေသိယစကားများအတွက် `mimo-v2.5-asr`။ ကြာချိန်အလိုက် ကုန်ကျစရိတ်တွက်ချက်ပြီး ၂၀ စက္ကန့် အသံတိတ်အပိုင်းများကို အခြေခံကာ အကြမ်းဖျင်း Timeline ဖန်တီးသည်။

</details>

<details>
<summary><b>Whisper Model ကို ဘယ်လိုရွေးချယ်မလဲ</b></summary>

<br/>

whisper.cpp / faster-whisper တို့သည် Whisper Model မျိုးရိုးကို အသုံးပြုသည်။ Model ပိုကြီးလေလေ တိကျမှု ပိုကောင်းလေလေဖြစ်သော်လည်း အလုပ်လုပ်ချိန်ပိုကြာပြီး VRAM ပိုသုံးသည်။

- စွမ်းဆောင်ရည်နိမ့်သော ကွန်ပျူတာ သို့မဟုတ် Integrated GPU — `tiny` / `base` ကို အကြံပြုသည်။ မြန်ဆန်ပြီး အရင်းအမြစ်အသုံးနည်းသည်။
- ပုံမှန်ကွန်ပျူတာ — တိကျမှုနှင့် အရင်းအမြစ်အသုံးပြုမှု မျှတစေရန် `small` / `base` မှ စတင်ပါ။
- စွမ်းဆောင်ရည်မြင့် GPU / Workstation — တိကျမှုအမြင့်ဆုံးရရှိရန် `large` မျိုးရိုးကို ရွေးချယ်ပါ။
- အင်္ဂလိပ်ဘာသာသီးသန့် Audio/Video — အင်္ဂလိပ်ဘာသာအတွက် အထူးပြုထားသော `en` ပါသည့် Model ကို ရွေးပါ။
- Storage နေရာချွေတာလိုပါက — တိကျမှုအနည်းငယ် လျော့နိုင်သော်လည်း File Size ပိုသေးသော `q5` / `q8` Quantized Version များကို အသုံးပြုနိုင်သည်။

</details>

<details>
<summary><b>GPU Acceleration</b></summary>

<br/>

Software တွင် GPU Acceleration Pack စီမံခန့်ခွဲမှု ပါဝင်သောကြောင့် CUDA Toolkit ကို ကိုယ်တိုင်တပ်ဆင်ရန် မလိုပါ။ တပ်ဆင်ပြီးနောက် “Engines & Models” စာမျက်နှာတွင် GPU Acceleration ကို စီမံနိုင်သည်။ Software သည် GPU ကို အလိုအလျောက်စစ်ဆေးပြီး သင့်တော်သော Acceleration နည်းလမ်းကို အကြံပြုသည်။

| Platform | Acceleration Backend | ရှင်းလင်းချက် |
| --- | --- | --- |
| Windows / Linux + NVIDIA | **CUDA** | CUDA 11.8.0 / 12.2.0 / 12.4.0 / 13.0.2 ကို ပံ့ပိုးပြီး သက်ဆိုင်ရာ Pack ကို App ထဲမှ ဒေါင်းလုဒ်လုပ်နိုင်သည် |
| Windows / Linux + AMD / Intel | **Vulkan** | Vulkan Acceleration Pack ကို App ထဲတွင် ထည့်သွင်းထားသည် |
| macOS (Apple Chip) | **Core ML / Metal** | mac arm64 Version တပ်ဆင်ပြီးပါက အလိုအလျောက်အသုံးပြုသည် |
| မည်သည့် Platform မဆို | **CPU** | GPU မရရှိပါက အလိုအလျောက် CPU သို့ ပြန်ပြောင်းသည် |

- Acceleration Mode တွင် “Auto / GPU only / CPU only” ကို ရွေးနိုင်သည်။ Load မအောင်မြင်ပါက CPU သို့ အလိုအလျောက်ပြောင်းပြီး Diagnostic Panel တွင် အကြောင်းရင်းကို ဖော်ပြသည်။
- Acceleration ဖွင့်ပြီးနောက် App ပိတ်သွားပါက “CPU only” သို့ ပြောင်းပါ သို့မဟုတ် အခြား Transcription Engine ကို အသုံးပြုပါ။

</details>

<details>
<summary><b>ဘာသာပြန်ဝန်ဆောင်မှုများနှင့် Custom Parameter များ</b></summary>

<br/>

Cloud Translation Service များကို အသုံးပြုရန် သက်ဆိုင်ရာ API Key သို့မဟုတ် Configuration လိုအပ်သည်။ Baidu Translation၊ Volcano Engine စသည့် ဝန်ဆောင်မှုများအတွက် API လျှောက်ထားနည်းကို [Bob ၏ Service Guide](https://bobtranslate.com/service/) တွင် ကြည့်နိုင်သည်။ ကောင်းမွန်သော Software ဖြစ်သည့် [Bob](https://bobtranslate.com/) ကိုလည်း ကျေးဇူးတင်ပါသည်။

AI ဘာသာပြန်ရလဒ်သည် Model နှင့် Prompt အပေါ် များစွာမူတည်သည်။ သင့်အကြောင်းအရာနှင့် ကိုက်ညီသော Model နှင့် Prompt ပေါင်းစပ်မှုကို ရှာဖွေရန် မတူညီသောပုံစံများကို စမ်းသပ်နိုင်သည်။

AI Translation Service တစ်ခုချင်းစီတွင် Model ၏ လုပ်ဆောင်ပုံကို တိကျစွာ ထိန်းချုပ်နိုင်ရန် Custom Parameter သတ်မှတ်ချက် ပါဝင်သည်။

- Code ပြင်ရန်မလိုဘဲ Interface မှ Parameter များကို ထည့်သွင်းစီမံနိုင်သည်။
- String၊ Float၊ Boolean၊ Array၊ Object၊ Integer အမျိုးအစားများကို ပံ့ပိုးသည်။
- မမှန်ကန်သော Configuration မဖြစ်စေရန် Parameter ပြောင်းလဲမှုကို အချိန်နှင့်တစ်ပြေးညီ စစ်ဆေးသည်။
- မျှဝေရန်နှင့် Backup ပြုလုပ်ရန် Export / Import ကို ပံ့ပိုးသည်။

</details>

<details>
<summary><b>အသံထုတ်လုပ်သည့် Engine နှင့် Output Mode များ</b></summary>

<br/>

Local Engine များသည် sherpa-onnx ကို အခြေခံထားပြီး အင်တာနက်မလိုဘဲ အခမဲ့အသုံးပြုနိုင်သည်။

| Model | ဘာသာစကား | အသံအမျိုးအစား | ရှင်းလင်းချက် |
| --- | --- | --- | --- |
| Kokoro Multilingual v1.1 | တရုတ် / အင်္ဂလိပ် | 103 | ဘာသာစကားမျိုးစုံ Model ဖြစ်ပြီး အင်္ဂလိပ်နှင့် တရုတ်အသံများ မျှတသည် |
| VITS Chinese AIShell3 | တရုတ် | 174 | တရုတ်ဘာသာ Speaker အသံစာရင်း |
| ZipVoice Voice Cloning | တရုတ် / အင်္ဂလိပ် | ကိုယ်တိုင်ဖန်တီးနိုင်သည် | Zero-shot Cloning — ကိုးကားအသံနှင့် သက်ဆိုင်ရာစာသားကို ထည့်ရုံဖြင့် အသုံးပြုနိုင်သည် |

Cloud Service များကို လိုအပ်သလို ချိတ်ဆက်နိုင်သည်။

| Service | ရှင်းလင်းချက် |
| --- | --- |
| Edge TTS | အခမဲ့ဖြစ်ပြီး Key မလိုပါ။ Reverse-engineered Interface ဖြစ်သောကြောင့် အမြဲအသုံးပြုနိုင်မည်ဟု အာမခံမထားပါ။ အလုပ်မလုပ်တော့ပါက အခြား Engine သို့ ပြောင်းပါ။ |
| OpenAI-compatible | `audio/speech` Protocol၊ OpenAI / SiliconFlow Preset များပါဝင်ပြီး Custom Endpoint အများအပြား ထည့်နိုင်သည်။ |
| Azure Speech | Microsoft Neural Voice 700 ကျော်နှင့် SSML ဖြင့် စကားပြောနှုန်းထိန်းချုပ်မှုကို ပံ့ပိုးသည်။ |
| Volcengine Doubao | Doubao TTS အသံများနှင့် Voice Cloning 2.0 ကို ပံ့ပိုးသည်။ |
| ElevenLabs | ဘာသာစကားမျိုးစုံ Model နှင့် Instant Voice Cloning (IVC) ကို ပံ့ပိုးသည်။ |
| Xiaomi MiMo | `mimo-v2.5-tts`၊ တရုတ်/အင်္ဂလိပ် ကြိုတင်သတ်မှတ်အသံ ၈ မျိုး၊ လက်ရှိကာလအတွက် အခမဲ့ဖြစ်သည်။ |

Timeline ညှိနှိုင်းမှု — အသံထုတ်မီ ရည်မှန်းထားသောကြာချိန်အလိုက် စကားပြောနှုန်းကို ကြိုတင်သတ်မှတ်သည်။ အသံထုတ်ပြီးနောက် အမှန်တကယ်ကြာချိန်ကို ပြန်လည်တိုင်းတာသည် (Local Engine များတွင် အခမဲ့ပြန်ထုတ်နိုင်ပြီး Cloud Output ကို atempo ဖြင့် အမြန်နှုန်းပြောင်းသည်)။ လိုအပ်ပါက အနီးရှိ အသံတိတ်အချိန်များကို အသုံးပြုသည်။ 1.5x စကားပြောနှုန်းကန့်သတ်ချက်ကို ကျော်နေသေးသော စာကြောင်းများကို စစ်ဆေးရန်စာရင်းသို့ ပို့ပေးပြီး စာသားပြင်ခြင်း၊ စာကြောင်းတစ်ကြောင်းချင်း ပြန်ထုတ်ခြင်း သို့မဟုတ် အမြန်နှုန်းပြောင်းထားမှုကို လက်ခံခြင်းတို့ ပြုလုပ်နိုင်သည်။

အသံပုံတူကူးမည့်အခါ ကိုးကားအသံဖိုင်၏ ကြာချိန်၊ Signal-to-Noise Ratio၊ အသံပြတ်တောက်မှု (Clipping) နှင့် အသံအတိုးအကျယ်တို့ကို အလိုအလျောက်စစ်ဆေးပြီး ပြဿနာတည်နေရာနှင့် ပြုပြင်ရန်အကြံပြုချက်များ ပေးသည်။

</details>

<details>
<summary><b>AI Assistant နှင့် MCP / CLI Automation သတ်မှတ်အသုံးပြုခြင်း</b></summary>

<br/>

#### 1. AI ဖန်တီးရေးအကူအညီပေးစနစ် (In-App Copilot)

- **Shortcut** — `⌘J` (macOS) သို့မဟုတ် `Ctrl+J` (Windows / Linux) ကို နှိပ်၍ ညာဘက် AI Assistant Panel ကို အချိန်မရွေး ဖွင့်/ပိတ်နိုင်သည်။ ဖွင့်ပြီးနောက် Input Box ကို အလိုအလျောက် Focus လုပ်ပေးသည်။
- **Service သတ်မှတ်ခြင်း** — App ၏ “Translation” Settings တွင် သတ်မှတ်ထားသော AI Model များ (OpenAI-compatible၊ DeepSeek၊ Qwen၊ Gemini၊ SiliconFlow၊ DeerAPI စသည်) ကို Assistant အတွက် တိုက်ရိုက်အသုံးပြုနိုင်သည်။ Chat Panel အောက်ခြေတွင် လက်ရှိစကားဝိုင်းအတွက် Model ကို ပြောင်းနိုင်သည်။
- **Context ချိတ်ဆက်ခြင်း** — “Include current context” ကို ပုံမှန်အားဖြင့် ရွေးထားသည်။ ထို့ကြောင့် Assistant သည် လက်ရှိ Video Playback အချိန်၊ ရွေးထားသော Subtitle စာကြောင်းများ၊ Error Log နှင့် Workspace အခြေအနေတို့ကို အလိုအလျောက်ဖတ်ရှုနိုင်သည်။ မရွေးထားပါက သီးခြားစကားဝိုင်းအဖြစ် အသုံးပြုနိုင်သည်။
- **Screenshot ဖြင့် ပြဿနာရှာဖွေခြင်း** — Input Box ရှိ Camera Icon ကိုနှိပ်ပါ။ Assistant သည် လက်ရှိ Workspace ကို ဖမ်းယူပြီး Multimodal Model ၏ Vision စွမ်းရည်ဖြင့် Error Dialog နှင့် Configuration ပြဿနာများကို ရှာဖွေပေးသည်။
- **ဖိုင်နှင့် Media များဖြင့် Chat ပြုလုပ်ခြင်း** — Audio/Video (MP4/MKV/MP3/WAV စသည်)၊ Subtitle သို့မဟုတ် စာသားမူကြမ်းများကို Chat ထဲသို့ ဆွဲထည့်နိုင်သည်။ Assistant သည် အတွင်းပိုင်း MCP Tool များကို အသုံးပြုပြီး Local တွင် Audio ထုတ်ယူခြင်း၊ Subtitle ဖန်တီးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်းတို့ ပြုလုပ်နိုင်သည်။

#### 2. ပြင်ပ AI Tool များနှင့် ချိတ်ဆက်ခြင်း (Cursor / Codex / Claude Code)

Software ထဲတွင် **Settings → Connect AI Tools (MCP)** ကို ဖွင့်ပါ။

- **Cursor** — “Import to Cursor” ကို နှိပ်ပါ။ Cursor ဖွင့်လာသော စာမျက်နှာတွင် အတည်ပြုလိုက်ပါက အလိုအလျောက် မှတ်ပုံတင်မည်။
- **OpenAI Codex** — “Copy Configuration” ကို နှိပ်ပြီး ရရှိလာသော TOML Block ကို `~/.codex/config.toml` ထဲသို့ ကူးထည့်ပါ။
- **Claude Code** — Terminal တွင် App နှင့်အတူ ပါဝင်သော Command ကို လုပ်ဆောင်ပါ။

  ```bash
  # macOS
  "/Applications/SmartSub.app/Contents/Resources/automation/smartsub" setup cli --install
  "$HOME/.local/bin/smartsub" setup mcp --client claude --install
  ```

- **အခြား MCP Client များ** — General JSON Configuration ကို ကူးယူပြီး Client ၏ `mcpServers` ထဲသို့ `smartsub` Entry ကို ပေါင်းထည့်ပါ။ Node.js ကို သီးခြားတပ်ဆင်ရန် မလိုပါ။

အသေးစိတ်ကို [AI Assistant အသုံးပြုနည်း](docs/docs/features/ai-assistant.md) နှင့် [MCP / CLI ချိတ်ဆက်လမ်းညွှန်](docs/docs/guides/automation.md) တွင် ကြည့်ပါ။

</details>

<details>
<summary><b>Model များကို ကိုယ်တိုင်ဒေါင်းလုဒ်လုပ်ပြီး ထည့်သွင်းခြင်း</b></summary>

<br/>

Model File များသည် အရွယ်အစားကြီးမားသောကြောင့် App ထဲမှ ဒေါင်းလုဒ်လုပ်ရန် အခက်အခဲရှိပါက ကိုယ်တိုင်ဒေါင်းလုဒ်လုပ်ပြီး Import ပြုလုပ်နိုင်သည်။ Whisper Model များကို အောက်ပါနေရာများမှ ရယူနိုင်သည်။

1. Mirror (အချို့ဒေသများတွင် ပိုမြန်နိုင်သည်) — https://hf-mirror.com/ggerganov/whisper.cpp/tree/main
2. Hugging Face တရားဝင်စာမျက်နှာ — https://huggingface.co/ggerganov/whisper.cpp/tree/main

Apple Silicon အသုံးပြုသူများသည် Model နှင့်ကိုက်ညီသော `encoder.mlmodelc` File ကိုပါ ဒေါင်းလုဒ်လုပ်ရမည်။ Extract လုပ်ပြီး Model ရှိသည့် Folder တစ်ခုတည်းတွင် ထားပါ။ `q5` / `q8` Model များအတွက် ဤဖိုင် မလိုအပ်ပါ။

Import ပြုလုပ်ရန် “Engines & Models” စာမျက်နှာရှိ “Import Model” ကိုနှိပ်ပြီး ဒေါင်းလုဒ်လုပ်ထားသော Model File ကို ရွေးချယ်ပါ။ သို့မဟုတ် Model Directory ထဲသို့ တိုက်ရိုက်ကူးထည့်နိုင်သည်။

FunASR / Qwen3-ASR / FireRedASR / Parakeet Engine များ၏ Model များကို “Engines & Models” စာမျက်နှာမှ လိုအပ်သလို ဒေါင်းလုဒ်လုပ်နိုင်သည် (ModelScope / GitHub စသည့် Source မျိုးစုံကို ပံ့ပိုးသည်)။

</details>

## မေးလေ့ရှိသောမေးခွန်းများ

<details>
<summary><b>macOS တွင် “The application is damaged and can't be opened” ဟုပြနေခြင်း</b></summary>

<br/>

Terminal တွင် အောက်ပါ Command ကို လုပ်ဆောင်ပြီးနောက် App ကို ပြန်ဖွင့်ပါ။

```bash
sudo xattr -dr com.apple.quarantine /Applications/SmartSub.app
```

</details>

<details>
<summary><b>Model ဒေါင်းလုဒ်လုပ်ရာတွင် နှေးခြင်း သို့မဟုတ် မအောင်မြင်ခြင်း</b></summary>

<br/>

Model File ကို ကိုယ်တိုင်ဒေါင်းလုဒ်လုပ်ပြီး App ထဲသို့ Import ပြုလုပ်နိုင်သည်။ [အဆင့်မြင့်လမ်းညွှန်](#အဆင့်မြင့်လမ်းညွှန်) ကို ကြည့်ပါ။ အချို့ဒေသများတွင် hf-mirror Source ကို အသုံးပြုပါက ပိုမြန်နိုင်သည်။

</details>

<details>
<summary><b>GPU Acceleration ဖွင့်ပြီးနောက် App ပိတ်သွားခြင်း</b></summary>

<br/>

“Engines & Models” စာမျက်နှာတွင် Acceleration Mode ကို “CPU only” သို့ ပြောင်းပါ သို့မဟုတ် အခြား Transcription Engine ကို အသုံးပြုပါ။ Diagnostic Panel တွင် မအောင်မြင်ရသည့်အကြောင်းရင်းကို ဖော်ပြပေးသည်။

</details>

## ဖွံ့ဖြိုးတိုးတက်ရေးတွင် ပါဝင်ခြင်း

Project ကို ပိုမိုကောင်းမွန်လာစေရန် Issue နှင့် Pull Request များ တင်သွင်းနိုင်ပါသည်။

<details>
<summary><b>Local တွင် Build ပြုလုပ်ခြင်း</b></summary>

<br/>

1. Project ကို Clone လုပ်ပြီး Dependency များ တပ်ဆင်ပါ။ Install Hook သည် whisper addon နှင့် sherpa-onnx Native Library များကို အလိုအလျောက်ဒေါင်းလုဒ်လုပ်ပေးသည်။

```bash
git clone https://github.com/buxuku/SmartSub.git
cd SmartSub
yarn install
```

2. Development Environment ကို စတင်ပါ။

```bash
yarn dev
```

Network ကန့်သတ်ချက်ကြောင့် Native Dependency များ အလိုအလျောက်ဒေါင်းလုဒ်မရပါက အောက်ပါ Command ကို ကိုယ်တိုင်ပြန်လည်လုပ်ဆောင်နိုင်သည်။

```bash
yarn native:fetch
```

</details>

## ပံ့ပိုးကူညီသူများ

ဤ Project ကို အောက်ပါပံ့ပိုးကူညီသူများက ကူညီပံ့ပိုးထားသည်။

<a href="https://m.do.co/c/604498b8a664" target="_blank" rel="noopener noreferrer"><img src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg" width="201" alt="DigitalOcean" /></a>

## Community နှင့် အကူအညီ

ဤ Project က သင့်အတွက် အသုံးဝင်ပါက GitHub တွင် Star ပေးနိုင်သလို စာရေးသူကို ကော်ဖီတစ်ခွက် ဝယ်တိုက်နိုင်သည် (သင့် GitHub Account ကို မှတ်ချက်တွင် ရေးပေးပါ)။ အသုံးပြုရာတွင် မေးခွန်းရှိပါက QQ Group (အဖွဲ့နံပါတ်: 655348339) သို့ ဝင်ရောက်မေးမြန်းနိုင်သည်။

| Alipay ငွေပေးချေမှု QR | WeChat အလှူငွေ QR | QQ Group |
| --- | --- | --- |
| ![Alipay QR](./resources/donate_alipay.jpg) | ![WeChat QR](./resources/donate_wechat.jpg) | ![QQ Group](./resources/qq-group.jpg) |

## ကျေးဇူးတင်လွှာ

- [whisper.cpp](https://github.com/ggerganov/whisper.cpp) — Local Transcription Engine ၏ အခြေခံ။
- [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) — FunASR / Qwen3-ASR / FireRedASR / Parakeet နှင့် Local TTS တို့၏ Runtime။
- [FFmpeg](https://ffmpeg.org/) — Audio/Video လုပ်ဆောင်ခြင်းနှင့် စာတန်းထိုးထည့်သွင်းခြင်း။
- [Bob](https://bobtranslate.com/) — ဘာသာပြန်ဝန်ဆောင်မှုများ လျှောက်ထားအသုံးပြုရန် လမ်းညွှန်။
- [LINUX DO](https://linux.do) — ဆွေးနွေးမှုများနှင့် အကြံပြုချက်များအတွက် Community ကို ကျေးဇူးတင်ပါသည်။

## လိုင်စင်

ဤ Project သည် MIT License ကို အသုံးပြုထားသည်။ အသေးစိတ်ကို [LICENSE](LICENSE) ဖိုင်တွင် ကြည့်ပါ။

## Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=buxuku/SmartSub&type=Date)](https://star-history.dera.page/#buxuku/SmartSub&type=Date)
