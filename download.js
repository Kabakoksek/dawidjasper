function bindy() {
	let request = new XMLHttpRequest();
	request.open('GET', 'download/download.txt', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    let paragraphs = request.responseText.split('\n');
		
	    let html = '';
	    for (let i = 0; i < paragraphs.length; i++) {
	      html += `<a href="download/sound/${paragraphs[i]}.mp3" download><p class="bindy">${paragraphs[i]}</p></a>`;
	    }
		
	    document.getElementById('bindy').innerHTML = html;
	  } else {
	    console.error('An error occurred while loading the file.');
	  }
	};

	request.onerror = function() {
	  console.error('An error occurred while loading the file.');
	};

	request.send();
}