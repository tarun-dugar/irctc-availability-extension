chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request == "getAvailability") {
    let $trainNameElements = convertNodeListToArray(document.querySelectorAll('tbody .rf-dt-r .rf-dt-c:nth-child(2)'));
    let $trainClassesElements = convertNodeListToArray(document.querySelectorAll('.jClasses'));
    $trainClassesElements.forEach(($trainClassesElement) => {
      const $links = convertNodeListToArray($trainClassesElement.querySelectorAll('a'));
      clickLinks($links);
    });
  }
});

function clickLinks($links) {
  let index = 0;
  let clickLink = () => {
    $links[index].click();
    setTimeout(function() {
      const $availabilityTableBody = document.getElementById('j_idt357_body');
      const dates = convertNodeListToArray($availabilityTableBody
                      .querySelectorAll('table tbody tr:nth-child(1) td'))
                      .map(($date) => {
                        return $date.textContent.trim();
                      });
      const availabilities = convertNodeListToArray($availabilityTableBody
                      .querySelectorAll('table tbody tr:nth-child(2) td'))
                      .map(($availability) => {
                        return $availability.textContent.trim().split(/\r\n|\r|\n/g)[0];
                      });
      const totalFare = document.getElementById('enqpanelid1_body')
                          .querySelector('table tbody tr:nth-child(2) td:last-child')
                          .textContent;
      index += 1;
      console.log(dates);
      console.log(availabilities);
      console.log(totalFare);
      console.log(index);
      if (index < $links.length) {
        clickLink();
      }
    }, 200);
  }
  clickLink();
}

function convertNodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}
