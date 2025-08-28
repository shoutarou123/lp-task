document.querySelectorAll('.q_flex').forEach(function(q_flex) {
  const minus = q_flex.querySelector('.minus_img');
  const plus = q_flex.querySelector('.plus_img');
  const answer = q_flex.nextElementSibling;

  minus.addEventListener('click', function() {
    minus.style.display ='none';
    plus.style.display ='block';
    answer.style.display = 'block';
  });

  plus.addEventListener('click', function() {
    minus.style.display ='block';
    plus.style.display ='none';
    answer.style.display = 'none';
  });
});
