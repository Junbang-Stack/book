// 初始化模态框
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => e.target == modal && (modal.style.display = 'none');

function startDivination() {
    const btn = document.getElementById('startBtn');
    btn.disabled = true;
    btn.style.opacity = '0.6';
    
    const horns = document.querySelectorAll('.horn');
    horns.forEach(horn => {
        horn.style.animation = 'none';
        horn.offsetHeight; // 触发重绘
        horn.classList.remove('spinning');
    });

    // 高级动画处理
    anime({
        targets: '.horn',
        opacity: [1, 0],
        translateY: [0, 600],
        rotate: {
            value: ['0deg', '1440deg'],
            easing: 'easeInOutQuad'
        },
        duration: 1800,
        delay: anime.stagger(200),
        begin: () => {
            horns.forEach(horn => horn.classList.add('spinning'));
        }
    });

    // 显示结果
    setTimeout(() => {
        const results = {
            '圣卦': {
                interpretation: '✨ 大吉之兆！神明认可，所求之事可成。',
                advice: '宜：积极行动、把握机遇\n忌：犹豫不决、错失良机',
                classic: '《易经·乾卦》：元亨利贞。大哉乾元，万物资始，乃统天。',
                color: '#27ae60'
            },
            '阳卦': {
                interpretation: '🌤 平顺之兆，阴阳和合',
                advice: '宜：维持现状、观察时机\n忌：贸然行动、重大决策',
                classic: '《易经·泰卦》：天地交，泰。后以财成天地之道，辅相天地之宜。',
                color: '#f1c40f'
            },
            '阴卦': {
                interpretation: '🌙 谨慎之兆，潜龙勿用',
                advice: '宜：三思后行、积蓄力量\n忌：冒险投机、轻信他人',
                classic: '《易经·坤卦》：地势坤，君子以厚德载物。',
                color: '#7f8c8d'
            }
        };
        
        const resultKeys = Object.keys(results);
        const result = results[resultKeys[Math.floor(Math.random() * resultKeys.length)]];
        
        const resultHtml = `
            <div class="result-header" style="color: ${result.color}">
                <h3>${result.interpretation}</h3>
            </div>
            <div class="result-body">
                <p>${result.advice.replace(/\n/g, '<br>')}</p>
                <div class="classic-reference">
                    <h4>《易经》参考</h4>
                    <p>${result.classic}</p>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.getElementById('result-text').innerHTML = resultHtml;
        btn.disabled = false;
        btn.style.opacity = '1';
    }, 2000);
}
