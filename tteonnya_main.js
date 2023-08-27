document.addEventListener("DOMContentLoaded", function () {
  let successCount = 0; // 성공 횟수 변수
  let failureCount = 0; // 실패 횟수 변수

  const successButton = document.getElementById("success-button");
  const failureButton = document.getElementById("failure-button");
  const statsButton = document.getElementById("stats-button");
  const resetButton = document.getElementById("reset-button");

  const successCountSpan = document.getElementById("success-count");
  const failureCountSpan = document.getElementById("failure-count");
  const successRateSpan = document.getElementById("success-rate");

  // '성공' 버튼 클릭 시
  successButton.addEventListener("click", function () {
    successCount++;
    updateStats();
  });

  // '실패' 버튼 클릭 시
  failureButton.addEventListener("click", function () {
    failureCount++;
    updateStats();
  });

  // '초기화' 버튼 클릭 시
  resetButton.addEventListener("click", function () {
    failureCount = 0;
    successCount = 0;
    updateStats();
  })

  function updateStats() {
    const totalCount = successCount + failureCount;
    const successRate = totalCount === 0 ? 0 : (successCount / totalCount) * 100;

    statsButton.textContent = `${successRate.toFixed(2)}%`;
    successCountSpan.textContent = `${successCount}`;
    failureCountSpan.textContent = `${failureCount}`;
    successRateSpan.textContent = `${successRate.toFixed(2)}%`;
  }
});
