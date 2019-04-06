let i = 1;
function addTable() {
	let name = document.getElementById("name").value;
	let quantity = document.getElementById("quantity").value

	if(name != '') {

		let valueUpper = name[0].toUpperCase() + name.slice(1);

		if (!document.querySelector('table')) {
			createTable();
			createTr(valueUpper, quantity);
			btnDelete();
		}
		else {
			createTr(valueUpper, quantity);
		}
	}
}

function createTable() {
	let table = document.createElement('table');
	table.innerHTML = '<thead><tr><th scope="col">#</th><th scope="col">Article</th><th scope="col">Quantité</th><th scope="col">Actions</th></tr></thead>'
	if (document.body.hasAttribute('class')) {
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
	tr.innerHTML = '<th scope="row">'+i+'</th> <td>' + valueUpper +'</td><td>'+ quantity + '</td><td><i class="fas fa-trash-alt" onclick="remove(this)"></i></td>';
	tr.setAttribute('onclick','this.classList.toggle(\'line\')');
	table.append(tr);
	document.getElementById("myForm").reset();
	i++;
}

function btnDelete() {
	let btnDelete = document.createElement('button');
	btnDelete.textContent = "Supprimer la liste";
	btnDelete.className = "btn btn-primary";
	btnDelete.setAttribute('onclick','allRemove()');
	document.getElementById('container').append(btnDelete);
}
