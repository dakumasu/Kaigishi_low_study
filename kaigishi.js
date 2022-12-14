let question = [
    "海上衝突予防法 追越し船の定義",
    "追越しか横切りかわからないときの判断",
    "海上交通安全法 備讃瀬戸東航路の航法",
    "海上交通安全法 宇高東航路の航法",
    "海上交通安全法 宇高西航路の航法",
    "宇高東航路又は宇高西航路をこれに沿つて航行している船舶は、どのような船舶を避けなければならないか",
    "備讃瀬戸東、宇高東、宇高西航路において航行し、又は停留している船舶（巨大船を除く。）は、どのような船舶を避けなければならないか",
    "海上交通安全法 備讃瀬戸北航路の航法",
    "海上交通安全法 備讃瀬戸南航路の航法",
    "海上交通安全法 水島航路の航法",
    "水島航路をこれに沿つて航行している船舶（巨大船及び漁ろう船等を除く。）は、どのような船舶を避けなければならないか",
    "水島航路をこれに沿つて航行している漁ろう船等は、どのような船舶を避けなければならないか",
    "備讃瀬戸北航路をこれに沿つて航行している船舶（巨大船を除く。）は、どのような船舶を避けなければならないか",
    "航行し、又は停留している船舶（巨大船を除く。）は、どのような船舶を避けなければならないか",
    "港則法の航路の右側通行と、海上衝突予防法の右側通行の違いは",
    "港則法において航路航行義務のある船舶はどのような船舶か",
    "港則法において「汽艇等」とは",
    "港則法において「特定港」とは",
    "海上衝突予防法において「注意喚起信号」と「警告信号」のちがいは",
    "海上衝突予防法において「喫水制限船」とは",
    "海上衝突予防法において航行中の喫水制限船の灯火・形象物は",
    "海上交通安全法 来島海峡の航法",
    "海上交通安全法において来島海峡航路で航路外待機はどのような条件の時に、どのような船舶に発令されるか？",
    "港則法における汽艇等以外の船舶の航法",
    "港則法における「小型船」とは",
    "港則法における小型船の航法",
    "政令で定める船舶交通が著しく混雑する特定港は",
    "政令で定める船舶交通が著しく混雑する特定港において、小型船、汽艇等以外の船舶が掲げる信号は",
    "港則法で定める航路内の航法",
    "海上衝突予防法 第5条 見張り",
    "海上衝突予防法 第6条 安全な速力",
    "海上衝突予防法 第7条 衝突の恐れ",
    "海上衝突予防法 第8条 衝突を避けるための動作",
    "海上衝突予防法と海上交通安全法の追い越し信号の意味の違いは",
    "海上交通安全法における一方通航の航路は",
    "海上交通安全法における速力の制限は何ノット",
    "海上交通安全法で全区間速力制限の航路は",
    "海上交通安全法で一部区間速力制限の航路は",
    "海上交通安全法において行先信号を行わなければならないのはどのような船舶か",
    "海上交通安全法における行先信号はどのように行うか",
    "港則法第17条「右小回り左大回り」の理由、逆ではいけない理由は",
    "海上衝突予防法において「運転不自由船」とは",
    "海上衝突予防法における航行中の運転不自由船の灯火・形象物は",
    "海上衝突予防法において「操縦性能制限船」とは",
    "海上衝突予防法における操縦性能制限船の灯火・形象物は",
    "海上衝突予防法 第15条 横切り船の航法",
    "海上衝突予防法における横切り船の航法が適用されないのはどのようなときか",
    "海上衝突予防法において追越し信号を行うのはどのようなときか",
    "海上交通安全法の適用海域は",
    "海上交通安全法における東京湾の範囲は",
    "海上交通安全法における伊勢湾の範囲は",
    "海上交通安全法における瀬戸内海の範囲は",
    "海上交通安全法において航路航行義務のある船舶は",
    "海上交通安全法において針路を知らせなければならない船舶は",
    "海上交通安全法で定める航路のうち、瀬戸内海にある航路は",
    "海上交通安全法で定める航路のうち、東京湾にある航路は",
    "海上交通安全法で定める浦賀水道航路の航法は",
    "海上交通安全法で定める中ノ瀬航路の航法は",
    "海上交通安全法で定める伊良湖水道航路の航法は",
    "港則法の「右小回り左大回り」とは",
    "港則法で定める「安全な速力とは」",
    "海上衝突予防法における霧中信号とは",
    "海上衝突予防法で定める航行中の動力船の霧中信号は",
    "海上衝突予防法で定める航行中の帆船、漁ろうに従事している船舶、運転不自由船、操縦性能制限船及び喫水制限船の霧中信号は",
    "海上衝突予防法で定める他の動力船に引かれている航行中の船舶の霧中信号は",
    "海上衝突予防法で定める錨泊中の船舶の霧中信号は",
    "海上衝突予防法で定める乗り上げている船舶の霧中信号は",
    "海上衝突予防法 第17条「保持船の航法」は",
    "海上交通安全法における「漁ろう船等」とは",
    "海上交通安全法における「巨大船」とは",
    "海上交通安全法で定める巨大船の灯火",
    "海上交通安全法で定める巨大船の形象物",
    "海上交通安全法における「危険物積載船」とは",
    "海上交通安全法で定める危険物積載船の灯火",
    "海上交通安全法で定める危険物積載船の標識",
    "港則法では港内で火災が起きた場合の信号についてどのように規定しているか",
    "港則法では特定港内で錨泊をしてはならない場所はどのように規定しているか",
    "海上交通安全法で定める「緊急要務船」とは",
    "海上交通安全法で定める緊急要務船の灯火・形象物は？",
    "海上交通安全法で定める浦賀水道における準巨大船の長さは？",
    "海上衝突予防法で定める「安全な速力」の考慮事項は",
    "海上衝突予防法において避航船が適切な動作をとっていないことが明らかとなったとき、保持船はどのような信号を行うか",
    "海上交通安全法で定める伊良湖水道航路の航法は",
    "海上交通安全法において伊良湖水道航路の航路外待機の指示を受けるのはどのようなときか",
    "港則法で定められる航路内の航法は",
    "海上交通安全法において航路通報を行わなければならないのはどのような船舶か",
    "海上交通安全法において行う航路通報はいつ、誰が、何を通報するか",
    "海上交通安全法において航路通報を行わなければならない巨大船以外の船舶で国土交通省令で定める長さとは",
    "明石海峡航路で夜間に長音5回を聞いた場合の意味",
    "海上交通安全法の速力制限が適用除外となるのはどのような場合か",
    "海上交通安全法において明石海峡を横断する船舶が掲げる形象物は",
    "海上交通安全法において行先信号、第一代表旗、第二代表旗、P、S、Cはそれぞれ何を表すか。",
    "港則法において指定錨地のある港はどのような港か、また、対象船舶はどのような船舶か",
    "港則法で定める航路のうち、追越しが可能な航路はどの航路か",
    "港則法で定める航路で追越しを行う際、海上衝突予防法の追越し信号は行えるか"
];

let answer = [
    "船舶の正横後二十二度三十分を超える後方の位置（夜間にあつては、その船舶の第二十一条第二項に規定するげん灯のいずれをも見ることができない位置）からその船舶を追い越す船舶は、追越し船とする。",
    "海上衝突予防法 第13条3項 船舶は、自船が追越し船であるかどうかを確かめることができない場合は、追越し船であると判断しなければならない より、追越し船であると判断する。",
    "船舶は、備讃瀬戸東航路をこれに沿つて航行するときは、同航路の中央から右の部分を航行しなければならない。",
    "船舶は、宇高東航路をこれに沿つて航行するときは、北の方向に航行しなければならない。",
    "船舶は、宇高西航路をこれに沿つて航行するときは、南の方向に航行しなければならない。",
    "讃瀬戸東航路をこれに沿つて航行している巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。この場合において、海上衝突予防法第九条第二項及び第三項、第十五条第一項前段並びに第十八条第一項の規定は当該巨大船について適用しない。",
    "備讃瀬戸東航路をこれに沿つて航行し、同航路から北の方向に宇高東航路に入ろうとしており、又は宇高西航路をこれに沿つて南の方向に航行し、同航路から備讃瀬戸東航路に入ろうとしている巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。この場合において、第三条第一項並びに海上衝突予防法第九条第二項及び第三項、第十三条第一項、第十四条第一項、第十五条第一項前段並びに第十八条第一項の規定は、当該巨大船については適用しない。",
    "船舶は、備讃瀬戸北航路をこれに沿つて航行するときは、西の方向に航行しなければならない。",
    "船舶は、備讃瀬戸南航路をこれに沿つて航行するときは、東の方向に航行しなければならない。",
    "船舶は、水島航路をこれに沿つて航行するときは、できる限り、同航路の中央から右の部分を航行しなければならない。",
    "備讃瀬戸北航路をこれに沿つて西の方向に航行している他の船舶と衝突するおそれがあるときは、当該他の船舶の進路を避けなければならない。この場合において、海上衝突予防法第九条第二項、第十二条第一項、第十五条第一項前段及び第十八条第一項の規定は、当該他の船舶については適用しない。",
    "備讃瀬戸北航路をこれに沿つて西の方向に航行している巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。この場合において、海上衝突予防法第九条第二項及び第三項、第十五条第一項前段並びに第十八条第一項の規定は、当該巨大船については適用しない。",
    "水島航路をこれに沿つて航行している巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。この場合において、海上衝突予防法第九条第二項及び第三項、第十五条第一項前段並びに第十八条第一項の規定は、当該巨大船については適用しない。",
    "備讃瀬戸北航路をこれに沿つて西の方向に若しくは備讃瀬戸南航路をこれに沿つて東の方向に航行し、これらの航路から水島航路に入ろうとしており、又は水島航路をこれに沿つて航行し、同航路から西の方向に備讃瀬戸北航路若しくは東の方向に備讃瀬戸南航路に入ろうとしている巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。この場合において、第三条第一項並びに海上衝突予防法第九条第二項及び第三項、第十三条第一項、第十四条第一項、第十五条第一項前段並びに第十八条第一項の規定は、当該巨大船については適用しない。",
    "海上衝突予防法では狭い水道、または航路筋の内側において船舶は安全であり、かつ実効に適する限り、多船の有無にかかわらず常に右側端に寄って航行するように規定している。<br>港則法では航路内の右側航行は常時ではなく、他の船舶と行き会うときに履行を求めており、安全のため必要ならば航路の中央や左側を航行して差し支えない。" ,
    "汽艇等以外の船舶は、特定港に出入し、又は特定港を通過するには、国土交通省令で定める航路によらなければならない。ただし、海難を避けようとする場合その他やむを得ない事由のある場合は、この限りでない。",
    "「汽艇等」とは、汽艇（総トン数二十トン未満の汽船をいう。）、はしけ及び端舟その他ろかいのみをもつて運転し、又は主としてろかいをもつて運転する船舶をいう。",
    "「特定港」とは、喫水の深い船舶が出入できる港又は外国船舶が常時出入する港であつて、政令で定めるものをいう。",
    "「注意喚起信号」は他の船舶の注意を喚起するために必要があると認められる場合において、他の信号と誤認されることのない発光信号または音響による信号を行う。<br>「警告信号」は互いに他の船舶の視野の内にある船舶が互いに接近する場合において、船舶は、他の船舶の意図若しくは動作を理解することができないとき、又は他の船舶が衝突を避けるために十分な動作をとつていることについて疑いがあるときに行い、急速に単音5回以上の吹鳴または急速にせん光を5回以上発することにより行う。",
    "「喫水制限船」とは、船舶の喫水と水深との関係によりその進路から離れることが著しく制限されている動力船をいう。",
    "航行中の喫水制限船は、航行中の動力船の灯火のほか、最も見えやすい場所に紅色の全周灯三個又は円筒形の形象物一個を垂直線上に表示することができる。",
    "船舶は、来島海峡航路をこれに沿つて航行するときは、次に掲げる航法によらなければならない。この場合において、これらの航法によつて航行している船舶については、海上衝突予防法第九条第一項の規定は、適用しない。<br>順潮の場合は来島海峡中水道（以下「中水道」という。）を、逆潮の場合は来島海峡西水道（以下「西水道」という。）を航行すること。ただし、これらの水道を航行している間に転流があつた場合は、引き続き当該水道を航行することができることとし、また、西水道を航行して小島と波止浜との間の水道へ出ようとする船舶又は同水道から来島海峡航路に入つて西水道を航行しようとする船舶は、順潮の場合であつても、西水道を航行することができることとする。<br>二　順潮の場合は、できる限り大島及び大下島側に近寄つて航行すること。<br>三　逆潮の場合は、できる限り四国側に近寄つて航行すること。<br>四　前二号の規定にかかわらず、西水道を航行して小島と波止浜との間の水道へ出ようとする場合又は同水道から来島海峡航路に入つて西水道を航行しようとする場合は、その他の船舶の四国側を航行すること。<br>五　逆潮の場合は、潮流の速度に4ノット加えた速力以上の速力で航行すること。",
    "視程が1000メートルを超え2000メートル以下の状態で、巨大船、特別危険物積載船又は長大物件えい航船等が航路を航行する場合<br>視程が千メートル以下の状態で、長さ百六十メートル以上の船舶、危険物積載船又は船舶、いかだその他の物件を引き、若しくは押して航行する船舶であつて、当該引き船の船首から当該物件の後端まで若しくは当該押し船の船尾から当該物件の先端までの距離が百メートル以上である船舶が航路を航行する場合<br>潮流をさかのぼつて航路を航行する船舶が潮流の速度に四ノットを加えた速力以上の速力を保つことができずに航行するおそれがある場合",
    "汽艇等は、港内においては、汽艇等以外の船舶の進路を避けなければならない。",
    "汽艇等を除く船舶であり、京浜港、名古屋港、四日市港及び阪神港においては総トン数500トン未満、関門港においては総トン数300トン未満の船舶をいう。",
    "小型船及び汽艇等以外の船舶の進路を避けなければならない。",
    "関門港、阪神港、名古屋港、四日市港、京浜港、千葉港",
    "数字旗1旗",
    "航路外から航路に入り、又は航路から航路外に出ようとする船舶は、航路を航行する他の船舶の進路を避けなければならない。<br>２　船舶は、航路内においては、並列して航行してはならない。<br>３　船舶は、航路内において、他の船舶と行き会うときは、右側を航行しなければならない。<br>４　船舶は、航路内においては、他の船舶を追い越してはならない。",
    "船舶は、周囲の状況及び他の船舶との衝突のおそれについて十分に判断することができるように、視覚、聴覚及びその時の状況に適した他のすべての手段により、常時適切な見張りをしなければならない。",
    "船舶は、他の船舶との衝突を避けるための適切かつ有効な動作をとること又はその時の状況に適した距離で停止することができるように、常時安全な速力で航行しなければならない。",
    "船舶は、他の船舶と衝突するおそれがあるかどうかを判断するため、その時の状況に適したすべての手段を用いなければならない。 ２　レーダーを使用している船舶は、他の船舶と衝突するおそれがあることを早期に知るための長距離レーダーレンジによる走査、探知した物件のレーダープロッティングその他の系統的な観察等を行うことにより、当該レーダーを適切に用いなければならない。<br>３　船舶は、不十分なレーダー情報その他の不十分な情報に基づいて他の船舶と衝突するおそれがあるかどうかを判断してはならない。<br>４　船舶は、接近してくる他の船舶のコンパス方位に明確な変化が認められない場合は、これと衝突するおそれがあると判断しなければならず、また、接近してくる他の船舶のコンパス方位に明確な変化が認められる場合においても、大型船舶若しくはえい航作業に従事している船舶に接近し、又は近距離で他の船舶に接近するときは、これと衝突するおそれがあり得ることを考慮しなければならない。<br>５　船舶は、他の船舶と衝突するおそれがあるかどうかを確かめることができない場合は、これと衝突するおそれがあると判断しなければならない。",
    "船舶は、他の船舶との衝突を避けるための動作をとる場合は、できる限り、十分に余裕のある時期に、船舶の運用上の適切な慣行に従つてためらわずにその動作をとらなければならない。<br>２　船舶は、他の船舶との衝突を避けるための針路又は速力の変更を行う場合は、できる限り、その変更を他の船舶が容易に認めることができるように大幅に行わなければならない。<br>３　船舶は、広い水域において針路の変更を行う場合においては、それにより新たに他の船舶に著しく接近することとならず、かつ、それが適切な時期に大幅に行われる限り、針路のみの変更が他の船舶に著しく接近することを避けるための最も有効な動作となる場合があることを考慮しなければならない。<br>４　船舶は、他の船舶との衝突を避けるための動作をとる場合は、他の船舶との間に安全な距離を保つて通過することができるようにその動作をとらなければならない。この場合において、船舶は、その動作の効果を当該他の船舶が通過して十分に遠ざかるまで慎重に確かめなければならない。<br>５　船舶は、周囲の状況を判断するため、又は他の船舶との衝突を避けるために必要な場合は、速力を減じ、又は機関の運転を止め、若しくは機関を後進にかけることにより停止しなければならない。",
    "海上衝突予防法では他船を安全に追い越すために協力動作を求めるために追越し信号を行うが、海上交通安全法では自船がどちらから追越すと知らせるために行う。",
    "中ノ瀬航路、備讃瀬戸北航路、備讃瀬戸南航路、宇高東航路、宇高西航路",
    "対水速力で12ノットを超える速力で航行してはならない",
    "浦賀水道航路、中ノ瀬航路、伊良湖水道航路、水島航路",
    "備讃瀬戸東航路、備讃瀬戸北航路、備讃瀬戸南航路",
    "汽笛を備えている船舶または総トン数100トン以上の船舶が航路を出入し、または航路を横断するときに行う。",
    "国際信号旗に加えてAISにより自船の進路を表示する。",
    "堤防等により他の船舶を見ることが困難な場所において港則法第13条第3項「船舶は、航路内において、他の船舶と行き会うときは、右側を航行しなければならない。」を遵守するために右に曲がるときは小回り、左に曲がるときに大周りをする必要がある。<br>逆では防波堤等の先で他の船舶の右側を航行できないだけでなく、航路の右側によって航行している船舶と衝突する恐れが生じるため、危険である。",
    "「運転不自由船」とは、船舶の操縦性能を制限する故障その他の異常な事態が生じているため他の船舶の進路を避けることができない船舶をいう。",
    "航行中の運転不自由船は<br>・最も見えやすい場所に紅色の全周灯二個を垂直線上に掲げる<br>・対水速力を有する場合は、げん灯一対を掲げ、かつ、できる限り船尾近くに船尾灯1個を掲げる・最も見えやすい場所に球形の形象物二個又はこれに類似した形象物二個を垂直線上に掲げる",
    "「操縦性能制限船」とは、次に掲げる作業その他の船舶の操縦性能を制限する作業に従事しているため他の船舶の進路を避けることができない船舶をいう。 <br>航路標識、海底電線又は海底パイプラインの敷設、保守又は引揚げ<br>しゆんせつ、測量その他の水中作業<br>航行中における補給、人の移乗又は貨物の積替え<br>航空機の発着作業<br>掃海作業<br>船舶及びその船舶に引かれている船舶その他の物件がその進路から離れることを著しく制限するえい航作業",
    "航行中又はびよう泊中の操縦性能制限船は、次に定めるところにより、灯火又は形象物を表示しなければならない。<br>・最も見えやすい場所に白色の全周灯一個を掲げ、かつ、その垂直線上の上方及び下方にそれぞれ紅色の全周灯一個を掲げること。<br>・対水速力を有する場合は、マスト灯二個（長さ五十メートル未満の操縦性能制限船にあつては、マスト灯一個。第四項第二号において同じ。）及びげん灯一対（長さ二十メートル未満の操縦性能制限船にあつては、げん灯一対又は両色灯一個。同号において同じ。）を掲げ、かつ、できる限り船尾近くに船尾灯一個を掲げること。<br>・最も見えやすい場所にひし形の形象物一個を掲げ、かつ、その垂直線上の上方及び下方にそれぞれ球形の形象物一個を掲げること。",
    "二隻の動力船が互いに進路を横切る場合において衝突するおそれがあるときは、他の動力船を右げん側に見る動力船は、当該他の動力船の進路を避けなければならない。この場合において、他の動力船の進路を避けなければならない動力船は、やむを得ない場合を除き、当該他の動力船の船首方向を横切つてはならない。",
    "・航行中の船舶（漁ろうに従事している船舶を除く。）は、狭い水道等において漁ろうに従事している船舶の進路を避けなければならない。ただし、この規定は、漁ろうに従事している船舶が狭い水道等の内側を航行している他の船舶の通航を妨げることができることとするものではない。<br>・航行中の船舶は、通航路において漁ろうに従事している船舶の進路を避けなければならない。ただし、この規定は、漁ろうに従事している船舶が通航路をこれに沿つて航行している他の船舶の通航を妨げることができることとするものではない。<br>・航行中の動力船は、次に掲げる船舶の進路を避けなければならない。　運転不自由船　操縦性能制限船　漁ろうに従事している船舶　帆船<br>・航行中の漁ろうに従事している船舶は、できる限り、次に掲げる船舶の進路を避けなければならない。　運転不自由船　操縦性能制限船",
    "狭い水道等において、追い越される船舶が自船を安全に通過させるための動作をとらなければこれを追い越すことができない場合は、汽笛信号を行うことにより追越しの意図を示さなければならない。この場合において、当該追い越される船舶は、その意図に同意したときは、汽笛信号を行うことによりそれを示し、かつ、当該追越し船を安全に通過させるための動作をとらなければならない。",
    "東京湾、伊勢湾、瀬戸内海",
    "洲崎灯台から剣埼灯台まで引いた線の内側",
    "大山三角点から石鏡灯台まで引いた線、立馬埼灯台から佐久島南端まで引いた線及び同地点から羽豆岬まで引いた線の内側",
    "紀伊日ノ御埼灯台から蒲生田岬灯台まで引いた線及び佐田岬灯台から関埼灯台まで引いた線と関門港で囲まれる範囲",
    "全長50メートル以上の船舶。ただし、海洋の調査その他の用務を行なうための船舶で法第四条本文の規定による交通方法に従わないで航行することがやむを得ないと当該用務が行なわれる海域を管轄する海上保安部の長が認めたものが航行しようとするとき、および、海難を避けるため又は人命若しくは他の船舶を救助するためやむを得ない事由があるときは、この限りでない",
    "汽笛を備えている船舶または総トン数100トン以上の船舶で航路外から航路に入り、航路から航路外に出、又は航路を横断しようとする船舶",
    "備讃瀬戸東航路、備讃瀬戸北航路、備讃瀬戸南航路、宇高東航路、宇高西航、水島航路、来島海峡航路",
    "浦賀水道航路、中ノ瀬航路",
    "船舶は、浦賀水道航路をこれに沿つて航行するときは、同航路の中央から右の部分を航行しなければならない。ただし、航行し、又は停留している船舶（巨大船を除く。）は、浦賀水道航路をこれに沿つて航行し、同航路から中ノ瀬航路に入ろうとしている巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。",
    "船舶は、中ノ瀬航路をこれに沿つて航行するときは、北の方向に航行しなければならない。ただし、航行し、又は停留している船舶（巨大船を除く。）は、浦賀水道航路をこれに沿つて航行し、同航路から中ノ瀬航路に入ろうとしている巨大船と衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。",
    "船舶は、伊良湖水道航路をこれに沿つて航行するときは、できる限り、同航路の中央から右の部分を航行しなければならない。ただし、伊良湖水道航路をこれに沿つて航行している船舶（巨大船を除く。）は、同航路をこれに沿つて航行している巨大船と行き会う場合において衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。",
    "船舶は、港内においては、防波堤、ふとうその他の工作物の突端又は停泊船舶を右げんに見て航行するときは、できるだけこれに近寄り、左げんに見て航行するときは、できるだけこれに遠ざかつて航行しなければならない。",
    "他の船舶に危険を及ぼさないような速力で航行しなければならない。",
    "視界制限状態にある水域、またはその付近における船舶の信号",
    "航行中の動力船は、対水速力を有する場合は、二分を超えない間隔で長音を一回鳴らすことにより汽笛信号を行わなければならない。<br>航行中の動力船は、対水速力を有しない場合は、約二秒の間隔の二回の長音を二分を超えない間隔で鳴らすことにより汽笛信号を行わなければならない。",
    "航行中の船舶（帆船、漁ろうに従事している船舶、運転不自由船、操縦性能制限船及び喫水制限船（他の動力船に引かれているものを除く。）並びに他の船舶を引き、及び押している動力船に限る。）は、二分を超えない間隔で、長音一回に引き続く短音二回を鳴らすことにより汽笛信号を行わなければならない。",
    "乗組員がいる場合は、二分を超えない間隔で、長音一回に引き続く短音三回を鳴らすことにより汽笛信号を行わなければならない。この場合において、その汽笛信号は、できる限り、引いている動力船が行う汽笛信号の直後に行わなければならない",
    "・びよう泊中の長さ百メートル以上の船舶は、その前部において、一分を超えない間隔で急速に号鐘を約五秒間鳴らし、かつ、その後部において、その直後に急速にどらを約五秒間鳴らさなければならない。この場合において、その船舶は、接近してくる他の船舶に対し自船の位置及び自船との衝突の可能性を警告する必要があるときは、順次に短音一回、長音一回及び短音一回を鳴らすことにより汽笛信号を行うことができる。<br>・びよう泊中の長さ百メートル未満の船舶は、一分を超えない間隔で急速に号鐘を約五秒間鳴らさなければならない。<br>・びよう泊中の漁ろうに従事している船舶及び操縦性能制限船は、二分を超えない間隔で、長音一回に引き続く短音二回を鳴らすことにより汽笛信号を行わなければならない。",
    "・乗り揚げている長さ百メートル以上の船舶は、その前部において、一分を超えない間隔で急速に号鐘を約五秒間鳴らすとともにその直前及び直後に号鐘をそれぞれ三回明確に点打し、かつ、その後部において、その号鐘の最後の点打の直後に急速にどらを約五秒間鳴らさなければならない。この場合において、その船舶は、適切な汽笛信号を行うことができる。（※モールス信号のU等）<br>・乗り揚げている長さ百メートル未満の船舶は、一分を超えない間隔で急速に号鐘を約五秒間鳴らすとともにその直前及び直後に号鐘をそれぞれ三回明確に点打しなければならない。",
    "この法律の規定により二隻の船舶のうち一隻の船舶が他の船舶の進路を避けなければならない場合は、当該他の船舶は、その針路及び速力を保たなければならない。  <br>２　前項の規定により針路及び速力を保たなければならない船舶（以下この条において「保持船」という。）は、避航船がこの法律の規定に基づく適切な動作をとつていないことが明らかになつた場合は、同項の規定にかかわらず、直ちに避航船との衝突を避けるための動作をとることができる。この場合において、これらの船舶について第十五条第一項の規定の適用があるときは、保持船は、やむを得ない場合を除き、針路を左に転じてはならない。<br>３　保持船は、避航船と間近に接近したため、当該避航船の動作のみでは避航船との衝突を避けることができないと認める場合は、第一項の規定にかかわらず、衝突を避けるための最善の協力動作をとらなければならない。",
    "・漁ろうに従事している船舶<br>・工事又は作業を行つているため接近してくる他の船舶の進路を避けることが容易でない国土交通省令で定める船舶で国土交通省令で定めるところにより灯火又は標識を表示しているもの",
    "全長200メートル以上の船舶をいう。",
    "少なくとも二海里の視認距離を有し、一定の間隔で毎分百八十回以上二百回以下のせん光を発する緑色の全周灯一個",
    "その直径が〇・六メートル以上であり、その高さが直径の二倍である黒色の円筒形の形象物二個で一・五メートル以上隔てて垂直線上に連掲されたもの",
    "・火薬類をその数量が、爆薬にあつては80トン以上）積載する総トン数300トン以上の船舶<br>・ばら積みの高圧ガスで引火性のものを積載する総トン数1000トン以上の船舶<br>・ばら積みの引火性液体類を積載する総トン数1000トン以上の船舶<br>・有機過酸化物（その数量が二百トン以上であるものに限る。）を積載する総トン数300トン以上の船舶<br>・上記の火薬類、高圧ガス、引火性液体類及び有機過酸化物には、船舶に積載しているこれらの物で当該船舶の使用に供するものは含まないものとする。<br>・上記の危険物を積載していた総トン数1000トン以上の船舶で当該危険物を荷卸し後ガス検定を行い、火災又は爆発のおそれのないことを船長が確認していないものは、法の適用については、その危険物を積載している危険物積載船とみなす。",
    "少なくとも二海里の視認距離を有し、一定の間隔で毎分百二十回以上百四十回以下のせん光を発する紅色の全周灯一個",
    "縦に上から国際信号旗の第一代表旗及びＢ旗",
    "（火災警報）第二十九条<br>特定港内にある船舶であつて汽笛又はサイレンを備えるものは、当該船舶に火災が発生したときは、航行している場合を除き、火災を示す警報として汽笛又はサイレンをもつて長音（海上衝突予防法第三十二条第三項の長音をいう。）を五回吹き鳴らさなければならない。<br>２　前項の警報は、適当な間隔をおいて繰り返さなければならない。",
    "（停泊の制限）第六条<br>船舶は、港内においては、次に掲げる場所にみだりにびょう泊又は停留してはならない。<br>一　ふ頭、桟橋、岸壁、係船浮標及びドックの付近<br>二　河川、運河その他狭い水路及び船だまりの入口付近",
    "消防船その他次に掲げる用務で緊急に処理することを要するものを行うための船舶で、これを使用する者の申請に基づきその者の住所地を管轄する管区海上保安本部長が指定したものとする。<br>一　消防、海難救助その他救済を必要とする場合における援助<br>二　船舶交通に対する障害の除去<br>三　海洋の汚染の防除<br>四　犯罪の予防又は鎮圧<br>五　犯罪の捜査<br>六　船舶交通に関する規制<br>七　前各号に掲げるもののほか、人命又は財産の保護、公共の秩序の維持その他の海上保安庁長官が特に公益上の必要があると認めた用務",
    "・少なくとも二海里の視認距離を有し、一定の間隔で毎分百八十回以上二百回以下のせん光を発する紅色の全周灯<br>・頂点を上にした紅色の円すい形の形象物でその底の直径が〇・六メートル以上、その高さが〇・五メートル以上であるもの",
    "全長160mメートル以上の船舶",
    " ・視界の状態<br>・船舶交通のふくそうの状況<br>・自船の停止距離、旋回性能その他の操縦性能<br>・夜間における陸岸の灯火、自船の灯火の反射等による灯光の存在<br>・風、海面及び海潮流の状態並びに航路障害物に接近した状態<br>・自船の喫水と水深との関係<br>・自船のレーダーの特性、性能及び探知能力の限界<br>・使用しているレーダーレンジによる制約<br>・海象、気象その他の干渉原因がレーダーによる探知に与える影響<br>・適切なレーダーレンジでレーダーを使用する場合においても小型船舶及び氷塊その他の漂流物を探知することができないときがあること。<br>・レーダーにより探知した船舶の数、位置及び動向<br>・自船と付近にある船舶その他の物件との距離をレーダーで測定することにより視界の状態を正確に把握することができる場合があること。",
    "直ちに急速に短音を五回以上鳴らすことにより汽笛信号を行わなければならない。この場合において、その汽笛信号を行う船舶は、急速にせん光を五回以上発することにより発光信号を行うことができる。" ,
    "船舶は、伊良湖水道航路をこれに沿つて航行するときは、できる限り、同航路の中央から右の部分を航行しなければならない。<br>伊良湖水道航路をこれに沿つて航行している船舶（巨大船を除く。）は、同航路をこれに沿つて航行している巨大船と行き会う場合において衝突するおそれがあるときは、当該巨大船の進路を避けなければならない。",
    "・視程が千メートルを超え二千メートル以下の状態で、巨大船、特別危険物積載船又は長大物件えい航船等が航路を航行する場合<br>・視程が千メートル以下の状態で、巨大船、総トン数一万トン以上の危険物積載船又は長大物件えい航船等が航路を航行する場合",
    "船舶は、航路内においては、次に掲げる場合を除いては、投びようし、又はえい航している船舶を放してはならない。<br>・海難を避けようとするとき。<br>・運転の自由を失つたとき。<br>・人命又は急迫した危険のある船舶の救助に従事するとき。<br>・第三十一条の規定による港長の許可を受けて工事又は作業に従事するとき<br><br>航路外から航路に入り、又は航路から航路外に出ようとする船舶は、航路を航行する他の船舶の進路を避けなければならない。<br>・船舶は、航路内においては、並列して航行してはならない。<br>・船舶は、航路内において、他の船舶と行き会うときは、右側を航行しなければならない。<br>・船舶は、航路内においては、他の船舶を追い越してはならない。",
    "巨大船<br>巨大船以外の船舶であつて、その長さが航路ごとに国土交通省令で定める長さ以上のもの<br>危険物積載船（原油、液化石油ガスその他の国土交通省令で定める危険物を積載している船舶で総トン数が国土交通省令で定める総トン数以上のものをいう。以下同じ。）<br>船舶、いかだその他の物件を引き、又は押して航行する船舶（当該引き船の船首から当該物件の後端まで又は当該押し船の船尾から当該物件の先端までの距離が航路ごとに国土交通省令で定める距離以上となる場合に限る。）",
    "航路を航行しようとするときは、船長は、あらかじめ、当該船舶の名称、総トン数及び長さ、当該航路の航行予定時刻、当該船舶との連絡手段その他の国土交通省令で定める事項を海上保安庁長官に通報しなければならない。通報した事項を変更するときも、同様とする。",
    "水島航路では長さ70メートル、伊良湖水道航路では長さ130メートル。それ以外の航路では長さ160メートル。",
    "明石港の区域外に出、明石海峡航路を横断し、岩屋港の区域に入ろうとする船舶の信号。または、岩屋港の区域外に出、明石海峡航路を横断し、明石港の区域に入ろうとする船舶の信号。",
    "海難を避けるため又は人命若しくは他の船舶を救助するためやむを得ない事由があるとき",
    "明石港の区域外に出た時から明石海峡航路外に出た時までの間第一代表旗の下にＣ旗を表示すること。または淡路島松帆埼に並航した時から明石海峡航路外に出た時までの間第一代表旗の下にＣ旗を表示すること。",
    "第一代表旗は航路外から航路に入ること。<br>第二代表旗は航路から航路外に出ること。<br>Pは左転、Sは右転、Cは横断を表す。",
    "指定錨地がある港は特定港。対象船舶は、総トン数500トン（関門港若松区においては、総トン数300トン）以上の船舶。",
    "京浜港 東京西航路<br>名古屋港 東航路 西航路<br>関門港 関門航路<br>広島港 広島航路",
    "行えない。海上衝突予防法の追越し信号は右から追越すときは長音2回に続く単音1回、左から追越すときは長音2回に続く単音2回である。港則法では右から追越すときは長音1回に続く単音1回、左から追越すときは長音1回に続く単音2回である。<br>港則法の追越しは相手船に協力動作を求めない点で予防法とは異なる。"
];

const reset = document.getElementById("reset");
const view = document.getElementById("view");
let i;

reset.addEventListener("click", function (event) {
    event.preventDefault();
    set_new();
});

function set_new(){
    i = Math.floor(Math.random() * question.length);
    let h = question[i]
    document.getElementById("Question").innerHTML = h;
    let j = "";
    document.getElementById("Answer").innerHTML = j;
}

view.addEventListener("click", function (event) {
    event.preventDefault();
    let j = answer[i];
    document.getElementById("Answer").innerHTML = j;
});

set_new();
