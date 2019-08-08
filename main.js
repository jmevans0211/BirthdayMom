var card = document.querySelector('#card');
var gift1 = document.querySelector('#gift1');
var gift2 = document.querySelector('#gift2');

var section_1 = document.querySelector('#section_1');
var section_2 = document.querySelector('#section_2');
var section_3 = document.querySelector('#section_3');


card.addEventListener('click', showCard);
gift1.addEventListener('click', showGiftOne);
gift2.addEventListener('click', showGiftTwo);


function showCard() {
	section_1.insertAdjacentHTML('beforeend', `
  			<article class='insert card'>
  				<h3>Dear Mom,</h3>
  				<p>Happy Birthday! I am so proud of what
  				 you've been able to do over this past year. From
  				 tennis to changing careers to planning events for Catherine's 
  				 wedding, you've been killing it! I love you very very much, and hope you have 
  				a wonderful day and an even better year.</p>
  				<p>❤️,  Jeannie</p>
  			</article>`)
}

function showGiftOne() {
	section_2.insertAdjacentHTML('beforeend', `
		  			<article class='insert gift-co'>
  				<h2>All Inclusive Trip to Colorado</h2>
  				<h4>Transportation</h4>
  				<p>Non-stop flight to DIA</p>
  				<h4>Accomodation</h4>
  				<p>Boutique Hotel in Downtown Denver</p>
  				<h4>Activities</h4>
  				<ul>
  					<li>Drive into the mountains without any visibile cliffs</li>
  					<li>Museums</li>
  					<li>Botanic Gardens</li>
  					<li>Red Rocks Concert</li>
  				</ul>
  				<p><i>This will become possible once Jeannie has a big girl job!</i></p>
  			</article>`)
}

function showGiftTwo() {
	section_3.insertAdjacentHTML('beforeend', `
						<article class='insert gift-site'>
					<h2>Wendy Website</h2>
					<h4>Includes</h4>
					<ul>
						<li>Information about services</li>
						<li>Wendy Bio</li>
						<li>Contact Form</li>
						<li>Business Cards</li>
					</ul>
					<p><i>Talk to Jeannie about the specifics of making this happen!</i></p>
				</article>`)
}