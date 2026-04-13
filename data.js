const quizData = {
    title: "約會結帳潛意識測驗",
    description: "一段感情能不能長久，看『付錢的那一刻』最準？男女約會吃完飯，這筆單究竟該誰買？測出你在愛情裡隱藏的真實性格！",
    questions: [
        {
            text: "剛認識的對象約你在一家價位中上的餐酒館見面，點餐時你會：",
            options: [
                { text: "自動點便宜的，不想給對方請客的壓力", scores: { typeA: 1, typeF: 1 } },
                { text: "點自己想吃的，反正打算各付各的", scores: { typeB: 1, typeF: 0 } },
                { text: "點想吃的，並期待對方主動埋單展現風度", scores: { typeC: 1, typeE: 1 } },
                { text: "提議點餐點一起分享，結帳時再算", scores: { typeD: 1, typeB: 0 } }
            ]
        },
        {
            text: "原本氣氛愉快的晚餐到了尾聲，服務生剛好把帳單遞過來放在桌上，這時你會：",
            options: [
                { text: "馬上拿起帳單，拿出信用卡準備結帳", scores: { typeE: 1, typeA: 1 } },
                { text: "靜靜看著對方，看他/她的反應再決定", scores: { typeC: 1, typeF: 1 } },
                { text: "直接問「那這餐我們一人一半可以嗎？」", scores: { typeB: 1, typeD: 1 } },
                { text: "假裝去洗手間，順便把帳單偷偷結掉", scores: { typeA: 1, typeE: 1 } }
            ]
        },
        {
            text: "如果對方主動幫你付了第一餐，你接下來的反應會是？",
            options: [
                { text: "覺得很感動記在心裡，認為對方非常有心", scores: { typeC: 1, typeE: 0 } },
                { text: "覺得不好意思，提議下一攤換你請客", scores: { typeD: 1, typeF: 1 } },
                { text: "無法接受欠人情，立刻把一半現金塞給對方", scores: { typeB: 1, typeA: 0 } },
                { text: "覺得理所當然，約會本來就該展現大方", scores: { typeE: 1, typeC: 1 } }
            ]
        },
        {
            text: "你覺得「約會絕對 AA 制」代表著什麼樣的感情觀？",
            options: [
                { text: "代表雙方平等獨立，互相不虧欠", scores: { typeB: 1, typeF: 1 } },
                { text: "感覺有點計較，把感情算得太過於清楚", scores: { typeC: 1, typeA: 1 } },
                { text: "不強求精準 AA，能輪流互請最自然", scores: { typeD: 1, typeF: 1 } },
                { text: "總有一方願意多照顧對方，不用算太細", scores: { typeE: 1, typeA: 1 } }
            ]
        },
        {
            text: "約會對象其實經濟狀況比你好很多（例如是大企業主管），這時吃飯付錢你會？",
            options: [
                { text: "還是堅持要各出各的，不希望被看扁", scores: { typeB: 1, typeE: 0 } },
                { text: "順其自然讓對方請客，因為對方負擔得起", scores: { typeC: 1, typeF: 1 } },
                { text: "讓對方請主餐，自己主動出甜點或電影錢", scores: { typeD: 1, typeA: 1 } },
                { text: "不會在意階級，照樣自己全買單展現誠意", scores: { typeA: 1, typeE: 1 } }
            ]
        },
        {
            text: "在未來的長期感情裡，關於財務分配你最嚮往哪種狀態？",
            options: [
                { text: "誰賺得多誰就多付一點，能力決定一切", scores: { typeE: 1, typeA: 1 } },
                { text: "絕對的經濟獨立，連水電費也算得清清楚楚", scores: { typeB: 1, typeD: 0 } },
                { text: "共同基金制！大家每月存固定金額進去用", scores: { typeD: 1, typeB: 1 } },
                { text: "極度隨性～這次你付下次我付，不用明細", scores: { typeF: 1, typeC: 1 } }
            ]
        }
    ],
    ads: [
        {
            title: "明星3缺1",
            description: "台灣最多人玩16張麻將，1秒湊桌全真人線上打麻將！知名藝人正版授權，等你來+1。",
            icon: "https://www.gametower.com.tw/images/index/games/pic_iStar31.png",
            url: "https://www.gametower.com.tw/Games/FreePlay/Mj/star31/?utm_source=PSY-dating-payment&utm_medium=display&utm_campaign=mega_traffic_2026&utm_content=1rd_banner"
        },
        {
            title: "玩星派對",
            description: "全台第一休閒娛樂平台，收納各種類型的休閒遊戲讓您盡情暢玩！豐富的養成元素，培養專屬二次元角色。",
            icon: "https://www.gametower.com.tw/images/index/games/pic_pg.png",
            url: "https://www.gametower.com.tw/Games/PG/?utm_source=PSY-dating-payment&utm_medium=display&utm_campaign=mega_traffic_2026&utm_content=2rd_banner"
        }
    ],
    results: {
        typeA: {
            title: "霸氣總裁型",
            image: "./images/typea.png",
            description: "買單對你來說就是最直接的浪漫！你總是習慣照顧別人，覺得<span class='highlight'>為在乎的人花錢是一種愛的展現</span>。你不拘小節，霸氣側漏！"
        },
        typeB: {
            title: "絕對平權型",
            image: "./images/typeb.png",
            description: "算清楚不代表計較，而是你尊重這段關係！你深信<span class='highlight'>財務獨立，感情才能純粹</span>，極度討厭欠任何人哪怕是一點點的人情。"
        },
        typeC: {
            title: "傳統風度型",
            image: "./images/typec.png",
            description: "你非常重視約會的「儀式感」。你認為<span class='highlight'>主動買單是經典的浪漫與誠意</span>，被照顧也是理所當然的恩愛表現，感情對你來說不能太現實。"
        },
        typeD: {
            title: "互相輪流型",
            image: "./images/typed.png",
            description: "這次你付飯錢，下次我請看電影。你追求的是一種<span class='highlight'>互動中的默契與平衡</span>，既不傷感情，又能營造出「我們是一個團隊」的溫馨感。"
        },
        typeE: {
            title: "愛面子大器型",
            image: "./images/typee.png",
            description: "搶先結帳對你來說根本是膝跳反射！你習慣在眾人面前<span class='highlight'>展現大方與游刃有餘</span>，與其在那邊算零錢，不如整單自己吞來得痛快。"
        },
        typeF: {
            title: "隨性佛系型",
            image: "./images/typef.png",
            description: "誰帶錢包誰付啊，哪有差！你對金錢的觀念非常佛系，<span class='highlight'>不被數字綁架</span>，隨性過生活才是你的最高指導原則，跟你在一起完全沒壓力。"
        }
    }
};
