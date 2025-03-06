const results = {
    '圣卦': {
        hexagram: '䷀',
        color: '#27ae60',
        interpretation: '乾为天，刚健中正。',
        advice: '宜：开拓创新\n忌：固步自封',
        classic: '《周易·乾卦》：元亨利贞。大明终始，六位时成。'
    },
    '阳卦': {
        hexagram: '䷊',
        color: '#f1c40f', 
        interpretation: '天地交泰，阴阳和合。',
        advice: '宜：稳中求进\n忌：急功近利',
        classic: '《周易·泰卦》：小往大来，吉亨。'
    },
    '阴卦': {
        hexagram: '䷁',
        color: '#7f8c8d',
        interpretation: '坤厚载物，德合无疆。',
        advice: '宜：厚积薄发\n忌：贸然行动',
        classic: '《周易·坤卦》：君子以厚德载物。'
    }
};

function startDivination() {
    const horns = document.querySelectorAll('.horn');
    const btn = document.querySelector('.start-btn');
    
    // 禁用按钮
    btn.disabled = true;
    btn.style.opacity = '0.7';
    
    // 启动动画
    horns.forEach(horn => {
        horn.style.animation = 'none';
        horn.offsetHeight; // 触发重绘
        horn.classList.add('horn-animate');
    });

    // 获取结果
    setTimeout(() => {
        const resultKeys = Object.keys(results);
        const resultName = resultKeys[Math.floor(Math.random() * resultKeys.length)];
        showResult(results[resultName]);
        btn.disabled = false;
        btn.style.opacity = '1';
    }, 2000);
}

function showResult(result) {
    const modal = document.getElementById('modal');
    const content = `
        <div class="hexagram" style="color:${result.color}">${result.hexagram}</div>
        <div class="interpretation">
            <h3>${result.interpretation}</h3>
        </div>
        <div class="advice">
            <p>${result.advice.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="classic">${result.classic}</div>
    `;
    
    document.getElementById('result').innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    // 重置牛角位置
    document.querySelectorAll('.horn').forEach(horn => {
        horn.classList.remove('horn-animate');
    });
}

// 点击外部关闭弹窗
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
