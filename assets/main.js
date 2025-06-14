function injectVisitorTable() {
  const main = document.createElement('main');
  main.id = "visitorMain";
  main.style.display = "none"; 

  main.innerHTML = `
    <div id="tableWrapper">
      <table id="visitorTable">
        <thead>
          <tr>
            <th class="row-number">#</th>
            <th>IP Address<br><input class="filter-input" data-col="1" placeholder="IP" /></th>
            <th>Visit Time<br><input class="filter-input" data-col="2" placeholder="Time" /></th>
            <th>Method<br><input class="filter-input" data-col="3" placeholder="Method" /></th>
            <th>Referrer<br><input class="filter-input" data-col="4" placeholder="Referrer" /></th>
            <th>Device<br><input class="filter-input" data-col="5" placeholder="Device" /></th>
            <th>OS<br><input class="filter-input" data-col="6" placeholder="OS" /></th>
            <th>Browser<br><input class="filter-input" data-col="7" placeholder="Browser" /></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;

  const container = document.getElementById("mainContent") || document.body;
  container.appendChild(main);
}
