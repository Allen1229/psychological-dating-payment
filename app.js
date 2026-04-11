// 狀態設定
let currentQuestionIndex = 0;
let scores = {};

// 抓取 DOM
const landingView = document.getElementById('landing-view');
const questionView = document.getElementById('question-view');
const resultView = document.getElementById('result-view');

const titleEl = document.getElementById('quiz-title');
const descEl = document.getElementById('quiz-desc');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// 結果網頁元件
const resultImage = document.getElementById('result-image');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');
const loadingSpinner = document.getElementById('loading-spinner');
const resultContent = document.getElementById('result-content');
const toastInfo = document.getElementById('toast');

// 廣告相關
const adModal = document.getElementById('ad-modal');
const adCloseBtn = document.getElementById('ad-close-btn');
const adTimer = document.getElementById('ad-timer');
const adIcon = document.getElementById('ad-icon');
const adTitle = document.getElementById('ad-title');
const adDesc = document.getElementById('ad-desc');
const adActionBtn = document.getElementById('ad-action-btn');
let adInterval;

// 初始化
function init() {
    titleEl.textContent = quizData.title;
    descEl.textContent = quizData.description;
    
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', showAdModal);
    
    adCloseBtn.addEventListener('click', () => {
        adModal.classList.add('hidden');
        resetQuiz();
    });
    
    bindShareButtons();
}

function startQuiz() {
    currentQuestionIndex = 0;
    scores = {};
    Object.keys(quizData.results).forEach(key => scores[key] = 0);
    
    switchView(landingView, questionView);
    renderQuestion();
}

function renderQuestion() {
    optionsContainer.innerHTML = '';
    const q = quizData.questions[currentQuestionIndex];
    questionTextEl.textContent = q.text;
    
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => handleOptionClick(opt.scores);
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(optionScores) {
    for (let key in optionScores) {
        if(scores[key] !== undefined) {
            scores[key] += optionScores[key];
        }
    }
    
    questionView.style.opacity = '0';
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            renderQuestion();
            questionView.style.opacity = '1';
        } else {
            calculateResult();
        }
    }, 300);
}

function calculateResult() {
    questionView.style.opacity = '1'; 
    switchView(questionView, resultView);
    
    loadingSpinner.style.display = 'flex';
    resultContent.classList.add('hidden');
    resultContent.classList.remove('active');
    
    const winnerKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const winnerData = quizData.results[winnerKey];
    
    if(winnerData.image) resultImage.src = winnerData.image;
    resultTitle.textContent = winnerData.title;
    resultDesc.innerHTML = winnerData.description;
    
    window.currentResultTitle = winnerData.title;
    
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        resultContent.classList.remove('hidden');
        resultContent.classList.add('active'); 
    }, 1500);
}

function showAdModal() {
    if (!quizData.ads || quizData.ads.length === 0) {
        resetQuiz();
        return;
    }
    
    const randomAd = quizData.ads[Math.floor(Math.random() * quizData.ads.length)];
    adTitle.textContent = randomAd.title;
    adDesc.textContent = randomAd.description;
    adIcon.src = randomAd.icon;
    adIcon.onclick = () => window.open(randomAd.url, '_blank');
    adActionBtn.onclick = () => window.open(randomAd.url, '_blank');

    adModal.classList.remove('hidden');
    adCloseBtn.classList.add('hidden');
    adTimer.classList.remove('hidden');
    
    let timeLeft = 5;
    adTimer.textContent = timeLeft;
    
    clearInterval(adInterval);
    adInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            adTimer.textContent = timeLeft;
        } else {
            clearInterval(adInterval);
            adTimer.classList.add('hidden');
            adCloseBtn.classList.remove('hidden');
        }
    }, 1000);
}

function resetQuiz() {
    resultContent.classList.remove('active');
    setTimeout(() => {
        switchView(resultView, landingView);
    }, 300);
}

function switchView(hideEl, showEl) {
    hideEl.classList.remove('active');
    setTimeout(() => {
        hideEl.classList.add('hidden');
        showEl.classList.remove('hidden');
        void showEl.offsetWidth; 
        showEl.classList.add('active');
    }, 400); 
}

function bindShareButtons() {
    const shareText = () => `男女約會結帳潛意識測驗！我在感情中是【${window.currentResultTitle}】！你覺得約會該誰請客？快來測測你的底線！`;
    const shareUrl = window.location.href;

    document.getElementById('share-fb-link').addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    });

    document.getElementById('share-threads').addEventListener('click', () => {
        window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(shareText() + "\n" + shareUrl)}`, '_blank');
    });

    document.getElementById('share-line').addEventListener('click', () => {
        window.open(`https://line.me/R/msg/text/?${encodeURIComponent(shareText() + "\n" + shareUrl)}`, '_blank');
    });

    document.getElementById('share-ig').addEventListener('click', () => {
        navigator.clipboard.writeText(shareText() + "\n" + shareUrl).then(() => {
            showToast('已複製測驗結果！快去 IG 限動貼上吧！');
        }).catch(() => {
            showToast('複製失敗...');
        });
    });

    const nativeShare = document.getElementById('share-fb'); // re-using id for native share due to structure
    if (nativeShare) {
        nativeShare.addEventListener('click', async () => {
            if (navigator.share) {
                try { await navigator.share({ title: '約會結帳測驗', text: shareText(), url: shareUrl }); } catch (e) {}
            } else {
                showToast('裝置不支援原生分享');
            }
        });
    }
}

function showToast(msg) {
    toastInfo.textContent = msg;
    toastInfo.classList.remove('hidden');
    setTimeout(() => {
        toastInfo.classList.add('hidden');
    }, 3000);
}

window.onload = init;
