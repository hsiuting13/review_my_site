const buttons = [
  {
    id: "google_review_button",
    url: "https://g.page/r/CRMVfUX2SKt2EBM/review",
  },
  {
    id: "facebook_review_button",
    url: "https://m.facebook.com/people/PHO-baguette-restaurant/61550818412644/",
  },
  {
    id: "yelp_review_button",
    url: "https://www.yelp.com/writeareview/biz/0-y94KO_pjaVjJMb68FVdw?return_url=%2Fbiz%2F0-y94KO_pjaVjJMb68FVdw&review_origin=biz-details-war-button",
  },
];

buttons.forEach((button) => {
  document.getElementById(button.id).addEventListener("click", () => {
    window.location.href = button.url;
  });
});
