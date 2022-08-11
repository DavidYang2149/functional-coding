// 목표 (10시 3분까지)
// 1. 코드 읽기 - 09:45분까지

// 계산 만들기
// 카피 온 라이트
// 방어적 복사
// 구현 패턴?

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    let thisAmount = 0;

    thisAmount = getAmountByPlayType(play.type, perf.audience);

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === play.type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    result += `${play.name} : ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;
}

// 입력 : 
// 출력 : 
function getAmountByPlayType(playType, performanceAudience) {
  let thisAmount;

  switch (playType) {
    case 'tragedy': // 비극
      thisAmount = 40000;

      if (performanceAudience > 30) {
        thisAmount += 1000 * (performanceAudience - 30);
      }
      break;
    case 'comedy': // 희극
      thisAmount = 30000;

      if (performanceAudience > 20) {
        thisAmount += 10000 + 500 * (performanceAudience - 20);
      }
      thisAmount += 300 * performanceAudience;

      break;

    default:
      throw new Error(`알 수 없는 장르 : ${playType}`);
  }

  return thisAmount;
}

module.exports = {
  getAmountByPlayType,
  statement,
}