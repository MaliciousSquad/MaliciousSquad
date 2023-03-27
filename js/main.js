/*!
 * Theme by OllieJW (https://olliejw.me)
 * License - https://olliejw.me/tos
 */
 

function staff(name, uuid, rank) {
  let staffTemplate = $("#staff-template").html()
    .replaceAll("{{ name }}", name)
    .replaceAll("{{ rank }}", rank)
	.replaceAll("{{ uuid }}", uuid)

  setTimeout(
    function() {
      $("#staff").append(staffTemplate)
    },500)
}
