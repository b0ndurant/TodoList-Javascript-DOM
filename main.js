let i = 1;
let h2 = document.querySelector('h2');

listNotExist();

function addTable() {
	let name = document.getElementById("name").value;
	let quantity = document.getElementById("quantity").value

	if(name != '') {

		let valueUpper = name[0].toUpperCase() + name.slice(1);

		if (!document.querySelector('table')) {
			createTable();
			createTr(valueUpper, quantity);
			document.getElementById('container').lastElementChild.remove();
			btnDelete();
			countArticle();
		}
		else {
			createTr(valueUpper, quantity);
			countArticle();

		}
	}
}

function createTable() {
	let table = document.createElement('table');
	table.innerHTML = '<thead><tr><th scope="col">#</th><th scope="col">Fait</th><th scope="col">Article</th><th scope="col">Quantité</th><th scope="col">Actions</th></tr></thead>'
	if (document.body.getAttribute('class') == "dark-mode") {
		table.className = "table dark-mode";
	}
	else
	{
		table.className = "table";
	}
	document.querySelector('h2').after(table);
}

function createTr(valueUpper, quantity) {
	let table = document.querySelector('table');
	let tr = document.createElement('tr');
	tr.className = "list";
	tr.innerHTML = '<th scope="row">'+i+'</th><td><i class="fas fa-times"></i></td> <td>' + valueUpper +'</td><td>'+ quantity + '</td><td><i class="fas fa-trash-alt" onclick="remove(this)"></i></td>';
	tr.setAttribute('onclick','toggle(this)');
	table.append(tr);
	document.getElementById("myForm").reset();
	i++;
}

function toggle(context) {
	context.classList.toggle('line');
	let toDo = document.getElementsByClassName('line').length;
	let nbArticle = document.getElementsByTagName('tr').length - 1;
	if(document.querySelector('h4'))
		document.querySelector('h4').textContent = 'Article restant(s) : '+ (nbArticle - toDo) ;
}

function countArticle() {
	let nbArticle = document.getElementsByTagName('tr').length - 1;
	if (!document.querySelector('h3')) {
		let h3 = document.createElement('h3');
		let h4 = document.createElement('h4');
		h3.textContent = 'Nombre d\'article : '+ nbArticle;
		h4.textContent = 'Article restant : ' + nbArticle;
		h2.after(h3);
		h3.after(h4);
	}
	document.querySelector('h3').textContent = 'Nombre d\'article(s) : '+ nbArticle;
	document.querySelector('h4').textContent = 'Article restant(s) : '+ nbArticle;
}

function btnDelete() {
	let btnDelete = document.createElement('button');
	btnDelete.textContent = "Supprimer la liste";
	btnDelete.className = "delete btn btn-primary";
	btnDelete.setAttribute('onclick','allRemove()');
	document.getElementById('container').append(btnDelete);
}

function allRemove() {
	document.querySelector('table').remove();
	document.querySelector('h3').remove();
	document.querySelector('h4').remove();
	document.getElementById('container').lastElementChild.remove();
	listNotExist();
	i = 1;
}

function remove(context) {
	let countTr = document.getElementsByTagName('tr').length;
	let btnDelete = document.getElementById('container').lastElementChild;
	if(countTr == 2) {
		document.querySelector('table').remove();
		document.querySelector('h3').remove();
		document.querySelector('h4').remove();
		btnDelete.remove();
		listNotExist();
		i = 1;
	}
	else {
		(context.parentNode.parentNode.nextSibling ) ? i : i--;
		context.parentNode.parentNode.remove();
		let nbArticle = document.getElementsByTagName('tr').length - 1;
		document.querySelector('h3').textContent = 'Nombre d\'article(s) : '+ nbArticle;
	}
}

function darkMode() {
	document.body.classList.toggle('dark-mode');
	if (document.getElementsByTagName('table')[0]) {
		document.getElementsByTagName('table')[0].classList.toggle('dark-mode');
	}
}

function listNotExist() {
	if (document.getElementById('container').lastElementChild == document.querySelector('h2')) {
		let p = document.createElement('p');
		p.textContent = 'Aucune Liste Disponnible Pour Le Moment...';
		h2.after(p);
	}
}