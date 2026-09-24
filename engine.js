/* Pure, deterministic recommendation functions; no network or paid API. */
const NextUpEngine = (() => {
  const moodWords = {
    'Feel-good':['feel good','feel-good','happy','cosy','cozy','comfort','uplifting','relax','chill','wholesome','lighthearted','light-hearted','gentle'],
    'Funny':['funny','laugh','hilarious','comedy','comedies','sitcom'],
    'Mind-bending':['mind bending','mind-bending','twist','puzzle','clever','brain','mindblowing','mind-blowing','thought provoking'],
    'Intense':['intense','suspense','thrilling','edge of','adrenaline','tense'],
    'Emotional':['emotional','cry','sad','moving','tear','heartfelt'],
    'Romantic':['romantic','romance','date night','love story','romcom','rom-com'],
    'Epic':['epic','spectacle','adventure','big scale','action'],
    'Dark':['dark','scary','horror','creepy','disturbing','terrifying']
  };
  const genreWords = {
    'Sci-fi':['sci-fi','sci fi','science fiction','scifi'], 'Comedy':['comedy','comedies','sitcom'],
    'Romance':['romance','romantic','romcom','rom-com'], 'Horror':['horror','scary','creepy','terrifying'],
    'Thriller':['thriller','thrillers','suspense'], 'Mystery':['mystery','mysteries','detective','whodunit'],
    'Animation':['animation','animated','anime'], 'Action':['action'], 'Drama':['drama'],
    'Fantasy':['fantasy','magic'], 'Documentary':['documentary','documentaries','docu'],
    'Family':['family friendly','family-friendly','for kids','children'], 'Adventure':['adventure'],
    'Music':['musical','music'], 'Sport':['sport','sports','football','basketball'], 'Nature':['nature','wildlife']
  };
  const languageWords = {English:['english'],Korean:['korean','k-drama','kdrama'],Japanese:['japanese'],French:['french'],German:['german'],Spanish:['spanish'],Hindi:['hindi','bollywood'],Telugu:['telugu'],Mandarin:['mandarin','chinese']};
  const normalized = text => String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'');
  const escapeRegex = text => text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const has = (text,term) => new RegExp('\\b'+escapeRegex(normalized(term))+'\\b','i').test(text);
  function hash(value) { let h=2166136261; for(const c of String(value)){ h^=c.charCodeAt(0); h=Math.imul(h,16777619); } return h>>>0; }
  function dateKey(date=new Date()){return date.toISOString().slice(0,10);}
  function weekKey(date=new Date()) { const d=new Date(dateKey(date)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return dateKey(d); }
  function weekly(catalog,date=new Date()){const key=weekKey(date);return [...catalog].sort((a,b)=>hash(key+a.id)-hash(key+b.id)).slice(0,10);}
  function dailyIndex(length,date=new Date()){return Math.floor(new Date(dateKey(date)+'T00:00:00Z').getTime()/86400000)%length;}
  function parsePrompt(input,catalog,previous={}) {
    const p={...previous}; let text=normalized(input); const recognized=[];
    const source=[...catalog].sort((a,b)=>b.title.length-a.title.length).find(x=>text.includes(normalized(x.title)));
    if(source){p.similar=source.id;recognized.push('similar');text=text.replace(normalized(source.title),'');}
    const excluded=new Set(p.excludeGenres||[]), excludedMoods=new Set(p.excludeMoods||[]);
    const negative = /\b(?:no|not|without|avoid|exclude|dont want|nothing|anything but)\s+(?:(?:any|too|a|an|really|super|more)\s+)?([^,.!?;]+)/g;
    text=text.replace(negative,(full,part)=>{
      // End the negative segment at a contrast or a new request.
      const stop=part.search(/\b(?:but|instead|i want|give me|please|under|less than)\b/);
      const neg=stop<0?part:part.slice(0,stop);const rest=stop<0?'':part.slice(stop);
      const negativeGenres=Object.entries(genreWords).filter(([,terms])=>terms.some(t=>has(neg,t)));
      for(const [genre] of negativeGenres){excluded.add(genre);recognized.push('exclude');}
      for(const [mood,terms] of Object.entries(moodWords))if(terms.some(t=>has(neg,t)&&!negativeGenres.some(([g])=>genreWords[g].includes(t)))){excludedMoods.add(mood);recognized.push('exclude');}
      return rest;
    });
    p.excludeGenres=[...excluded];p.excludeMoods=[...excludedMoods];
    const moods=Object.entries(moodWords).filter(([,terms])=>terms.some(t=>has(text,t))).map(([m])=>m);
    const genres=Object.entries(genreWords).filter(([,terms])=>terms.some(t=>has(text,t))).map(([g])=>g);
    if(moods.length){p.moods=moods;recognized.push('mood');}
    if(genres.length){p.genres=genres;recognized.push('genre');}
    if(/\b(movie|movies|film|films)\b/.test(text)){p.type='movie';recognized.push('format');}
    if(/\b(show|shows|series|tv|episode|episodes)\b/.test(text)){p.type='show';recognized.push('format');}
    if(/\b(any format|either format|movies and shows|movies or shows)\b/.test(text))p.type='any';
    for(const [lang,words] of Object.entries(languageWords))if(words.some(t=>has(text,t))){p.language=lang;recognized.push('language');}
    if(/any language/.test(text))p.language='any';
    const duration=text.match(/(?:under|below|less than|within|up to|max(?:imum)?)\s*(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m)\b/);
    if(duration){p.maxMinutes=Math.round(Number(duration[1])*(duration[2].startsWith('h')?60:1));if(/^(under|below|less than)/.test(duration[0]))p.maxMinutes--;recognized.push('time');}
    if(/\b(short|quick)\b/.test(text)&&!duration){p.maxMinutes=p.type==='show'?30:100;recognized.push('time');}
    if(/\b(any length|any runtime|no time limit)\b/.test(normalized(input))){p.maxMinutes=0;recognized.push('time');}
    if(/\b(not watched|havent seen|unwatched)\b/.test(normalized(input)))p.hideSeen=true;
    if(/\banime\b/.test(text)){p.language='Japanese';recognized.push('language');}
    const keywords=['space','time travel','heist','friendship','family','cooking','food','superhero','zombies','workplace','school','college','sports','chess','music','ai','robots','politics','magic','war','survival','lawyer','prison','nature','cyberpunk','miniseries'];
    const tags=keywords.filter(k=>has(text,k));if(tags.length){p.tags=tags;recognized.push('themes');}
    if(p.genres)p.genres=p.genres.filter(g=>!excluded.has(g));
    if(p.moods)p.moods=p.moods.filter(m=>!excludedMoods.has(m));
    return {preferences:p,recognized:[...new Set(recognized)]};
  }
  function recommend(catalog,p={},watched=[],limit=12){
    const source=catalog.find(x=>x.id===p.similar);
    return catalog.filter(x=>(!p.type||p.type==='any'||x.type===p.type)&&(!p.language||p.language==='any'||x.language===p.language)&&(!p.maxMinutes||x.minutes<=p.maxMinutes)&&!(p.excludeGenres||[]).some(g=>x.genres.includes(g))&&!(p.excludeMoods||[]).some(m=>x.moods.includes(m))&&(!p.hideSeen||!watched.includes(x.id))&&x.id!==p.similar&&(!(p.genres||[]).length||p.genres.some(g=>x.genres.includes(g)))).map(x=>{
      let score=0;const reasons=[];
      const moods=(p.moods||[]).filter(m=>x.moods.includes(m));score+=moods.length*7;if(moods.length)reasons.push(moods.join(' + ').toLowerCase());
      const genres=(p.genres||[]).filter(g=>x.genres.includes(g));score+=genres.length*4;if(genres.length)reasons.push(genres.join(' / '));
      const tags=(p.tags||[]).filter(t=>normalized(x.tags).includes(t));score+=tags.length*5;if(tags.length)reasons.push(tags.slice(0,2).join(' & '));
      if(source){const shared=source.genres.filter(g=>x.genres.includes(g));const sharedMoods=source.moods.filter(m=>x.moods.includes(m));score+=shared.length*4+sharedMoods.length*3;score+=source.tags.split(' ').filter(t=>t.length>3&&x.tags.includes(t)).length;if(shared.length)reasons.push('shares '+shared.slice(0,2).join(' / ')+' with '+source.title);}
      if(p.language&&p.language!=='any')reasons.push(x.language+' language');
      if(p.maxMinutes)reasons.push(x.minutes+' min'+(x.type==='show'?' / episode':''));
      return {...x,score,reasons:reasons.length?reasons.slice(0,3):['A pick from our curated catalogue']};
    }).sort((a,b)=>b.score-a.score||hash(a.id)-hash(b.id)).slice(0,limit);
  }
  return {normalized,hash,dateKey,weekKey,weekly,dailyIndex,parsePrompt,recommend};
})();
if(typeof module!=='undefined')module.exports=NextUpEngine;
