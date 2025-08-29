function checkAllOpenedAndSetHeight() {
  const width = Math.floor(window.innerWidth);
  const faqSection = document.querySelector(".faq_section");
  const plusImgs = Array.from(faqSection.querySelectorAll(".plus_img"));

  const allPlusVisible = Array.from(faqSection.querySelectorAll(".plus_img")).every(
    (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
  );

  if (width <= 350) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;
    if (count === 1) {
      faqSection.style.height = "560px";
    } else if (count === 2) {
      faqSection.style.height = "620px";
    } else if (count === 3) {
      faqSection.style.height = "680px";
    } else if (count === 4) {
      faqSection.style.height = "740px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (width > 350 && width <= 375) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;
    if (count === 1) {
      faqSection.style.height = "500px";
    } else if (count === 2) {
      faqSection.style.height = "560px";
    } else if (count === 3) {
      faqSection.style.height = "640px";
    } else if (count === 4) {
      faqSection.style.height = "710px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (width > 375 && width <= 500) {
    let count = plusImgs.filter(
      (img) => img.style.display !== "none" && window.getComputedStyle(img).display !== "none"
    ).length;

    if (count === 1) {
      faqSection.style.height = "610px";
    } else if (count === 2) {
      faqSection.style.height = "680px";
    } else if (count === 3) {
      faqSection.style.height = "750px";
    } else if (count === 4) {
      faqSection.style.height = "800px";
    } else {
      faqSection.style.height = "";
    }
    return;
  }

  if (!allPlusVisible) {
    faqSection.style.height = "";
    return;
  }

  if (width <= 1040 && width >= 851) {
    faqSection.style.height = "864px";
  } else if (width <= 850 && width >= 501) {
    faqSection.style.height = "950px";
  } else if (width <= 500 && width >= 376) {
    faqSection.style.height = "600px";
  }
}

document.querySelectorAll(".q_flex").forEach(function (q_flex) {
  const minus = q_flex.querySelector(".minus_img");
  const plus = q_flex.querySelector(".plus_img");
  const answer = q_flex.nextElementSibling;

  minus.addEventListener("click", function () {
    minus.style.display = "none";
    plus.style.display = "block";
    answer.style.display = "block";
    checkAllOpenedAndSetHeight();
  });

  plus.addEventListener("click", function () {
    minus.style.display = "block";
    plus.style.display = "none";
    answer.style.display = "none";
    checkAllOpenedAndSetHeight();
  });
});
