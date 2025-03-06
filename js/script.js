function startDivination() {
    const horns = document.querySelectorAll('.horn');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    
    // 重置状态
    resultDiv.style.display = 'none';
    horns.forEach(horn => {
        horn.style.transform = 'translateY(0) rotate(0deg)';
        horn.classList.remove('spinning');
    });

    // 开始动画
    horns.forEach((horn, index) => {
        setTimeout(() => {
            horn.classList.add('spinning');
            const xPos = index === 0 ? -100 : 100;
            horn.style.transform = `translateX(${xPos}px) translateY(150px)`;
        }, index * 200);
    });

    // 显示结果
    setTimeout(() => {
        const results = ['圣卦', '阳卦', '阴卦'];
        const result = results[Math.floor(Math.random() * results.length)];
        
        resultDiv.style.display = 'block';
        resultText.innerHTML = getInterpretation(result);
        
        // 根据结果改变颜色
        resultDiv.style.backgroundColor = getColorByResult(result);
    }, 2500);
}

function getInterpretation(result) {
    const interpretations = {
        '圣卦': '大吉之兆！神明认可，所求之事可成。建议积极行动，把握良机。',
        '阳卦': '平顺之兆。事情发展平稳，需保持现状，静观其变。',
        '阴卦': '谨慎之兆。建议三思而后行，暂时不宜做重大决定。'
    };
    return `${result}：${interpretations[result]}`;
}

function getColorByResult(result) {
    const colors = {
        '圣卦': '#27ae60',
        '阳卦': '#f1c40f',
        '阴卦': '#7f8c8d'
    };
    return colors[result];
}
