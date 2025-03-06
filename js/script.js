function startDivination() {
    const horns = document.querySelectorAll('.horn');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    
    // 重置状态
    resultDiv.classList.remove('show');
    horns.forEach(horn => {
        horn.style.animation = 'none';
        void horn.offsetHeight; // 触发重绘
        horn.classList.remove('spinning');
    });

    // 开始动画
    horns.forEach((horn, index) => {
        setTimeout(() => {
            horn.classList.add('spinning');
        }, index * 200);
    });

    // 显示结果
    setTimeout(() => {
        const results = ['圣卦', '阳卦', '阴卦'];
        const result = results[Math.floor(Math.random() * results.length)];
        
        resultDiv.classList.add('show');
        resultText.innerHTML = getInterpretation(result);
        resultDiv.style.background = getColorByResult(result);
    }, 2500);
}

function getInterpretation(result) {
    const interpretations = {
        '圣卦': '✨ 大吉之兆！神明认可，所求之事可成。<br>建议：积极行动，把握良机，注意把握贵人运。',
        '阳卦': '🌤 平顺之兆。<br>趋势：事情发展平稳，需保持现状，静观其变。<br>注意：留意三个月后的转机',
        '阴卦': '🌙 谨慎之兆。<br>建议：三思而后行，重大决定宜暂缓<br>提示：可择吉日再卜'
    };
    return `<strong>${result}</strong><br>${interpretations[result]}`;
}

function getColorByResult(result) {
    const colors = {
        '圣卦': 'linear-gradient(135deg, #27ae60, #2ecc71)',
        '阳卦': 'linear-gradient(135deg, #f1c40f, #f39c12)',
        '阴卦': 'linear-gradient(135deg, #7f8c8d, #95a5a6)'
    };
    return colors[result];
}
