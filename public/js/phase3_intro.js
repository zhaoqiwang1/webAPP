document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('alreadySubmitted') === 'true') {
    alert("请勿重复作答。");
  }
});


