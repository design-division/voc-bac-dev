$(document).ready(function () {
  /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # #  LIST ARROWS   # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */

  const listSections = document.querySelectorAll(".user-items-list");

  listSections.forEach((section) => {
    const title = section.querySelector(".list-section-title");
    const arrowsWrapper = section.querySelector(".arrows-bottom-wrapper");
    if (title && arrowsWrapper) {
      arrowsWrapper.prepend(title);
    }
  });

  /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # #  SIMPLE LISTS  # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */

  $('section[id*="simple-list"] .user-items-list-simple .list-item').each(function () {
    var $this = $(this);
    var title = $this.find(".list-item-content__title");
    var media = $this.find(".list-item-media");

    media.append(title);
  });
});
